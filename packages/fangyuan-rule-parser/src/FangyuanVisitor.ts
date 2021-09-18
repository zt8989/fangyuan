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

function ucFirst(s: string) {
  return s[0].toLowerCase() + s.slice(1);
}

const trimQuote = (s: string) => s.slice(1, s.length - 1);

function inArrayOrObject(key: string, data: string[] | Object) {
  return Array.isArray(data) ? data.includes(key) : key in data;
}

type Rule = (ctx: any) => { evalute: () => boolean; execute: () => any };

function concurrent(rules: Record<string, Rule>) {
  return (ctx: any) =>
    Object.keys(rules)
      .map((key) => rules[key](ctx))
      .filter((obj) => obj.evalute())
      .map((obj) => obj.evalute());
}

function sort(rules: Record<string, Rule>) {
  return (ctx: any) => {
    for (let key of Object.keys(rules)) {
      let obj = rules[key](ctx);
      if (obj.evalute()) {
        return obj.evalute();
      }
    }
  };
}

const ruleMap = {
  concurrent,
  sort,
};

export class FangyuanVisitor
  extends AbstractParseTreeVisitor<string>
  implements FangyuanParserVisitor<string>
{
  type = "";
  types: string[] = [];
  variables: string[] = [];
  shim: Record<string, Function> = {};
  ruleNames: string[] = [];
  count = 0;
  typescript = "";
  filename = "";

  private getNewName() {
    const name = "rules$" + this.count++;
    this.ruleNames.push(name);
    return name;
  }

  private lastName() {
    return this.ruleNames[this.ruleNames.length - 1];
  }

  protected defaultResult(): string {
    return "";
  }

  visitMacroDeclaration(ctx: MacroDeclarationContext) {
    if (ctx.IMPORT()) {
      ctx.STRING_LITERAL().forEach((str) => {
        this.typescript += trimQuote(str.text) + "\n";
      });
    } else if (ctx.RETURN()) {
      ctx.STRING_LITERAL().forEach((str) => {
        this.typescript +=
          "export declare const execute: " + trimQuote(str.text) + "\n";
      });
    }
    return "";
  }

  visitTerminal(ctx: TerminalNode) {
    if ([FangyuanParser.IN_, FangyuanParser.NOT_].includes(ctx.symbol.type))
      return ctx.text + " ";
    return "";
  }

  aggregateResult(aggregate: string, nextResult: string): string {
    return aggregate + nextResult;
  }
  // Visit a parse tree produced by FangyuanParser#parse.
  visitParse(ctx: ParseContext) {
    const attributes = ctx.attribute();
    const func = attributes.some(
      (a) => a.IDENTIFIER().text === "mode" && a.value().text === `"concurrent"`
    )
      ? "concurrent"
      : "sort";
    const target = attributes.some(
      (a) => a.IDENTIFIER().text === "target" && a.value().text === `"commonjs"`
    )
      ? "commonjs"
      : "es6";
    this.shim[func] = ruleMap[func];
    const text = this.visitChildren(ctx);
    return (
      Object.keys(this.shim)
        .map((key) => this.shim[key])
        .map((func) => func.toString())
        .join("\n") +
      "\n" +
      text +
      `\n ${
        target === "commonjs" ? "exports.execute" : "export const execute"
      } = ${func}(${this.lastName()})`
    );
  }

  // Visit a parse tree produced by FangyuanParser#packageDeclaration.
  visitPackageDeclaration(ctx: PackageDeclarationContext) {
    const ids = ctx.IDENTIFIER();
    this.filename = ids[ids.length - 1].text;
    return this.visitChildren(ctx) + "\nvar " + this.getNewName() + " = {}\n";
  }

  // Visit a parse tree produced by FangyuanParser#declaration.
  visitDeclaration(ctx: DeclarationContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FangyuanParser#ruleDeclaration.
  visitRuleDeclaration(ctx: RuleDeclarationContext) {
    const text = this.visitChildren(ctx);
    const types = this.types;
    this.types = [];
    return `${this.lastName()}[${ctx.STRING_LITERAL().text}] = function(ctx){
  const { ${types.join(", ")} } = ctx  
      ${text}
      return { evalute, execute };}\n`;
  }

  visitRulesetDeclaration(ctx: RulesetDeclarationContext) {
    const name = ctx.STRING_LITERAL().text;
    const attributes = ctx.attribute();
    const func = attributes.some(
      (a) => a.IDENTIFIER().text === "mode" && a.value().text === `"concurrent"`
    )
      ? "concurrent"
      : "sort";
    this.shim[func] = ruleMap[func];
    const preRule = this.lastName();
    const newName = this.getNewName();
    const child = this.visitChildren(ctx);
    this.ruleNames.pop();
    return `var ${newName} = {}
    ${preRule}[${name}] = ${func}(${newName})
    ${child}
    `;
  }

  // Visit a parse tree produced by FangyuanParser#ruleLHS.
  visitRuleLHS(ctx: RuleLHSContext) {
    let result = [];
    for (let i = 0; i < ctx.childCount; i++) {
      const child = ctx.getChild(i);
      const text = this.visit(child);
      text && result.push(text);
    }
    const variables = this.variables;
    this.variables = [];
    return (
      "function evalute(){\n  " +
      (variables.length > 0 ? variables.join("\n") + "\n" : "") +
      "  return " +
      (result.length === 0 ? "true" : result.join(" && ")) +
      "\n  }\n"
    );
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext) {
    const text = this.visitChildren(ctx);
    if (ctx.BIND_PARAMETER_()) {
      this.variables.push(
        `let ${ctx.BIND_PARAMETER_()?.text} = ${this.type}.${text}`
      );
    }
    return this.type + "." + text + " ";
  }

  // Visit a parse tree produced by FangyuanParser#condition.
  visitCondition(ctx: ConditionContext) {
    this.type = ucFirst(ctx.IDENTIFIER().text);
    this.types.push(this.type);
    return "(" + this.visitChildren(ctx) + ")";
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
      text && result.push(text);
    }
    return (
      "  function execute(){" +
      "\n  return " +
      (result.length === 1 ? result[0] : `[${result.join(", ")}]`) +
      "\n  }\n"
    );
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
    this.shim[FangyuanParser.IN_] = inArrayOrObject;

    if (ctx.childCount === 1) {
      return this.visitChildren(ctx);
    }
    if (ctx.childCount === 3) {
      let op = ctx.getChild(1);
      if (op instanceof TerminalNode && op.symbol.type === FangyuanParser.IN_) {
        return `inArrayOrObject(${this.visit(ctx.getChild(0))}, ${this.visit(
          ctx.getChild(2)
        )})`;
      }
      return (
        this.visit(ctx.getChild(0)) +
        " " +
        ctx.getChild(1).text +
        " " +
        this.visit(ctx.getChild(2))
      );
    }
    if (ctx.childCount === 4) {
      let op = ctx.getChild(2);
      if (op instanceof TerminalNode && op.symbol.type === FangyuanParser.IN_) {
        return `!inArrayOrObject(${this.visit(ctx.getChild(0))}, ${this.visit(
          ctx.getChild(3)
        )})`;
      }
    }
    return this.visitChildren(ctx);
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
