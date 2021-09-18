// Generated from src/lang/FangyuanParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./FangyuanParser";
import { MacroDeclarationContext } from "./FangyuanParser";
import { PackageDeclarationContext } from "./FangyuanParser";
import { DeclarationContext } from "./FangyuanParser";
import { RulesetDeclarationContext } from "./FangyuanParser";
import { RuleDeclarationContext } from "./FangyuanParser";
import { RuleLHSContext } from "./FangyuanParser";
import { ConditionContext } from "./FangyuanParser";
import { LogisticsContext } from "./FangyuanParser";
import { RuleRHSContext } from "./FangyuanParser";
import { AttributeContext } from "./FangyuanParser";
import { JsonContext } from "./FangyuanParser";
import { ObjContext } from "./FangyuanParser";
import { PairContext } from "./FangyuanParser";
import { ArrContext } from "./FangyuanParser";
import { ValueContext } from "./FangyuanParser";
import { ExprContext } from "./FangyuanParser";
import { VariableDeclarationContext } from "./FangyuanParser";
import { Literal_valueContext } from "./FangyuanParser";
import { Unary_operatorContext } from "./FangyuanParser";
import { Any_nameContext } from "./FangyuanParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FangyuanParser`.
 */
export interface FangyuanParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FangyuanParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.macroDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMacroDeclaration?: (ctx: MacroDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.macroDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMacroDeclaration?: (ctx: MacroDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.rulesetDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRulesetDeclaration?: (ctx: RulesetDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.rulesetDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRulesetDeclaration?: (ctx: RulesetDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.ruleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRuleDeclaration?: (ctx: RuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.ruleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRuleDeclaration?: (ctx: RuleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.ruleLHS`.
	 * @param ctx the parse tree
	 */
	enterRuleLHS?: (ctx: RuleLHSContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.ruleLHS`.
	 * @param ctx the parse tree
	 */
	exitRuleLHS?: (ctx: RuleLHSContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.logistics`.
	 * @param ctx the parse tree
	 */
	enterLogistics?: (ctx: LogisticsContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.logistics`.
	 * @param ctx the parse tree
	 */
	exitLogistics?: (ctx: LogisticsContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.ruleRHS`.
	 * @param ctx the parse tree
	 */
	enterRuleRHS?: (ctx: RuleRHSContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.ruleRHS`.
	 * @param ctx the parse tree
	 */
	exitRuleRHS?: (ctx: RuleRHSContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.arr`.
	 * @param ctx the parse tree
	 */
	enterArr?: (ctx: ArrContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.arr`.
	 * @param ctx the parse tree
	 */
	exitArr?: (ctx: ArrContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.literal_value`.
	 * @param ctx the parse tree
	 */
	enterLiteral_value?: (ctx: Literal_valueContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.literal_value`.
	 * @param ctx the parse tree
	 */
	exitLiteral_value?: (ctx: Literal_valueContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `FangyuanParser.any_name`.
	 * @param ctx the parse tree
	 */
	enterAny_name?: (ctx: Any_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FangyuanParser.any_name`.
	 * @param ctx the parse tree
	 */
	exitAny_name?: (ctx: Any_nameContext) => void;
}

