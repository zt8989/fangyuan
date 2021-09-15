// Generated from DroolsRule.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DroolsRuleListener from './DroolsRuleListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001e\u00b7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0003\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d",
    "\u000b\u0002\u0003\u0002\u0007\u0002 \n\u0002\f\u0002\u000e\u0002#\u000b",
    "\u0002\u0003\u0003\u0007\u0003&\n\u0003\f\u0003\u000e\u0003)\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00031\n\u0003\u0003\u0003\u0007\u00034\n\u0003\f\u0003\u000e",
    "\u00037\u000b\u0003\u0003\u0003\u0005\u0003:\n\u0003\u0003\u0004\u0003",
    "\u0004\u0006\u0004>\n\u0004\r\u0004\u000e\u0004?\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0006\u0005F\n\u0005\r\u0005\u000e\u0005G\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0006\u0006N\n\u0006\r\u0006",
    "\u000e\u0006O\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0006",
    "\u0007V\n\u0007\r\u0007\u000e\u0007W\u0003\u0007\u0003\u0007\u0006\u0007",
    "\\\n\u0007\r\u0007\u000e\u0007]\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0006\bd\n\b\r\b\u000e\be\u0003\b\u0003\b\u0006\bj\n\b\r\b\u000e",
    "\bk\u0003\b\u0003\b\u0005\bp\n\b\u0003\b\u0007\bs\n\b\f\b\u000e\bv\u000b",
    "\b\u0003\b\u0007\by\n\b\f\b\u000e\b|\u000b\b\u0003\b\u0006\b\u007f\n",
    "\b\r\b\u000e\b\u0080\u0003\b\u0003\b\u0003\t\u0003\t\u0007\t\u0087\n",
    "\t\f\t\u000e\t\u008a\u000b\t\u0003\t\u0003\t\u0007\t\u008e\n\t\f\t\u000e",
    "\t\u0091\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0006\n\u0097\n\n\r",
    "\n\u000e\n\u0098\u0003\n\u0003\n\u0006\n\u009d\n\n\r\n\u000e\n\u009e",
    "\u0005\n\u00a1\n\n\u0003\n\u0003\n\u0006\n\u00a5\n\n\r\n\u000e\n\u00a6",
    "\u0003\n\u0003\n\u0003\n\u0006\n\u00ac\n\n\r\n\u000e\n\u00ad\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0002",
    "\u0002\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002",
    "\u0003\u0004\u0002\u000e\u000e\u0017\u0017\u0002\u00c7\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0004\'\u0003\u0002\u0002\u0002\u0006;\u0003\u0002",
    "\u0002\u0002\bC\u0003\u0002\u0002\u0002\nK\u0003\u0002\u0002\u0002\f",
    "S\u0003\u0002\u0002\u0002\u000ea\u0003\u0002\u0002\u0002\u0010\u0084",
    "\u0003\u0002\u0002\u0002\u0012\u0094\u0003\u0002\u0002\u0002\u0014\u00b2",
    "\u0003\u0002\u0002\u0002\u0016\u00b4\u0003\u0002\u0002\u0002\u0018\u001a",
    "\u0005\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d",
    "\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u0003\u0002\u0002\u0002\u001c!\u0003\u0002\u0002\u0002\u001d\u001b",
    "\u0003\u0002\u0002\u0002\u001e \u0007\u001c\u0002\u0002\u001f\u001e",
    "\u0003\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002",
    "\u0002\u0002!\"\u0003\u0002\u0002\u0002\"\u0003\u0003\u0002\u0002\u0002",
    "#!\u0003\u0002\u0002\u0002$&\u0007\u001c\u0002\u0002%$\u0003\u0002\u0002",
    "\u0002&)\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003",
    "\u0002\u0002\u0002(0\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002",
    "*1\u0005\u0006\u0004\u0002+1\u0005\n\u0006\u0002,1\u0005\f\u0007\u0002",
    "-1\u0005\b\u0005\u0002.1\u0005\u000e\b\u0002/1\u0005\u0012\n\u00020",
    "*\u0003\u0002\u0002\u00020+\u0003\u0002\u0002\u00020,\u0003\u0002\u0002",
    "\u00020-\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u00020/\u0003\u0002",
    "\u0002\u000215\u0003\u0002\u0002\u000224\u0007\u001c\u0002\u000232\u0003",
    "\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u000269\u0003\u0002\u0002\u000275\u0003\u0002\u0002",
    "\u00028:\u0007\u0010\u0002\u000298\u0003\u0002\u0002\u00029:\u0003\u0002",
    "\u0002\u0002:\u0005\u0003\u0002\u0002\u0002;=\u0007\t\u0002\u0002<>",
    "\u0007\u001c\u0002\u0002=<\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002",
    "\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0003\u0002",
    "\u0002\u0002AB\u0007\u0017\u0002\u0002B\u0007\u0003\u0002\u0002\u0002",
    "CE\u0007\u0004\u0002\u0002DF\u0007\u001c\u0002\u0002ED\u0003\u0002\u0002",
    "\u0002FG\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002",
    "\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0007\u001d\u0002\u0002J\t",
    "\u0003\u0002\u0002\u0002KM\u0007\b\u0002\u0002LN\u0007\u001c\u0002\u0002",
    "ML\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002",
    "\u0002OP\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0007\u0017",
    "\u0002\u0002R\u000b\u0003\u0002\u0002\u0002SU\u0007\u0007\u0002\u0002",
    "TV\u0007\u001c\u0002\u0002UT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002",
    "\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0003\u0002",
    "\u0002\u0002Y[\u0007\u0017\u0002\u0002Z\\\u0007\u001c\u0002\u0002[Z",
    "\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002][\u0003\u0002\u0002",
    "\u0002]^\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_`\u0007\u0014",
    "\u0002\u0002`\r\u0003\u0002\u0002\u0002ac\u0007\u0003\u0002\u0002bd",
    "\u0007\u001c\u0002\u0002cb\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0003\u0002",
    "\u0002\u0002gi\u0007\u0014\u0002\u0002hj\u0007\u001c\u0002\u0002ih\u0003",
    "\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002",
    "kl\u0003\u0002\u0002\u0002lo\u0003\u0002\u0002\u0002mn\u0007\u0006\u0002",
    "\u0002np\u0007\u0017\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002",
    "\u0002\u0002pz\u0003\u0002\u0002\u0002qs\u0007\u001c\u0002\u0002rq\u0003",
    "\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002",
    "tu\u0003\u0002\u0002\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002",
    "\u0002wy\u0005\u0010\t\u0002xt\u0003\u0002\u0002\u0002y|\u0003\u0002",
    "\u0002\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{~\u0003",
    "\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002}\u007f\u0007\u001c\u0002",
    "\u0002~}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002",
    "\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0005\u0002\u0002",
    "\u0083\u000f\u0003\u0002\u0002\u0002\u0084\u0088\u0007\u0014\u0002\u0002",
    "\u0085\u0087\u0007\u001c\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002",
    "\u0087\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008b\u0003\u0002\u0002\u0002",
    "\u008a\u0088\u0003\u0002\u0002\u0002\u008b\u008f\u0007\u0011\u0002\u0002",
    "\u008c\u008e\u0007\u001c\u0002\u0002\u008d\u008c\u0003\u0002\u0002\u0002",
    "\u008e\u0091\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002",
    "\u0091\u008f\u0003\u0002\u0002\u0002\u0092\u0093\t\u0002\u0002\u0002",
    "\u0093\u0011\u0003\u0002\u0002\u0002\u0094\u0096\u0007\n\u0002\u0002",
    "\u0095\u0097\u0007\u001c\u0002\u0002\u0096\u0095\u0003\u0002\u0002\u0002",
    "\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u00a0\u0003\u0002\u0002\u0002",
    "\u009a\u009c\u0007\u001d\u0002\u0002\u009b\u009d\u0007\u001c\u0002\u0002",
    "\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002",
    "\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002",
    "\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0\u009a\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002",
    "\u00a2\u00a4\u0007\f\u0002\u0002\u00a3\u00a5\u0007\u001c\u0002\u0002",
    "\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002",
    "\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0005\u0014\u000b\u0002",
    "\u00a9\u00ab\u0007\u000b\u0002\u0002\u00aa\u00ac\u0007\u001c\u0002\u0002",
    "\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002",
    "\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b0\u0005\u0016\f\u0002",
    "\u00b0\u00b1\u0007\u0005\u0002\u0002\u00b1\u0013\u0003\u0002\u0002\u0002",
    "\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u0015\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u0017\u0003\u0002\u0002\u0002",
    "\u001a\u001b!\'059?GOW]ekotz\u0080\u0088\u008f\u0098\u009e\u00a0\u00a6",
    "\u00ad"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DroolsRuleParser extends antlr4.Parser {

    static grammarFileName = "DroolsRule.g4";
    static literalNames = [ null, "'declare'", "'dialect'", "'end'", "'extends'", 
                            "'global'", "'import'", "'package'", "'rule'", 
                            "'then'", "'when'", "'salience'", null, null, 
                            "';'", "':'" ];
    static symbolicNames = [ null, "DECLARE", "DIALECT", "END", "EXTENDS", 
                             "GLOBAL", "IMPORT", "PACKAGE", "RULE", "THEN", 
                             "WHEN", "SALIENCE", "PRIMITIVE", "KEYWORD", 
                             "SEMICOLON", "COLON", "SEPARATOR", "OPERATOR", 
                             "ID", "META", "BINDING", "FQN", "INT", "FLOAT", 
                             "SINGLELINE_COMMENT", "MULTILINE_COMMENT", 
                             "WS", "STRING", "CHAR" ];
    static ruleNames = [ "program", "declaration", "packageDeclaration", 
                         "dialectDeclaration", "importDeclaration", "globalDeclaration", 
                         "typeDeclaration", "memberDeclaration", "ruleDeclaration", 
                         "ruleLHS", "ruleRHS" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DroolsRuleParser.ruleNames;
        this.literalNames = DroolsRuleParser.literalNames;
        this.symbolicNames = DroolsRuleParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DroolsRuleParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 22;
	                this.declaration(); 
	            }
	            this.state = 27;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DroolsRuleParser.WS) {
	            this.state = 28;
	            this.match(DroolsRuleParser.WS);
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DroolsRuleParser.RULE_declaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DroolsRuleParser.WS) {
	            this.state = 34;
	            this.match(DroolsRuleParser.WS);
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DroolsRuleParser.PACKAGE:
	            this.state = 40;
	            this.packageDeclaration();
	            break;
	        case DroolsRuleParser.IMPORT:
	            this.state = 41;
	            this.importDeclaration();
	            break;
	        case DroolsRuleParser.GLOBAL:
	            this.state = 42;
	            this.globalDeclaration();
	            break;
	        case DroolsRuleParser.DIALECT:
	            this.state = 43;
	            this.dialectDeclaration();
	            break;
	        case DroolsRuleParser.DECLARE:
	            this.state = 44;
	            this.typeDeclaration();
	            break;
	        case DroolsRuleParser.RULE:
	            this.state = 45;
	            this.ruleDeclaration();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 51;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 48;
	                this.match(DroolsRuleParser.WS); 
	            }
	            this.state = 53;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DroolsRuleParser.SEMICOLON) {
	            this.state = 54;
	            this.match(DroolsRuleParser.SEMICOLON);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	packageDeclaration() {
	    let localctx = new PackageDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DroolsRuleParser.RULE_packageDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(DroolsRuleParser.PACKAGE);
	        this.state = 59; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 58;
	            this.match(DroolsRuleParser.WS);
	            this.state = 61; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 63;
	        this.match(DroolsRuleParser.FQN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dialectDeclaration() {
	    let localctx = new DialectDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DroolsRuleParser.RULE_dialectDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(DroolsRuleParser.DIALECT);
	        this.state = 67; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 66;
	            this.match(DroolsRuleParser.WS);
	            this.state = 69; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 71;
	        this.match(DroolsRuleParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importDeclaration() {
	    let localctx = new ImportDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DroolsRuleParser.RULE_importDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(DroolsRuleParser.IMPORT);
	        this.state = 75; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 74;
	            this.match(DroolsRuleParser.WS);
	            this.state = 77; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 79;
	        this.match(DroolsRuleParser.FQN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	globalDeclaration() {
	    let localctx = new GlobalDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DroolsRuleParser.RULE_globalDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(DroolsRuleParser.GLOBAL);
	        this.state = 83; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 82;
	            this.match(DroolsRuleParser.WS);
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 87;
	        this.match(DroolsRuleParser.FQN);
	        this.state = 89; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 88;
	            this.match(DroolsRuleParser.WS);
	            this.state = 91; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 93;
	        this.match(DroolsRuleParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeDeclaration() {
	    let localctx = new TypeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DroolsRuleParser.RULE_typeDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(DroolsRuleParser.DECLARE);
	        this.state = 97; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 96;
	            this.match(DroolsRuleParser.WS);
	            this.state = 99; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 101;
	        this.match(DroolsRuleParser.ID);
	        this.state = 103; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 102;
	        		this.match(DroolsRuleParser.WS);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 105; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DroolsRuleParser.EXTENDS) {
	            this.state = 107;
	            this.match(DroolsRuleParser.EXTENDS);
	            this.state = 108;
	            this.match(DroolsRuleParser.FQN);
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 114;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===DroolsRuleParser.WS) {
	                    this.state = 111;
	                    this.match(DroolsRuleParser.WS);
	                    this.state = 116;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 117;
	                this.memberDeclaration(); 
	            }
	            this.state = 122;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 124; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 123;
	            this.match(DroolsRuleParser.WS);
	            this.state = 126; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 128;
	        this.match(DroolsRuleParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	memberDeclaration() {
	    let localctx = new MemberDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DroolsRuleParser.RULE_memberDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(DroolsRuleParser.ID);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DroolsRuleParser.WS) {
	            this.state = 131;
	            this.match(DroolsRuleParser.WS);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this.match(DroolsRuleParser.COLON);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DroolsRuleParser.WS) {
	            this.state = 138;
	            this.match(DroolsRuleParser.WS);
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 144;
	        _la = this._input.LA(1);
	        if(!(_la===DroolsRuleParser.PRIMITIVE || _la===DroolsRuleParser.FQN)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleDeclaration() {
	    let localctx = new RuleDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DroolsRuleParser.RULE_ruleDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(DroolsRuleParser.RULE);
	        this.state = 148; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 147;
	            this.match(DroolsRuleParser.WS);
	            this.state = 150; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DroolsRuleParser.STRING) {
	            this.state = 152;
	            this.match(DroolsRuleParser.STRING);
	            this.state = 154; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 153;
	                this.match(DroolsRuleParser.WS);
	                this.state = 156; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DroolsRuleParser.WS);
	        }

	        this.state = 160;
	        this.match(DroolsRuleParser.WHEN);
	        this.state = 162; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 161;
	            this.match(DroolsRuleParser.WS);
	            this.state = 164; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 166;
	        this.ruleLHS();
	        this.state = 167;
	        this.match(DroolsRuleParser.THEN);
	        this.state = 169; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 168;
	            this.match(DroolsRuleParser.WS);
	            this.state = 171; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DroolsRuleParser.WS);
	        this.state = 173;
	        this.ruleRHS();
	        this.state = 174;
	        this.match(DroolsRuleParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleLHS() {
	    let localctx = new RuleLHSContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DroolsRuleParser.RULE_ruleLHS);
	    try {
	        this.enterOuterAlt(localctx, 1);

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleRHS() {
	    let localctx = new RuleRHSContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DroolsRuleParser.RULE_ruleRHS);
	    try {
	        this.enterOuterAlt(localctx, 1);

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DroolsRuleParser.EOF = antlr4.Token.EOF;
DroolsRuleParser.DECLARE = 1;
DroolsRuleParser.DIALECT = 2;
DroolsRuleParser.END = 3;
DroolsRuleParser.EXTENDS = 4;
DroolsRuleParser.GLOBAL = 5;
DroolsRuleParser.IMPORT = 6;
DroolsRuleParser.PACKAGE = 7;
DroolsRuleParser.RULE = 8;
DroolsRuleParser.THEN = 9;
DroolsRuleParser.WHEN = 10;
DroolsRuleParser.SALIENCE = 11;
DroolsRuleParser.PRIMITIVE = 12;
DroolsRuleParser.KEYWORD = 13;
DroolsRuleParser.SEMICOLON = 14;
DroolsRuleParser.COLON = 15;
DroolsRuleParser.SEPARATOR = 16;
DroolsRuleParser.OPERATOR = 17;
DroolsRuleParser.ID = 18;
DroolsRuleParser.META = 19;
DroolsRuleParser.BINDING = 20;
DroolsRuleParser.FQN = 21;
DroolsRuleParser.INT = 22;
DroolsRuleParser.FLOAT = 23;
DroolsRuleParser.SINGLELINE_COMMENT = 24;
DroolsRuleParser.MULTILINE_COMMENT = 25;
DroolsRuleParser.WS = 26;
DroolsRuleParser.STRING = 27;
DroolsRuleParser.CHAR = 28;

DroolsRuleParser.RULE_program = 0;
DroolsRuleParser.RULE_declaration = 1;
DroolsRuleParser.RULE_packageDeclaration = 2;
DroolsRuleParser.RULE_dialectDeclaration = 3;
DroolsRuleParser.RULE_importDeclaration = 4;
DroolsRuleParser.RULE_globalDeclaration = 5;
DroolsRuleParser.RULE_typeDeclaration = 6;
DroolsRuleParser.RULE_memberDeclaration = 7;
DroolsRuleParser.RULE_ruleDeclaration = 8;
DroolsRuleParser.RULE_ruleLHS = 9;
DroolsRuleParser.RULE_ruleRHS = 10;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_program;
    }

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_declaration;
    }

	packageDeclaration() {
	    return this.getTypedRuleContext(PackageDeclarationContext,0);
	};

	importDeclaration() {
	    return this.getTypedRuleContext(ImportDeclarationContext,0);
	};

	globalDeclaration() {
	    return this.getTypedRuleContext(GlobalDeclarationContext,0);
	};

	dialectDeclaration() {
	    return this.getTypedRuleContext(DialectDeclarationContext,0);
	};

	typeDeclaration() {
	    return this.getTypedRuleContext(TypeDeclarationContext,0);
	};

	ruleDeclaration() {
	    return this.getTypedRuleContext(RuleDeclarationContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	SEMICOLON() {
	    return this.getToken(DroolsRuleParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class PackageDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_packageDeclaration;
    }

	PACKAGE() {
	    return this.getToken(DroolsRuleParser.PACKAGE, 0);
	};

	FQN() {
	    return this.getToken(DroolsRuleParser.FQN, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterPackageDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitPackageDeclaration(this);
		}
	}


}



class DialectDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_dialectDeclaration;
    }

	DIALECT() {
	    return this.getToken(DroolsRuleParser.DIALECT, 0);
	};

	STRING() {
	    return this.getToken(DroolsRuleParser.STRING, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterDialectDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitDialectDeclaration(this);
		}
	}


}



class ImportDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_importDeclaration;
    }

	IMPORT() {
	    return this.getToken(DroolsRuleParser.IMPORT, 0);
	};

	FQN() {
	    return this.getToken(DroolsRuleParser.FQN, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterImportDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitImportDeclaration(this);
		}
	}


}



class GlobalDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_globalDeclaration;
    }

	GLOBAL() {
	    return this.getToken(DroolsRuleParser.GLOBAL, 0);
	};

	FQN() {
	    return this.getToken(DroolsRuleParser.FQN, 0);
	};

	ID() {
	    return this.getToken(DroolsRuleParser.ID, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterGlobalDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitGlobalDeclaration(this);
		}
	}


}



class TypeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_typeDeclaration;
    }

	DECLARE() {
	    return this.getToken(DroolsRuleParser.DECLARE, 0);
	};

	ID() {
	    return this.getToken(DroolsRuleParser.ID, 0);
	};

	END() {
	    return this.getToken(DroolsRuleParser.END, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	EXTENDS() {
	    return this.getToken(DroolsRuleParser.EXTENDS, 0);
	};

	FQN() {
	    return this.getToken(DroolsRuleParser.FQN, 0);
	};

	memberDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MemberDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(MemberDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterTypeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitTypeDeclaration(this);
		}
	}


}



class MemberDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_memberDeclaration;
    }

	ID() {
	    return this.getToken(DroolsRuleParser.ID, 0);
	};

	COLON() {
	    return this.getToken(DroolsRuleParser.COLON, 0);
	};

	PRIMITIVE() {
	    return this.getToken(DroolsRuleParser.PRIMITIVE, 0);
	};

	FQN() {
	    return this.getToken(DroolsRuleParser.FQN, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterMemberDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitMemberDeclaration(this);
		}
	}


}



class RuleDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_ruleDeclaration;
    }

	RULE() {
	    return this.getToken(DroolsRuleParser.RULE, 0);
	};

	WHEN() {
	    return this.getToken(DroolsRuleParser.WHEN, 0);
	};

	ruleLHS() {
	    return this.getTypedRuleContext(RuleLHSContext,0);
	};

	THEN() {
	    return this.getToken(DroolsRuleParser.THEN, 0);
	};

	ruleRHS() {
	    return this.getTypedRuleContext(RuleRHSContext,0);
	};

	END() {
	    return this.getToken(DroolsRuleParser.END, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DroolsRuleParser.WS);
	    } else {
	        return this.getToken(DroolsRuleParser.WS, i);
	    }
	};


	STRING() {
	    return this.getToken(DroolsRuleParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterRuleDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitRuleDeclaration(this);
		}
	}


}



class RuleLHSContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_ruleLHS;
    }


	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterRuleLHS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitRuleLHS(this);
		}
	}


}



class RuleRHSContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DroolsRuleParser.RULE_ruleRHS;
    }


	enterRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.enterRuleRHS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DroolsRuleListener ) {
	        listener.exitRuleRHS(this);
		}
	}


}




DroolsRuleParser.ProgramContext = ProgramContext; 
DroolsRuleParser.DeclarationContext = DeclarationContext; 
DroolsRuleParser.PackageDeclarationContext = PackageDeclarationContext; 
DroolsRuleParser.DialectDeclarationContext = DialectDeclarationContext; 
DroolsRuleParser.ImportDeclarationContext = ImportDeclarationContext; 
DroolsRuleParser.GlobalDeclarationContext = GlobalDeclarationContext; 
DroolsRuleParser.TypeDeclarationContext = TypeDeclarationContext; 
DroolsRuleParser.MemberDeclarationContext = MemberDeclarationContext; 
DroolsRuleParser.RuleDeclarationContext = RuleDeclarationContext; 
DroolsRuleParser.RuleLHSContext = RuleLHSContext; 
DroolsRuleParser.RuleRHSContext = RuleRHSContext; 
