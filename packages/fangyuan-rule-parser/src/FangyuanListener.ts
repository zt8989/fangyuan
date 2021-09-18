import { ParserRuleContext } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { FangyuanLexer } from "./lang/FangyuanLexer";
import {
  Any_nameContext,
  ConditionContext,
  ExprContext,
  Literal_valueContext,
  PackageDeclarationContext,
  RuleDeclarationContext,
  RuleRHSContext,
} from "./lang/FangyuanParser";
import { FangyuanParserListener } from "./lang/FangyuanParserListener";

function ucFirst(s: string) {
  return s[0].toLowerCase() + s.slice(1);
}

function or(left: string, right: string) {
  return `${left} || ${right}`;
}

function and(left: string, right: string) {
  return `${left} && ${right}`;
}

function not(left: string) {
  return `!${left}`;
}

function inArray(left: string, right: string) {
  return `(Array.isArray(${right}) && ${right}.includes(${left}))`;
}

function noop() {}

const map = {
  "&&": and,
  "||": or,
  "!": not,
  in: inArray,
};

export class FangyuanListener implements FangyuanParserListener {
  str = "";
  objectName = "";
  enterPackage(ctx: PackageDeclarationContext) {
    console.log(ctx.IDENTIFIER().join("."));
    this.str += "var rules = {};\n";
  }

  exitParse() {
    this.str += "module.exports = rules";
  }

  enterRuleDeclaration(ctx: RuleDeclarationContext) {
    this.str += `rules[${ctx.STRING_LITERAL().text}] = {
      name: ${ctx.STRING_LITERAL().text},\n
      evalute(ctx){\n`;
  }

  enterRuleRHS(ctx: RuleRHSContext) {
    this.str += `function(){\n`;
  }

  enterCondition(ctx: ConditionContext) {
    this.objectName = ucFirst(ctx.IDENTIFIER().text);
  }

  enterExpr(ctx: ExprContext) {
    if (ctx.childCount == 3) {
      this.str += "(";
      if (ctx.children && ctx.children[2].text) {
        this.str += ctx.children[2].text;
      }
    }
    if (ctx.childCount == 2) {
      this.str += "(";
      this.str += "&&";
    }
  }

  exitExpr(ctx: ExprContext) {
    if (ctx.childCount >= 3) {
      this.str += ")";
    }
  }

  exitRuleRHS() {
    this.str += "}\n";
  }

  exitRuleDeclaration(ctx: RuleDeclarationContext) {
    this.str += `}};\n`;
  }

  enterAny_name(ctx: Any_nameContext) {
    this.str += ctx.text;
  }

  enterLiteral_value(ctx: Literal_valueContext) {
    this.str += ctx.text;
  }

  visitTerminal(/*@NotNull*/ node: TerminalNode) {}
  visitErrorNode(/*@NotNull*/ node: ErrorNode) {}
  enterEveryRule(/*@NotNull*/ ctx: ParserRuleContext) {}
  exitEveryRule(/*@NotNull*/ ctx: ParserRuleContext) {}
}
