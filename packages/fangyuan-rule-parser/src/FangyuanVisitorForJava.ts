import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  ParseContext,
  DeclarationContext,
  RuleDeclarationContext,
  RuleLHSContext,
  ConditionContext,
  LogisticsContext,
  RuleRHSContext,
  AttributeContext,
  JsonContext,
  ObjContext,
  PairContext,
  ArrContext,
  ValueContext,
  ExprContext,
  Literal_valueContext,
  Unary_operatorContext,
  Any_nameContext,
  FangyuanParser,
  PackageDeclarationContext,
  VariableDeclarationContext,
  RulesetDeclarationContext,
  MacroDeclarationContext,
} from "./lang/FangyuanParser";
import { FangyuanParserVisitor } from "./lang/FangyuanParserVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import ejs from "ejs";
import path from "path";
import * as fs from "fs";

function ucFirst(s: string) {
  return s[0].toLowerCase() + s.slice(1);
}

const trimQuote = (s: string) => s.slice(1, s.length - 1);

const opMap: Record<number, string> = {
  [FangyuanParser.IN_]: `inArrayOrObject`,
  [FangyuanParser.INCLUDES]: `includes`,
  [FangyuanParser.MATCH_]: `match`,
};

const banner = `/*
* 此文件由规则文件自动生成请勿编辑
*/
`;

const ruleType = (type = "any") =>
  `type Rule = (ctx: Context) => { evaluate: () => boolean; execute: () => ${type} };`;

const tupeBasePackage = "org.javatuples";
const tuples = [
  "Unit",
  "Pair",
  "Triplet",
  "Quartet",
  "Quintet",
  "Sextet",
  "Septet",
  "Octet",
  "Ennead",
  "Decade",
];

const ruleBasePackage = "com.olymtech";

type Rule = {
  name: string;
  execute: string;
  evaluate: string;
  children?: {
    composeRuleName: string;
    ruleName: string;
    rules: Rule[];
  };
};

class Stack<T> {
  constructor(private readonly stack = [] as T[]) {}

  pop() {
    return this.stack.pop();
  }

  push(item: T) {
    return this.stack.push(item);
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  empty() {
    return this.stack.length === 0;
  }
}

function getComposeRuleReturnType(mode: string, returnType: string) {
  if (mode === "ConcurrentRule") {
    return `List<${returnType}>`;
  } else {
    return returnType;
  }
}

function getComposeRuleName(mode: string, returnType: string) {
  if (mode === "ConcurrentRule") {
    return `List<${returnType}>`;
  } else {
    return returnType;
  }
}
export class FangyuanVisitorForJava
  extends AbstractParseTreeVisitor<string>
  implements FangyuanParserVisitor<string>
{
  type = "";
  types: string[] = [];
  variables: string[] = [];
  ruleNames: string[] = [];
  count = 0;
  package = "";
  rulesStack = new Stack<Rule[]>();
  ruleRefStack = new Stack<Rule>();
  context = {
    imports: new Set<string>(),
    package: "",
    filename: "",
    returnType: "",
    composeRuleReturnType: "",
    composeRuleName: "",
    rules: [] as Rule[],
    ruleName: "",
  };

  private getNewName() {
    const name = "rules$" + this.count++;
    this.ruleNames.push(name);
    return name;
  }

  protected defaultResult(): string {
    return "";
  }

  visitMacroDeclaration(ctx: MacroDeclarationContext) {
    const ids = ctx.IDENTIFIER();
    if (ids.length > 1 && ids[0].text === "java") {
      // if (ids[1].text === "context") {
      //   let text = "";
      //   ctx.STRING_LITERAL().forEach((str) => {
      //     text += trimQuote(str.text) + "\n";
      //   });
      //   this.typescript["context"] = text;
      // }
      if (ids[1].text === "returnType") {
        this.context["returnType"] = trimQuote(ctx.STRING_LITERAL()[0].text);
        const types = this.context["returnType"].split(",");
        if (types.length > 1) {
          this.context.imports.add(
            `${tupeBasePackage}.${tuples[types.length - 1]}`
          );
          this.context["returnType"] = `${tuples[types.length - 1]}<${trimQuote(
            ctx.STRING_LITERAL()[0].text
          )}>`;
        }
      }
    }
    // if (!this.typescript["context"]) {
    //   this.typescript["context"] = `type Context = any`;
    // }
    if (!this.context["returnType"]) {
      this.context["returnType"] = `Object`;
    }

    this.context["composeRuleReturnType"] = getComposeRuleName(
      this.context["composeRuleName"],
      this.context["returnType"]
    );

    return "";
  }

  visitTerminal(ctx: TerminalNode) {
    if (
      [
        FangyuanParser.IN_,
        FangyuanParser.NOT_,
        FangyuanParser.INCLUDES,
        FangyuanParser.MATCH_,
      ].includes(ctx.symbol.type)
    )
      return ctx.text + " ";
    return "";
  }

  aggregateResult(aggregate: string, nextResult: string): string {
    return aggregate + nextResult;
  }
  // Visit a parse tree produced by FangyuanParser#parse.
  visitParse(ctx: ParseContext) {
    const attributes = ctx.attribute();
    this.context["composeRuleName"] = attributes.some(
      (a) => a.IDENTIFIER().text === "mode" && a.value().text === `"concurrent"`
    )
      ? "ConcurrentRule"
      : "SortRule";

    this.context.imports.add(
      ruleBasePackage + "." + this.context["composeRuleName"]
    );

    this.rulesStack.push(this.context.rules);
    this.context.ruleName = this.getNewName();

    this.visitChildren(ctx);

    const template = fs.readFileSync(path.join(__dirname, "../java.template"), {
      encoding: "utf-8",
    });
    return ejs.render(template, this.context, { async: false });
  }

  // Visit a parse tree produced by FangyuanParser#packageDeclaration.
  visitPackageDeclaration(ctx: PackageDeclarationContext) {
    const ids = ctx.IDENTIFIER();
    this.package = ids.join(".");
    this.context["package"] = "package " + ids.join(".") + ";";
    return "";
  }

  // Visit a parse tree produced by FangyuanParser#declaration.
  visitDeclaration(ctx: DeclarationContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FangyuanParser#ruleDeclaration.
  visitRuleDeclaration(ctx: RuleDeclarationContext) {
    const rule = {
      name: trimQuote(ctx.STRING_LITERAL().text),
      execute: "",
      evaluate: "",
    };
    this.rulesStack.peek()?.push(rule);
    this.ruleRefStack.push(rule);
    this.visitChildren(ctx);
    this.ruleRefStack.pop();
    this.types = [];
    return "";
  }

  visitRulesetDeclaration(ctx: RulesetDeclarationContext) {
    const name = ctx.STRING_LITERAL().text;
    const attributes = ctx.attribute();
    const func = attributes.some(
      (a) => a.IDENTIFIER().text === "mode" && a.value().text === `"concurrent"`
    )
      ? "ConcurrentRule"
      : "SortRule";
    const newName = this.getNewName();
    const rule = {
      name: trimQuote(name),
      execute: "",
      evaluate: "",
      children: {
        ruleName: newName,
        composeRuleName: func,
        rules: [],
      },
    };
    this.rulesStack.peek().push(rule);
    this.rulesStack.push(rule.children.rules);
    this.visitChildren(ctx);
    this.rulesStack.pop();

    return "";
  }

  // Visit a parse tree produced by FangyuanParser#ruleLHS.
  visitRuleLHS(ctx: RuleLHSContext) {
    let result = [];
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      const text = this.visit(child);
      text && result.push(text.replace(/"/g, '\\"'));
    }
    const variables = this.variables;
    this.ruleRefStack.peek().evaluate =
      (variables.length > 0 ? variables.join(";") + ";" : "") +
      (result.length === 0 ? "true" : result.join(" && "));
    return "";
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext) {
    const text = this.visitChildren(ctx);
    if (ctx.BIND_PARAMETER_()) {
      this.variables.push(
        `${ctx.BIND_PARAMETER_()?.text} = ${this.type}.${text}`
      );
    }
    return this.type + "." + text + " ";
  }

  // Visit a parse tree produced by FangyuanParser#condition.
  visitCondition(ctx: ConditionContext) {
    const typeDeclare = ctx.IDENTIFIER().text;
    this.type = ucFirst(typeDeclare);
    this.types.push(this.type);
    const children = this.visitChildren(ctx);
    const bind = ctx.BIND_PARAMETER_();
    if (bind) {
      this.variables.push(`let ${ctx.BIND_PARAMETER_()?.text} = ${this.type}`);
    }
    return "(" + children + ")";
  }

  // Visit a parse tree produced by FangyuanParser#logistics.
  visitLogistics(ctx: LogisticsContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FangyuanParser#ruleRHS.
  visitRuleRHS(ctx: RuleRHSContext) {
    let result = [];
    for (let i = 0; i < ctx.childCount; i++) {
      const text = this.visit(ctx.getChild(i));
      text && result.push(text.replace(/"/g, '\\"'));
    }
    const variables = this.variables;
    this.variables = [];
    this.ruleRefStack.peek().execute =
      (variables.length > 0 ? variables.join(";") + ";" : "") +
      result
        .map((x, index, arr) => {
          return arr.length - 1 === index ? `return ${x};` : x;
        })
        .join("\n");
    return "";
  }

  // Visit a parse tree produced by FangyuanParser#attribute.
  visitAttribute(ctx: AttributeContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FangyuanParser#json.
  visitJson(ctx: JsonContext) {
    return ctx.text;
  }

  // Visit a parse tree produced by FangyuanParser#obj.
  visitObj(ctx: ObjContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FangyuanParser#pair.
  visitPair(ctx: PairContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FangyuanParser#arr.
  visitArr(ctx: ArrContext) {
    return ctx.text;
  }

  // Visit a parse tree produced by FangyuanParser#value.
  visitValue(ctx: ValueContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FangyuanParser#expr.
  visitExpr(ctx: ExprContext) {
    const ops: number[] = [];
    const result: string[] = [];
    let terminal = false;
    const join = (ops: number[], result: string[]) => {
      const current = result.pop();
      const prev = result.pop();
      result.push(
        `${ops.length > 1 ? "!" : ""}${
          opMap[ops[ops.length - 1]]
        }(${prev}, ${current})`
      );
    };
    for (let i = 0; i < ctx.childCount; i++) {
      let op = ctx.getChild(i);
      if (op instanceof TerminalNode) {
        if ([FangyuanParser.NOT_].includes(op.symbol.type)) {
          ops.push(op.symbol.type);
        } else if (
          [
            FangyuanParser.IN_,
            FangyuanParser.INCLUDES,
            FangyuanParser.MATCH_,
          ].includes(op.symbol.type)
        ) {
          ops.push(op.symbol.type);
          terminal = true;
        } else {
          result.push(op.symbol.text!);
          if (terminal) {
            join(ops, result);
            terminal = false;
          }
        }
      } else {
        const text = this.visit(op);
        text && result.push(text);
        if (terminal) {
          join(ops, result);
          terminal = false;
        }
      }
    }
    return result.join("");
  }

  // Visit a parse tree produced by FangyuanParser#literal_value.
  visitLiteral_value(ctx: Literal_valueContext) {
    return ctx.text;
  }

  // Visit a parse tree produced by FangyuanParser#unary_operator.
  visitUnary_operator(ctx: Unary_operatorContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FangyuanParser#any_name.
  visitAny_name(ctx: Any_nameContext) {
    return ctx.text;
  }
}
