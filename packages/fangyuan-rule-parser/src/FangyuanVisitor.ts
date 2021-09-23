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

function includes(data: string[] | Object, key: string) {
  return !inArrayOrObject(key, data);
}

type Rule = (ctx: any) => { evaluate: () => boolean; execute: () => any };

function concurrent(rules: Record<string, Rule>): Rule {
  return (ctx: any) => {
    let validRules: ReturnType<Rule>[] | undefined;

    function evaluate() {
      validRules = Object.keys(rules)
        .map((key) => rules[key](ctx))
        .filter((obj) => obj.evaluate());
      return validRules.length > 0;
    }

    function execute() {
      if (!validRules) {
        throw new Error("please confirm evaluate is true");
      }
      return validRules.map((obj) => obj.execute());
    }

    return { evaluate, execute };
  };
}

function sort(rules: Record<string, Rule>): Rule {
  return (ctx: any) => {
    let obj: ReturnType<Rule> | undefined;
    function evaluate() {
      for (let key of Object.keys(rules)) {
        obj = rules[key](ctx);
        if (obj.evaluate()) {
          return true;
        }
      }
      obj = undefined;
      return false;
    }
    function execute() {
      if (!obj) {
        throw new Error("please confirm evaluate is true");
      }
      return obj.execute();
    }

    return { evaluate, execute };
  };
}

function match(matchString: string, regex: string) {
  return new RegExp(regex).test(matchString);
}

const ruleMap = {
  concurrent: `function concurrent(rules: Record<string, Rule>) {
    return (ctx: Context) => {
      let validRules: [string, ReturnType<Rule>][] | undefined;
  
      function evaluate() {
        validRules = Object.keys(rules)
          .map((key) => [key, rules[key](ctx)] as [string, ReturnType<Rule>])
          .filter(([key, obj]) => {
            const result = obj.evaluate()
            // isDev && debug(key + ":", result)
            return result
          });
        return validRules.length > 0;
      }
  
      function execute() {
        if (!validRules) {
          throw new Error("please confirm evaluate is true");
        }
        const result =  validRules.map(([,obj]) => obj.execute());
        // isDev && debug("result:", result)
        return result
      }
  
      return { evaluate, execute };
    };
  }`,
  sort: `function sort(rules: Record<string, Rule>): Rule {
    return (ctx: Context) => {
      let obj: ReturnType<Rule> | undefined;
      function evaluate() {
        for (let key of Object.keys(rules)) {
          obj = rules[key](ctx);
          if (obj.evaluate()) {
            // isDev && debug(key + ":", true)
            return true;
          }
          // isDev && debug(key + ":", false)
        }
        obj = undefined;
        return false;
      }
      function execute() {
        if (!obj) {
          throw new Error("please confirm evaluate is true");
        }
        const result = obj.execute();
        // isDev && debug("result:", result)
        return result
      }
  
      return { evaluate, execute };
    };
  }`,
  [FangyuanParser.IN_]: `function inArrayOrObject(key: string, data: string[] | Object) {
    return Array.isArray(data) ? data.includes(key) : key in data;
  }`,
  [FangyuanParser.INCLUDES]: `function includes(data: string[] | Object, key: string) {
    return !inArrayOrObject(key, data);
  }`,
  [FangyuanParser.MATCH_]: `function match(matchString: string, regex: string) {
    return new RegExp(regex).test(matchString);
  }`,
};

const opMap: Record<number, string> = {
  [FangyuanParser.IN_]: `inArrayOrObject`,
  [FangyuanParser.INCLUDES]: `includes`,
  [FangyuanParser.MATCH_]: `match`,
};

const banner = `/*
* 此文件由规则文件自动生成请勿编辑
*/

const isDev = process.env.NODE_ENV !== 'production'
// eslint-disable-next-line
const debug = console.debug
`;

const ruleType = (type = "any") =>
  `type Rule = (ctx: Context) => { evaluate: () => boolean; execute: () => ${type} };`;

export class FangyuanVisitor
  extends AbstractParseTreeVisitor<string>
  implements FangyuanParserVisitor<string>
{
  type = "";
  types: string[] = [];
  variables: string[] = [];
  shim: Record<string, string> = {};
  ruleNames: string[] = [];
  count = 0;
  typescript: Record<string, string> = {};
  filename = "";
  target = "es6";

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
    const ids = ctx.IDENTIFIER();
    if (ids.length > 1 && ids[0].text === "typescript") {
      if (ids[1].text === "context") {
        let text = "";
        ctx.STRING_LITERAL().forEach((str) => {
          text += trimQuote(str.text) + "\n";
        });
        this.typescript["context"] = text;
      }
      if (ids[1].text === "execute") {
        this.typescript["execute"] = trimQuote(ctx.STRING_LITERAL()[0].text);
      }
    }
    if (!this.typescript["context"]) {
      this.typescript["context"] = `type Context = any`;
    }
    if (!this.typescript["execute"]) {
      this.typescript["execute"] = `any`;
    }
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
    const func = attributes.some(
      (a) => a.IDENTIFIER().text === "mode" && a.value().text === `"concurrent"`
    )
      ? "concurrent"
      : "sort";
    const target = (this.target = attributes.some(
      (a) => a.IDENTIFIER().text === "target" && a.value().text === `"commonjs"`
    )
      ? "commonjs"
      : "es6");
    this.shim[func] = ruleMap[func];
    const text = this.visitChildren(ctx);
    return (
      banner +
      "// prettier-ignore\n" +
      this.typescript["context"] +
      "\n" +
      ruleType(this.typescript["execute"]) +
      "\n" +
      Object.keys(this.shim)
        .map((key) => this.shim[key])
        .map((func) => func.toString())
        .join("\n") +
      "\n" +
      text +
      `\n ${
        target === "commonjs" ? "module.exports = " : "export default "
      }${func}(${this.lastName()})`
    );
  }

  // Visit a parse tree produced by FangyuanParser#packageDeclaration.
  visitPackageDeclaration(ctx: PackageDeclarationContext) {
    const ids = ctx.IDENTIFIER();
    this.filename = ids[ids.length - 1].text;
    const varName = this.getNewName();
    return (
      this.visitChildren(ctx) +
      `\n${
        this.target === "commonjs"
          ? `const ${varName} :Record<string, Rule> = exports.${varName} = {}`
          : `export const ${varName} :Record<string, Rule> = {}`
      }  \n`
    );
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
    return `${this.lastName()}[${
      ctx.STRING_LITERAL().text
    }] = function(ctx: Context){
  const { ${types.join(", ")} } = ctx  
      ${text}
      return { evaluate, execute };}\n`;
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
    return `${
      this.target === "commonjs"
        ? `const ${newName} :Record<string, Rule> = exports.${newName} = {}`
        : `export const ${newName} :Record<string, Rule> = {}`
    }
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
      (variables.length > 0 ? variables.join("\n") + "\n" : "") +
      "function evaluate(){\n  " +
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
    const typeDeclare = ctx.IDENTIFIER().text;
    this.type = ucFirst(typeDeclare);
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
    const ops: number[] = [];
    const result: string[] = [];
    let terminal = false;
    const join = (ops: number[], result: string[]) => {
      const current = result.pop();
      const prev = result.pop();
      this.shim[ops[ops.length - 1]] = (<any>ruleMap)[ops[ops.length - 1]];
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
    return result.join(" ");

    // if (ctx.childCount === 1) {
    //   return this.visitChildren(ctx);
    // }
    // if (ctx.childCount === 3) {
    //   let op = ctx.getChild(1);
    //   if (op! instanceof TerminalNode) {
    //     return this.visitChildren(ctx);
    //   }
    //   if (op instanceof TerminalNode && op.symbol.type === FangyuanParser.IN_) {
    //     this.shim[FangyuanParser.IN_] = ruleMap.inArrayOrObject;
    //     return `inArrayOrObject(${this.visit(ctx.getChild(0))}, ${this.visit(
    //       ctx.getChild(2)
    //     )})`;
    //   }
    //   if (
    //     op instanceof TerminalNode &&
    //     op.symbol.type === FangyuanParser.INCLUDES
    //   ) {
    //     this.shim[FangyuanParser.IN_] = ruleMap.inArrayOrObject;
    //     return `inArrayOrObject(${this.visit(ctx.getChild(2))}, ${this.visit(
    //       ctx.getChild(0)
    //     )})`;
    //   }
    //   if (
    //     op instanceof TerminalNode &&
    //     op.symbol.type === FangyuanParser.MATCH_
    //   ) {
    //     this.shim[FangyuanParser.MATCH_] = ruleMap.match;
    //     return `match(${this.visit(ctx.getChild(2))}, ${this.visit(
    //       ctx.getChild(0)
    //     )})`;
    //   }
    //   return (
    //     this.visit(ctx.getChild(0)) +
    //     " " +
    //     ctx.getChild(1).text +
    //     " " +
    //     this.visit(ctx.getChild(2))
    //   );
    // }
    // if (ctx.childCount === 4) {
    //   let op = ctx.getChild(2);
    //   if (op instanceof TerminalNode && op.symbol.type === FangyuanParser.IN_) {
    //     this.shim[FangyuanParser.IN_] = ruleMap.inArrayOrObject;
    //     return `!inArrayOrObject(${this.visit(ctx.getChild(0))}, ${this.visit(
    //       ctx.getChild(3)
    //     )})`;
    //   }
    //   if (
    //     op instanceof TerminalNode &&
    //     op.symbol.type === FangyuanParser.INCLUDES
    //   ) {
    //     this.shim[FangyuanParser.IN_] = ruleMap.inArrayOrObject;
    //     return `!inArrayOrObject(${this.visit(ctx.getChild(3))}, ${this.visit(
    //       ctx.getChild(0)
    //     )})`;
    //   }
    //   if (
    //     op instanceof TerminalNode &&
    //     op.symbol.type === FangyuanParser.MATCH_
    //   ) {
    //     this.shim[FangyuanParser.MATCH_] = ruleMap.match;
    //     return `match(${this.visit(ctx.getChild(3))}, ${this.visit(
    //       ctx.getChild(0)
    //     )})`;
    //   }
    // }
    // return this.visitChildren(ctx);
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
