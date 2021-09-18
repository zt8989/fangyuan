// Generated from src/lang/FangyuanParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FangyuanParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FangyuanParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FangyuanParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.macroDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroDeclaration?: (ctx: MacroDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.rulesetDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulesetDeclaration?: (ctx: RulesetDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.ruleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleDeclaration?: (ctx: RuleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.ruleLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleLHS?: (ctx: RuleLHSContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.logistics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogistics?: (ctx: LogisticsContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.ruleRHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleRHS?: (ctx: RuleRHSContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.json`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson?: (ctx: JsonContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj?: (ctx: ObjContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.arr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArr?: (ctx: ArrContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.literal_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_value?: (ctx: Literal_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FangyuanParser.any_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAny_name?: (ctx: Any_nameContext) => Result;
}

