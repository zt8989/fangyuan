// Generated from src/lang/FangyuanParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FangyuanParserListener } from "./FangyuanParserListener";
import { FangyuanParserVisitor } from "./FangyuanParserVisitor";


export class FangyuanParser extends Parser {
	public static readonly BIND_PARAMETER_ = 1;
	public static readonly RULESET = 2;
	public static readonly RULE = 3;
	public static readonly WHEN = 4;
	public static readonly THEN = 5;
	public static readonly END = 6;
	public static readonly NAMESPACE = 7;
	public static readonly AND_ = 8;
	public static readonly OR_ = 9;
	public static readonly NOT_ = 10;
	public static readonly IS_ = 11;
	public static readonly IN_ = 12;
	public static readonly LIKE_ = 13;
	public static readonly MATCH_ = 14;
	public static readonly REGEXP_ = 15;
	public static readonly ISNULL_ = 16;
	public static readonly NOTNULL_ = 17;
	public static readonly NULL_ = 18;
	public static readonly JSON_NUMBER = 19;
	public static readonly ABSTRACT = 20;
	public static readonly ASSERT = 21;
	public static readonly BOOLEAN = 22;
	public static readonly BREAK = 23;
	public static readonly BYTE = 24;
	public static readonly CASE = 25;
	public static readonly CATCH = 26;
	public static readonly CHAR = 27;
	public static readonly CLASS = 28;
	public static readonly CONST = 29;
	public static readonly CONTINUE = 30;
	public static readonly DEFAULT = 31;
	public static readonly DO = 32;
	public static readonly DOUBLE = 33;
	public static readonly ELSE = 34;
	public static readonly ENUM = 35;
	public static readonly EXTENDS = 36;
	public static readonly FINAL = 37;
	public static readonly FINALLY = 38;
	public static readonly FLOAT = 39;
	public static readonly FOR = 40;
	public static readonly IF = 41;
	public static readonly GOTO = 42;
	public static readonly IMPLEMENTS = 43;
	public static readonly IMPORT = 44;
	public static readonly INSTANCEOF = 45;
	public static readonly INT = 46;
	public static readonly INTERFACE = 47;
	public static readonly LONG = 48;
	public static readonly NATIVE = 49;
	public static readonly NEW = 50;
	public static readonly PACKAGE = 51;
	public static readonly PRIVATE = 52;
	public static readonly PROTECTED = 53;
	public static readonly PUBLIC = 54;
	public static readonly RETURN = 55;
	public static readonly SHORT = 56;
	public static readonly STATIC = 57;
	public static readonly STRICTFP = 58;
	public static readonly SUPER = 59;
	public static readonly SWITCH = 60;
	public static readonly SYNCHRONIZED = 61;
	public static readonly THIS = 62;
	public static readonly THROW = 63;
	public static readonly THROWS = 64;
	public static readonly TRANSIENT = 65;
	public static readonly TRY = 66;
	public static readonly VOID = 67;
	public static readonly VOLATILE = 68;
	public static readonly WHILE = 69;
	public static readonly DECIMAL_LITERAL = 70;
	public static readonly HEX_LITERAL = 71;
	public static readonly OCT_LITERAL = 72;
	public static readonly BINARY_LITERAL = 73;
	public static readonly FLOAT_LITERAL = 74;
	public static readonly HEX_FLOAT_LITERAL = 75;
	public static readonly BOOL_LITERAL = 76;
	public static readonly CHAR_LITERAL = 77;
	public static readonly STRING_LITERAL = 78;
	public static readonly NULL_LITERAL = 79;
	public static readonly LPAREN = 80;
	public static readonly RPAREN = 81;
	public static readonly LBRACE = 82;
	public static readonly RBRACE = 83;
	public static readonly LBRACK = 84;
	public static readonly RBRACK = 85;
	public static readonly SEMI = 86;
	public static readonly COMMA = 87;
	public static readonly DOT = 88;
	public static readonly EQUAL = 89;
	public static readonly LE = 90;
	public static readonly GE = 91;
	public static readonly NOTEQUAL = 92;
	public static readonly AND = 93;
	public static readonly OR = 94;
	public static readonly INC = 95;
	public static readonly DEC = 96;
	public static readonly ASSIGN = 97;
	public static readonly GT = 98;
	public static readonly LT = 99;
	public static readonly BANG = 100;
	public static readonly TILDE = 101;
	public static readonly QUESTION = 102;
	public static readonly COLON = 103;
	public static readonly ADD = 104;
	public static readonly SUB = 105;
	public static readonly MUL = 106;
	public static readonly DIV = 107;
	public static readonly BITAND = 108;
	public static readonly BITOR = 109;
	public static readonly CARET = 110;
	public static readonly MOD = 111;
	public static readonly ADD_ASSIGN = 112;
	public static readonly SUB_ASSIGN = 113;
	public static readonly MUL_ASSIGN = 114;
	public static readonly DIV_ASSIGN = 115;
	public static readonly AND_ASSIGN = 116;
	public static readonly OR_ASSIGN = 117;
	public static readonly XOR_ASSIGN = 118;
	public static readonly MOD_ASSIGN = 119;
	public static readonly LSHIFT_ASSIGN = 120;
	public static readonly RSHIFT_ASSIGN = 121;
	public static readonly URSHIFT_ASSIGN = 122;
	public static readonly ARROW = 123;
	public static readonly COLONCOLON = 124;
	public static readonly AT = 125;
	public static readonly ELLIPSIS = 126;
	public static readonly WS = 127;
	public static readonly COMMENT = 128;
	public static readonly LINE_COMMENT = 129;
	public static readonly IDENTIFIER = 130;
	public static readonly RULE_parse = 0;
	public static readonly RULE_macroDeclaration = 1;
	public static readonly RULE_packageDeclaration = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_rulesetDeclaration = 4;
	public static readonly RULE_ruleDeclaration = 5;
	public static readonly RULE_ruleLHS = 6;
	public static readonly RULE_condition = 7;
	public static readonly RULE_logistics = 8;
	public static readonly RULE_ruleRHS = 9;
	public static readonly RULE_attribute = 10;
	public static readonly RULE_json = 11;
	public static readonly RULE_obj = 12;
	public static readonly RULE_pair = 13;
	public static readonly RULE_arr = 14;
	public static readonly RULE_value = 15;
	public static readonly RULE_expr = 16;
	public static readonly RULE_variableDeclaration = 17;
	public static readonly RULE_literal_value = 18;
	public static readonly RULE_unary_operator = 19;
	public static readonly RULE_any_name = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "macroDeclaration", "packageDeclaration", "declaration", "rulesetDeclaration", 
		"ruleDeclaration", "ruleLHS", "condition", "logistics", "ruleRHS", "attribute", 
		"json", "obj", "pair", "arr", "value", "expr", "variableDeclaration", 
		"literal_value", "unary_operator", "any_name",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'and'", "'or'", "'not'", "'is'", "'in'", "'like'", "'match'", 
		"'regexp'", "'isnull'", "'notnull'", undefined, undefined, "'abstract'", 
		"'assert'", "'boolean'", "'break'", "'byte'", "'case'", "'catch'", "'char'", 
		"'class'", "'const'", "'continue'", "'default'", "'do'", "'double'", "'else'", 
		"'enum'", "'extends'", "'final'", "'finally'", "'float'", "'for'", "'if'", 
		"'goto'", "'implements'", "'import'", "'instanceof'", "'int'", "'interface'", 
		"'long'", "'native'", "'new'", "'package'", "'private'", "'protected'", 
		"'public'", "'return'", "'short'", "'static'", "'strictfp'", "'super'", 
		"'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", "'transient'", 
		"'try'", "'void'", "'volatile'", "'while'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'null'", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'=='", 
		"'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", "'='", "'>'", 
		"'<'", "'!'", "'~'", "'?'", "':'", "'+'", "'-'", "'*'", "'/'", "'&'", 
		"'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", 
		"'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'", "'@'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BIND_PARAMETER_", "RULESET", "RULE", "WHEN", "THEN", "END", 
		"NAMESPACE", "AND_", "OR_", "NOT_", "IS_", "IN_", "LIKE_", "MATCH_", "REGEXP_", 
		"ISNULL_", "NOTNULL_", "NULL_", "JSON_NUMBER", "ABSTRACT", "ASSERT", "BOOLEAN", 
		"BREAK", "BYTE", "CASE", "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", 
		"DEFAULT", "DO", "DOUBLE", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", 
		"FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", 
		"INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", "SUPER", "SWITCH", 
		"SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", "TRY", "VOID", 
		"VOLATILE", "WHILE", "DECIMAL_LITERAL", "HEX_LITERAL", "OCT_LITERAL", 
		"BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", "BOOL_LITERAL", 
		"CHAR_LITERAL", "STRING_LITERAL", "NULL_LITERAL", "LPAREN", "RPAREN", 
		"LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "EQUAL", 
		"LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ASSIGN", "GT", "LT", 
		"BANG", "TILDE", "QUESTION", "COLON", "ADD", "SUB", "MUL", "DIV", "BITAND", 
		"BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
		"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
		"RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", "AT", "ELLIPSIS", 
		"WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FangyuanParser._LITERAL_NAMES, FangyuanParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FangyuanParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FangyuanParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return FangyuanParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FangyuanParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FangyuanParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FangyuanParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FangyuanParser.PACKAGE) {
				{
				this.state = 42;
				this.packageDeclaration();
				}
			}

			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FangyuanParser.AT) {
				{
				{
				this.state = 45;
				this.macroDeclaration();
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FangyuanParser.IDENTIFIER) {
				{
				{
				this.state = 51;
				this.attribute();
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FangyuanParser.RULESET || _la === FangyuanParser.RULE) {
				{
				{
				this.state = 57;
				this.declaration();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.match(FangyuanParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroDeclaration(): MacroDeclarationContext {
		let _localctx: MacroDeclarationContext = new MacroDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FangyuanParser.RULE_macroDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(FangyuanParser.AT);
			this.state = 66;
			_la = this._input.LA(1);
			if (!(_la === FangyuanParser.IMPORT || _la === FangyuanParser.RETURN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 67;
			this.match(FangyuanParser.LBRACE);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 68;
				this.match(FangyuanParser.STRING_LITERAL);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FangyuanParser.STRING_LITERAL);
			this.state = 73;
			this.match(FangyuanParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FangyuanParser.RULE_packageDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(FangyuanParser.PACKAGE);
			this.state = 80;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 76;
					this.match(FangyuanParser.IDENTIFIER);
					this.state = 77;
					this.match(FangyuanParser.DOT);
					}
					}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 83;
			this.match(FangyuanParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FangyuanParser.RULE_declaration);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FangyuanParser.RULE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.ruleDeclaration();
				}
				break;
			case FangyuanParser.RULESET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.rulesetDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulesetDeclaration(): RulesetDeclarationContext {
		let _localctx: RulesetDeclarationContext = new RulesetDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FangyuanParser.RULE_rulesetDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(FangyuanParser.RULESET);
			this.state = 90;
			this.match(FangyuanParser.STRING_LITERAL);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FangyuanParser.IDENTIFIER) {
				{
				{
				this.state = 91;
				this.attribute();
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 97;
				this.ruleDeclaration();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FangyuanParser.RULE);
			this.state = 102;
			this.match(FangyuanParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleDeclaration(): RuleDeclarationContext {
		let _localctx: RuleDeclarationContext = new RuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FangyuanParser.RULE_ruleDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(FangyuanParser.RULE);
			this.state = 105;
			this.match(FangyuanParser.STRING_LITERAL);
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FangyuanParser.IDENTIFIER) {
				{
				{
				this.state = 106;
				this.attribute();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 112;
			this.match(FangyuanParser.WHEN);
			this.state = 113;
			this.ruleLHS();
			this.state = 114;
			this.match(FangyuanParser.THEN);
			this.state = 115;
			this.ruleRHS();
			this.state = 116;
			this.match(FangyuanParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleLHS(): RuleLHSContext {
		let _localctx: RuleLHSContext = new RuleLHSContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FangyuanParser.RULE_ruleLHS);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FangyuanParser.BIND_PARAMETER_ || _la === FangyuanParser.NOT_ || _la === FangyuanParser.AND || _la === FangyuanParser.OR || _la === FangyuanParser.IDENTIFIER) {
				{
				{
				this.state = 118;
				this.condition();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FangyuanParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FangyuanParser.NOT_ || _la === FangyuanParser.AND || _la === FangyuanParser.OR) {
				{
				this.state = 124;
				this.logistics();
				}
			}

			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FangyuanParser.BIND_PARAMETER_) {
				{
				this.state = 127;
				this.match(FangyuanParser.BIND_PARAMETER_);
				this.state = 128;
				this.match(FangyuanParser.COLON);
				}
			}

			this.state = 131;
			this.match(FangyuanParser.IDENTIFIER);
			this.state = 132;
			this.match(FangyuanParser.LPAREN);
			this.state = 133;
			this.expr(0);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FangyuanParser.COMMA) {
				{
				{
				this.state = 134;
				this.match(FangyuanParser.COMMA);
				this.state = 135;
				this.expr(0);
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 141;
			this.match(FangyuanParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logistics(): LogisticsContext {
		let _localctx: LogisticsContext = new LogisticsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FangyuanParser.RULE_logistics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			_la = this._input.LA(1);
			if (!(_la === FangyuanParser.NOT_ || _la === FangyuanParser.AND || _la === FangyuanParser.OR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleRHS(): RuleRHSContext {
		let _localctx: RuleRHSContext = new RuleRHSContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FangyuanParser.RULE_ruleRHS);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.json();
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FangyuanParser.COMMA) {
				{
				{
				this.state = 146;
				this.match(FangyuanParser.COMMA);
				this.state = 147;
				this.json();
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FangyuanParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(FangyuanParser.IDENTIFIER);
			this.state = 154;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FangyuanParser.RULE_json);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let _localctx: ObjContext = new ObjContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FangyuanParser.RULE_obj);
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.match(FangyuanParser.LBRACE);
				this.state = 159;
				this.pair();
				this.state = 160;
				this.match(FangyuanParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 162;
				this.match(FangyuanParser.LBRACE);
				this.state = 163;
				this.match(FangyuanParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FangyuanParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(FangyuanParser.STRING_LITERAL);
			this.state = 167;
			this.match(FangyuanParser.COLON);
			this.state = 168;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arr(): ArrContext {
		let _localctx: ArrContext = new ArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FangyuanParser.RULE_arr);
		let _la: number;
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.match(FangyuanParser.LBRACK);
				this.state = 171;
				this.value();
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FangyuanParser.COMMA) {
					{
					{
					this.state = 172;
					this.match(FangyuanParser.COMMA);
					this.state = 173;
					this.value();
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 179;
				this.match(FangyuanParser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 181;
				this.match(FangyuanParser.LBRACK);
				this.state = 182;
				this.match(FangyuanParser.RBRACK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FangyuanParser.RULE_value);
		try {
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FangyuanParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.match(FangyuanParser.STRING_LITERAL);
				}
				break;
			case FangyuanParser.JSON_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.match(FangyuanParser.JSON_NUMBER);
				}
				break;
			case FangyuanParser.LBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 187;
				this.obj();
				}
				break;
			case FangyuanParser.LBRACK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 188;
				this.arr();
				}
				break;
			case FangyuanParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 189;
				this.match(FangyuanParser.BOOL_LITERAL);
				}
				break;
			case FangyuanParser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 190;
				this.match(FangyuanParser.NULL_LITERAL);
				}
				break;
			case FangyuanParser.BIND_PARAMETER_:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 191;
				this.match(FangyuanParser.BIND_PARAMETER_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, FangyuanParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 195;
				this.literal_value();
				}
				break;

			case 2:
				{
				this.state = 196;
				this.variableDeclaration();
				}
				break;

			case 3:
				{
				this.state = 197;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (FangyuanParser.INC - 95)) | (1 << (FangyuanParser.DEC - 95)) | (1 << (FangyuanParser.ADD - 95)) | (1 << (FangyuanParser.SUB - 95)))) !== 0))) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 198;
				this.expr(15);
				}
				break;

			case 4:
				{
				this.state = 199;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FangyuanParser.BANG || _la === FangyuanParser.TILDE)) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 200;
				this.expr(14);
				}
				break;

			case 5:
				{
				this.state = 201;
				this.match(FangyuanParser.LPAREN);
				this.state = 202;
				this.expr(0);
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FangyuanParser.COMMA) {
					{
					{
					this.state = 203;
					this.match(FangyuanParser.COMMA);
					this.state = 204;
					this.expr(0);
					}
					}
					this.state = 209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 210;
				this.match(FangyuanParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 251;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 214;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 215;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (FangyuanParser.MUL - 106)) | (1 << (FangyuanParser.DIV - 106)) | (1 << (FangyuanParser.MOD - 106)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 216;
						this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 217;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 218;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FangyuanParser.ADD || _la === FangyuanParser.SUB)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 219;
						this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 220;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 221;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (FangyuanParser.LE - 90)) | (1 << (FangyuanParser.GE - 90)) | (1 << (FangyuanParser.GT - 90)) | (1 << (FangyuanParser.LT - 90)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 222;
						this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 223;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 224;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FangyuanParser.IN_ || _la === FangyuanParser.EQUAL || _la === FangyuanParser.NOTEQUAL)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 225;
						this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 226;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 227;
						_localctx._bop = this.match(FangyuanParser.BITAND);
						this.state = 228;
						this.expr(10);
						}
						break;

					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 229;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 230;
						_localctx._bop = this.match(FangyuanParser.CARET);
						this.state = 231;
						this.expr(9);
						}
						break;

					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 232;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 233;
						_localctx._bop = this.match(FangyuanParser.BITOR);
						this.state = 234;
						this.expr(8);
						}
						break;

					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 235;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 236;
						_localctx._bop = this.match(FangyuanParser.AND);
						this.state = 237;
						this.expr(7);
						}
						break;

					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 238;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 239;
						_localctx._bop = this.match(FangyuanParser.OR);
						this.state = 240;
						this.expr(6);
						}
						break;

					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 241;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 242;
						_localctx._bop = this.match(FangyuanParser.OR_);
						this.state = 243;
						this.expr(5);
						}
						break;

					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 244;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 245;
						_localctx._bop = this.match(FangyuanParser.AND_);
						this.state = 246;
						this.expr(4);
						}
						break;

					case 12:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FangyuanParser.RULE_expr);
						this.state = 247;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 248;
						this.match(FangyuanParser.NOT_);
						this.state = 249;
						this.match(FangyuanParser.IN_);
						this.state = 250;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FangyuanParser.RULE_variableDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FangyuanParser.BIND_PARAMETER_) {
				{
				this.state = 256;
				this.match(FangyuanParser.BIND_PARAMETER_);
				this.state = 257;
				this.match(FangyuanParser.COLON);
				}
			}

			this.state = 265;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 260;
					this.any_name();
					this.state = 261;
					this.match(FangyuanParser.DOT);
					}
					}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 268;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal_value(): Literal_valueContext {
		let _localctx: Literal_valueContext = new Literal_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FangyuanParser.RULE_literal_value);
		try {
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 271;
				this.match(FangyuanParser.BIND_PARAMETER_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FangyuanParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			_la = this._input.LA(1);
			if (!(_la === FangyuanParser.NOT_ || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (FangyuanParser.TILDE - 101)) | (1 << (FangyuanParser.ADD - 101)) | (1 << (FangyuanParser.SUB - 101)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public any_name(): Any_nameContext {
		let _localctx: Any_nameContext = new Any_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FangyuanParser.RULE_any_name);
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FangyuanParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.match(FangyuanParser.IDENTIFIER);
				}
				break;
			case FangyuanParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.match(FangyuanParser.STRING_LITERAL);
				}
				break;
			case FangyuanParser.LBRACK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 278;
				this.match(FangyuanParser.LBRACK);
				this.state = 279;
				this.match(FangyuanParser.STRING_LITERAL);
				this.state = 280;
				this.match(FangyuanParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 16:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 4);

		case 10:
			return this.precpred(this._ctx, 3);

		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x84\u011E\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x05\x02" +
		".\n\x02\x03\x02\x07\x021\n\x02\f\x02\x0E\x024\v\x02\x03\x02\x07\x027\n" +
		"\x02\f\x02\x0E\x02:\v\x02\x03\x02\x07\x02=\n\x02\f\x02\x0E\x02@\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03H\n\x03\r\x03" +
		"\x0E\x03I\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04Q\n\x04\f\x04" +
		"\x0E\x04T\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05Z\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x07\x06_\n\x06\f\x06\x0E\x06b\v\x06\x03\x06\x06\x06e" +
		"\n\x06\r\x06\x0E\x06f\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07" +
		"n\n\x07\f\x07\x0E\x07q\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x07\bz\n\b\f\b\x0E\b}\v\b\x03\t\x05\t\x80\n\t\x03\t\x03\t\x05" +
		"\t\x84\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x8B\n\t\f\t\x0E\t\x8E\v" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\x97\n\v\f\v\x0E\v\x9A" +
		"\v\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\xA7\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x07\x10\xB1\n\x10\f\x10\x0E\x10\xB4\v\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\xBA\n\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC3\n\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07" +
		"\x12\xD0\n\x12\f\x12\x0E\x12\xD3\v\x12\x03\x12\x03\x12\x05\x12\xD7\n\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x07\x12\xFE\n\x12\f\x12\x0E\x12\u0101\v\x12\x03\x13\x03\x13\x05" +
		"\x13\u0105\n\x13\x03\x13\x03\x13\x03\x13\x07\x13\u010A\n\x13\f\x13\x0E" +
		"\x13\u010D\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u0113\n\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u011C\n\x16" +
		"\x03\x16\x02\x02\x03\"\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02\x02\v\x04\x02..99\x04\x02\f\f_`\x04\x02" +
		"abjk\x03\x02fg\x04\x02lmqq\x03\x02jk\x04\x02\\]de\x05\x02\x0E\x0E[[^^" +
		"\x05\x02\f\fggjk\x02\u0136\x02-\x03\x02\x02\x02\x04C\x03\x02\x02\x02\x06" +
		"M\x03\x02\x02\x02\bY\x03\x02\x02\x02\n[\x03\x02\x02\x02\fj\x03\x02\x02" +
		"\x02\x0E{\x03\x02\x02\x02\x10\x7F\x03\x02\x02\x02\x12\x91\x03\x02\x02" +
		"\x02\x14\x93\x03\x02\x02\x02\x16\x9B\x03\x02\x02\x02\x18\x9E\x03\x02\x02" +
		"\x02\x1A\xA6\x03\x02\x02\x02\x1C\xA8\x03\x02\x02\x02\x1E\xB9\x03\x02\x02" +
		"\x02 \xC2\x03\x02\x02\x02\"\xD6\x03\x02\x02\x02$\u0104\x03\x02\x02\x02" +
		"&\u0112\x03\x02\x02\x02(\u0114\x03\x02\x02\x02*\u011B\x03\x02\x02\x02" +
		",.\x05\x06\x04\x02-,\x03\x02\x02\x02-.\x03\x02\x02\x02.2\x03\x02\x02\x02" +
		"/1\x05\x04\x03\x020/\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x02" +
		"23\x03\x02\x02\x0238\x03\x02\x02\x0242\x03\x02\x02\x0257\x05\x16\f\x02" +
		"65\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x02" +
		"9>\x03\x02\x02\x02:8\x03\x02\x02\x02;=\x05\b\x05\x02<;\x03\x02\x02\x02" +
		"=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?A\x03\x02\x02\x02" +
		"@>\x03\x02\x02\x02AB\x07\x02\x02\x03B\x03\x03\x02\x02\x02CD\x07\x7F\x02" +
		"\x02DE\t\x02\x02\x02EG\x07T\x02\x02FH\x07P\x02\x02GF\x03\x02\x02\x02H" +
		"I\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KL\x07U\x02\x02L\x05\x03\x02\x02\x02MR\x075\x02\x02NO\x07\x84\x02\x02" +
		"OQ\x07Z\x02\x02PN\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02" +
		"RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02UV\x07\x84\x02\x02" +
		"V\x07\x03\x02\x02\x02WZ\x05\f\x07\x02XZ\x05\n\x06\x02YW\x03\x02\x02\x02" +
		"YX\x03\x02\x02\x02Z\t\x03\x02\x02\x02[\\\x07\x04\x02\x02\\`\x07P\x02\x02" +
		"]_\x05\x16\f\x02^]\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02\x02ce\x05\f\x07\x02" +
		"dc\x03\x02\x02\x02ef\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02" +
		"gh\x03\x02\x02\x02hi\x07\b\x02\x02i\v\x03\x02\x02\x02jk\x07\x05\x02\x02" +
		"ko\x07P\x02\x02ln\x05\x16\f\x02ml\x03\x02\x02\x02nq\x03\x02\x02\x02om" +
		"\x03\x02\x02\x02op\x03\x02\x02\x02pr\x03\x02\x02\x02qo\x03\x02\x02\x02" +
		"rs\x07\x06\x02\x02st\x05\x0E\b\x02tu\x07\x07\x02\x02uv\x05\x14\v\x02v" +
		"w\x07\b\x02\x02w\r\x03\x02\x02\x02xz\x05\x10\t\x02yx\x03\x02\x02\x02z" +
		"}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x0F\x03\x02\x02" +
		"\x02}{\x03\x02\x02\x02~\x80\x05\x12\n\x02\x7F~\x03\x02\x02\x02\x7F\x80" +
		"\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x82\x07\x03\x02\x02\x82\x84" +
		"\x07i\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85" +
		"\x03\x02\x02\x02\x85\x86\x07\x84\x02\x02\x86\x87\x07R\x02\x02\x87\x8C" +
		"\x05\"\x12\x02\x88\x89\x07Y\x02\x02\x89\x8B\x05\"\x12\x02\x8A\x88\x03" +
		"\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03" +
		"\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x90\x07" +
		"S\x02\x02\x90\x11\x03\x02\x02\x02\x91\x92\t\x03\x02\x02\x92\x13\x03\x02" +
		"\x02\x02\x93\x98\x05\x18\r\x02\x94\x95\x07Y\x02\x02\x95\x97\x05\x18\r" +
		"\x02\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02" +
		"\x02\x98\x99\x03\x02\x02\x02\x99\x15\x03\x02\x02\x02\x9A\x98\x03\x02\x02" +
		"\x02\x9B\x9C\x07\x84\x02\x02\x9C\x9D\x05 \x11\x02\x9D\x17\x03\x02\x02" +
		"\x02\x9E\x9F\x05 \x11\x02\x9F\x19\x03\x02\x02\x02\xA0\xA1\x07T\x02\x02" +
		"\xA1\xA2\x05\x1C\x0F\x02\xA2\xA3\x07U\x02\x02\xA3\xA7\x03\x02\x02\x02" +
		"\xA4\xA5\x07T\x02\x02\xA5\xA7\x07U\x02\x02\xA6\xA0\x03\x02\x02\x02\xA6" +
		"\xA4\x03\x02\x02\x02\xA7\x1B\x03\x02\x02\x02\xA8\xA9\x07P\x02\x02\xA9" +
		"\xAA\x07i\x02\x02\xAA\xAB\x05 \x11\x02\xAB\x1D\x03\x02\x02\x02\xAC\xAD" +
		"\x07V\x02\x02\xAD\xB2\x05 \x11\x02\xAE\xAF\x07Y\x02\x02\xAF\xB1\x05 \x11" +
		"\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
		"\x02\xB5\xB6\x07W\x02\x02\xB6\xBA\x03\x02\x02\x02\xB7\xB8\x07V\x02\x02" +
		"\xB8\xBA\x07W\x02\x02\xB9\xAC\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xBA\x1F\x03\x02\x02\x02\xBB\xC3\x07P\x02\x02\xBC\xC3\x07\x15\x02\x02" +
		"\xBD\xC3\x05\x1A\x0E\x02\xBE\xC3\x05\x1E\x10\x02\xBF\xC3\x07N\x02\x02" +
		"\xC0\xC3\x07Q\x02\x02\xC1\xC3\x07\x03\x02\x02\xC2\xBB\x03\x02\x02\x02" +
		"\xC2\xBC\x03\x02\x02\x02\xC2\xBD\x03\x02\x02\x02\xC2\xBE\x03\x02\x02\x02" +
		"\xC2\xBF\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1\x03\x02\x02\x02" +
		"\xC3!\x03\x02\x02\x02\xC4\xC5\b\x12\x01\x02\xC5\xD7\x05&\x14\x02\xC6\xD7" +
		"\x05$\x13\x02\xC7\xC8\t\x04\x02\x02\xC8\xD7\x05\"\x12\x11\xC9\xCA\t\x05" +
		"\x02\x02\xCA\xD7\x05\"\x12\x10\xCB\xCC\x07R\x02\x02\xCC\xD1\x05\"\x12" +
		"\x02\xCD\xCE\x07Y\x02\x02\xCE\xD0\x05\"\x12\x02\xCF\xCD\x03\x02\x02\x02" +
		"\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02" +
		"\xD2\xD4\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x07S\x02\x02" +
		"\xD5\xD7\x03\x02\x02\x02\xD6\xC4\x03\x02\x02\x02\xD6\xC6\x03\x02\x02\x02" +
		"\xD6\xC7\x03\x02\x02\x02\xD6\xC9\x03\x02\x02\x02\xD6\xCB\x03\x02\x02\x02" +
		"\xD7\xFF\x03\x02\x02\x02\xD8\xD9\f\x0F\x02\x02\xD9\xDA\t\x06\x02\x02\xDA" +
		"\xFE\x05\"\x12\x10\xDB\xDC\f\x0E\x02\x02\xDC\xDD\t\x07\x02\x02\xDD\xFE" +
		"\x05\"\x12\x0F\xDE\xDF\f\r\x02\x02\xDF\xE0\t\b\x02\x02\xE0\xFE\x05\"\x12" +
		"\x0E\xE1\xE2\f\f\x02\x02\xE2\xE3\t\t\x02\x02\xE3\xFE\x05\"\x12\r\xE4\xE5" +
		"\f\v\x02\x02\xE5\xE6\x07n\x02\x02\xE6\xFE\x05\"\x12\f\xE7\xE8\f\n\x02" +
		"\x02\xE8\xE9\x07p\x02\x02\xE9\xFE\x05\"\x12\v\xEA\xEB\f\t\x02\x02\xEB" +
		"\xEC\x07o\x02\x02\xEC\xFE\x05\"\x12\n\xED\xEE\f\b\x02\x02\xEE\xEF\x07" +
		"_\x02\x02\xEF\xFE\x05\"\x12\t\xF0\xF1\f\x07\x02\x02\xF1\xF2\x07`\x02\x02" +
		"\xF2\xFE\x05\"\x12\b\xF3\xF4\f\x06\x02\x02\xF4\xF5\x07\v\x02\x02\xF5\xFE" +
		"\x05\"\x12\x07\xF6\xF7\f\x05\x02\x02\xF7\xF8\x07\n\x02\x02\xF8\xFE\x05" +
		"\"\x12\x06\xF9\xFA\f\x03\x02\x02\xFA\xFB\x07\f\x02\x02\xFB\xFC\x07\x0E" +
		"\x02\x02\xFC\xFE\x05\"\x12\x04\xFD\xD8\x03\x02\x02\x02\xFD\xDB\x03\x02" +
		"\x02\x02\xFD\xDE\x03\x02\x02\x02\xFD\xE1\x03\x02\x02\x02\xFD\xE4\x03\x02" +
		"\x02\x02\xFD\xE7\x03\x02\x02\x02\xFD\xEA\x03\x02\x02\x02\xFD\xED\x03\x02" +
		"\x02\x02\xFD\xF0\x03\x02\x02\x02\xFD\xF3\x03\x02\x02\x02\xFD\xF6\x03\x02" +
		"\x02\x02\xFD\xF9\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03" +
		"\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100#\x03\x02\x02\x02\u0101\xFF" +
		"\x03\x02\x02\x02\u0102\u0103\x07\x03\x02\x02\u0103\u0105\x07i\x02\x02" +
		"\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u010B\x03" +
		"\x02\x02\x02\u0106\u0107\x05*\x16\x02\u0107\u0108\x07Z\x02\x02\u0108\u010A" +
		"\x03\x02\x02\x02\u0109\u0106\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02" +
		"\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03" +
		"\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E\u010F\x05*\x16\x02\u010F" +
		"%\x03\x02\x02\x02\u0110\u0113\x05 \x11\x02\u0111\u0113\x07\x03\x02\x02" +
		"\u0112\u0110\x03\x02\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\'\x03\x02" +
		"\x02\x02\u0114\u0115\t\n\x02\x02\u0115)\x03\x02\x02\x02\u0116\u011C\x07" +
		"\x84\x02\x02\u0117\u011C\x07P\x02\x02\u0118\u0119\x07V\x02\x02\u0119\u011A" +
		"\x07P\x02\x02\u011A\u011C\x07W\x02\x02\u011B\u0116\x03\x02\x02\x02\u011B" +
		"\u0117\x03\x02\x02\x02\u011B\u0118\x03\x02\x02\x02\u011C+\x03\x02\x02" +
		"\x02\x1D-28>IRY`fo{\x7F\x83\x8C\x98\xA6\xB2\xB9\xC2\xD1\xD6\xFD\xFF\u0104" +
		"\u010B\u0112\u011B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FangyuanParser.__ATN) {
			FangyuanParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FangyuanParser._serializedATN));
		}

		return FangyuanParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(FangyuanParser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public macroDeclaration(): MacroDeclarationContext[];
	public macroDeclaration(i: number): MacroDeclarationContext;
	public macroDeclaration(i?: number): MacroDeclarationContext | MacroDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MacroDeclarationContext);
		} else {
			return this.getRuleContext(i, MacroDeclarationContext);
		}
	}
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_parse; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(FangyuanParser.AT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(FangyuanParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(FangyuanParser.RBRACE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.IMPORT, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.RETURN, 0); }
	public STRING_LITERAL(): TerminalNode[];
	public STRING_LITERAL(i: number): TerminalNode;
	public STRING_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FangyuanParser.STRING_LITERAL);
		} else {
			return this.getToken(FangyuanParser.STRING_LITERAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_macroDeclaration; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterMacroDeclaration) {
			listener.enterMacroDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitMacroDeclaration) {
			listener.exitMacroDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitMacroDeclaration) {
			return visitor.visitMacroDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(FangyuanParser.PACKAGE, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FangyuanParser.IDENTIFIER);
		} else {
			return this.getToken(FangyuanParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FangyuanParser.DOT);
		} else {
			return this.getToken(FangyuanParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public ruleDeclaration(): RuleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RuleDeclarationContext);
	}
	public rulesetDeclaration(): RulesetDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RulesetDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_declaration; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetDeclarationContext extends ParserRuleContext {
	public RULESET(): TerminalNode { return this.getToken(FangyuanParser.RULESET, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(FangyuanParser.STRING_LITERAL, 0); }
	public END(): TerminalNode { return this.getToken(FangyuanParser.END, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public ruleDeclaration(): RuleDeclarationContext[];
	public ruleDeclaration(i: number): RuleDeclarationContext;
	public ruleDeclaration(i?: number): RuleDeclarationContext | RuleDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleDeclarationContext);
		} else {
			return this.getRuleContext(i, RuleDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_rulesetDeclaration; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterRulesetDeclaration) {
			listener.enterRulesetDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitRulesetDeclaration) {
			listener.exitRulesetDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitRulesetDeclaration) {
			return visitor.visitRulesetDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleDeclarationContext extends ParserRuleContext {
	public RULE(): TerminalNode { return this.getToken(FangyuanParser.RULE, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(FangyuanParser.STRING_LITERAL, 0); }
	public WHEN(): TerminalNode { return this.getToken(FangyuanParser.WHEN, 0); }
	public ruleLHS(): RuleLHSContext {
		return this.getRuleContext(0, RuleLHSContext);
	}
	public THEN(): TerminalNode { return this.getToken(FangyuanParser.THEN, 0); }
	public ruleRHS(): RuleRHSContext {
		return this.getRuleContext(0, RuleRHSContext);
	}
	public END(): TerminalNode { return this.getToken(FangyuanParser.END, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_ruleDeclaration; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterRuleDeclaration) {
			listener.enterRuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitRuleDeclaration) {
			listener.exitRuleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitRuleDeclaration) {
			return visitor.visitRuleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleLHSContext extends ParserRuleContext {
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_ruleLHS; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterRuleLHS) {
			listener.enterRuleLHS(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitRuleLHS) {
			listener.exitRuleLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitRuleLHS) {
			return visitor.visitRuleLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FangyuanParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(FangyuanParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(FangyuanParser.RPAREN, 0); }
	public logistics(): LogisticsContext | undefined {
		return this.tryGetRuleContext(0, LogisticsContext);
	}
	public BIND_PARAMETER_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.BIND_PARAMETER_, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.COLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FangyuanParser.COMMA);
		} else {
			return this.getToken(FangyuanParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_condition; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogisticsContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.OR, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.NOT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_logistics; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterLogistics) {
			listener.enterLogistics(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitLogistics) {
			listener.exitLogistics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitLogistics) {
			return visitor.visitLogistics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleRHSContext extends ParserRuleContext {
	public json(): JsonContext[];
	public json(i: number): JsonContext;
	public json(i?: number): JsonContext | JsonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsonContext);
		} else {
			return this.getRuleContext(i, JsonContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FangyuanParser.COMMA);
		} else {
			return this.getToken(FangyuanParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_ruleRHS; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterRuleRHS) {
			listener.enterRuleRHS(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitRuleRHS) {
			listener.exitRuleRHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitRuleRHS) {
			return visitor.visitRuleRHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FangyuanParser.IDENTIFIER, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_attribute; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonContext extends ParserRuleContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_json; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterJson) {
			listener.enterJson(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitJson) {
			listener.exitJson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitJson) {
			return visitor.visitJson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(FangyuanParser.LBRACE, 0); }
	public pair(): PairContext | undefined {
		return this.tryGetRuleContext(0, PairContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(FangyuanParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_obj; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterObj) {
			listener.enterObj(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitObj) {
			listener.exitObj(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitObj) {
			return visitor.visitObj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FangyuanParser.STRING_LITERAL, 0); }
	public COLON(): TerminalNode { return this.getToken(FangyuanParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_pair; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(FangyuanParser.LBRACK, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(FangyuanParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FangyuanParser.COMMA);
		} else {
			return this.getToken(FangyuanParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_arr; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterArr) {
			listener.enterArr(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitArr) {
			listener.exitArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitArr) {
			return visitor.visitArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.STRING_LITERAL, 0); }
	public JSON_NUMBER(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.JSON_NUMBER, 0); }
	public obj(): ObjContext | undefined {
		return this.tryGetRuleContext(0, ObjContext);
	}
	public arr(): ArrContext | undefined {
		return this.tryGetRuleContext(0, ArrContext);
	}
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.BOOL_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.NULL_LITERAL, 0); }
	public BIND_PARAMETER_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.BIND_PARAMETER_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_value; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public _prefix!: Token;
	public _bop!: Token;
	public literal_value(): Literal_valueContext | undefined {
		return this.tryGetRuleContext(0, Literal_valueContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.SUB, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.DEC, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.MOD, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.LT, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.NOTEQUAL, 0); }
	public IN_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.IN_, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.BITAND, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.CARET, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.OR, 0); }
	public OR_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.OR_, 0); }
	public AND_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.AND_, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FangyuanParser.COMMA);
		} else {
			return this.getToken(FangyuanParser.COMMA, i);
		}
	}
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.NOT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_expr; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public any_name(): Any_nameContext[];
	public any_name(i: number): Any_nameContext;
	public any_name(i?: number): Any_nameContext | Any_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_nameContext);
		} else {
			return this.getRuleContext(i, Any_nameContext);
		}
	}
	public BIND_PARAMETER_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.BIND_PARAMETER_, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.COLON, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FangyuanParser.DOT);
		} else {
			return this.getToken(FangyuanParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_valueContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public BIND_PARAMETER_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.BIND_PARAMETER_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_literal_value; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterLiteral_value) {
			listener.enterLiteral_value(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitLiteral_value) {
			listener.exitLiteral_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitLiteral_value) {
			return visitor.visitLiteral_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	public SUB(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.SUB, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.ADD, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.TILDE, 0); }
	public NOT_(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.NOT_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitUnary_operator) {
			return visitor.visitUnary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Any_nameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.IDENTIFIER, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.STRING_LITERAL, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(FangyuanParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FangyuanParser.RULE_any_name; }
	// @Override
	public enterRule(listener: FangyuanParserListener): void {
		if (listener.enterAny_name) {
			listener.enterAny_name(this);
		}
	}
	// @Override
	public exitRule(listener: FangyuanParserListener): void {
		if (listener.exitAny_name) {
			listener.exitAny_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FangyuanParserVisitor<Result>): Result {
		if (visitor.visitAny_name) {
			return visitor.visitAny_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

