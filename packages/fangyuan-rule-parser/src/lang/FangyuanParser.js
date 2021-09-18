// Generated from FangyuanParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import FangyuanParserListener from './FangyuanParserListener.js';
import FangyuanParserVisitor from './FangyuanParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0083\u00f6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0005\u0002(\n\u0002\u0003\u0002\u0007\u0002+\n\u0002\f",
    "\u0002\u000e\u0002.\u000b\u0002\u0003\u0002\u0007\u00021\n\u0002\f\u0002",
    "\u000e\u00024\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003;\n\u0003\f\u0003\u000e\u0003>\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005G\n\u0005\f\u0005\u000e\u0005J\u000b\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0007\u0006S\n\u0006\f\u0006\u000e\u0006V\u000b\u0006\u0003\u0007",
    "\u0005\u0007Y\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007]\n\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007d",
    "\n\u0007\f\u0007\u000e\u0007g\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\tp\n\t\f\t\u000e\ts\u000b\t",
    "\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f\u0080\n\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u008a\n\u000e\f\u000e\u000e\u000e\u008d\u000b\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0093\n\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u009c\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00a2\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u00a7\n\u0010\f\u0010\u000e\u0010\u00aa\u000b\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00b6\n\u0010",
    "\f\u0010\u000e\u0010\u00b9\u000b\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00bd\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00e4\n\u0010\f\u0010",
    "\u000e\u0010\u00e7\u000b\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u00eb",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00f4\n\u0013\u0003\u0013\u0002",
    "\u0003\u001e\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$\u0002\n\u0004\u0002\u000b\u000b^_\u0004",
    "\u0002`aij\u0003\u0002ef\u0004\u0002klpp\u0003\u0002ij\u0004\u0002[",
    "\\cd\u0005\u0002\r\rZZ]]\u0005\u0002\u000b\u000bffij\u0002\u010d\u0002",
    "\'\u0003\u0002\u0002\u0002\u00047\u0003\u0002\u0002\u0002\u0006A\u0003",
    "\u0002\u0002\u0002\bC\u0003\u0002\u0002\u0002\nT\u0003\u0002\u0002\u0002",
    "\fX\u0003\u0002\u0002\u0002\u000ej\u0003\u0002\u0002\u0002\u0010l\u0003",
    "\u0002\u0002\u0002\u0012t\u0003\u0002\u0002\u0002\u0014w\u0003\u0002",
    "\u0002\u0002\u0016\u007f\u0003\u0002\u0002\u0002\u0018\u0081\u0003\u0002",
    "\u0002\u0002\u001a\u0092\u0003\u0002\u0002\u0002\u001c\u009b\u0003\u0002",
    "\u0002\u0002\u001e\u00bc\u0003\u0002\u0002\u0002 \u00ea\u0003\u0002",
    "\u0002\u0002\"\u00ec\u0003\u0002\u0002\u0002$\u00f3\u0003\u0002\u0002",
    "\u0002&(\u0005\u0004\u0003\u0002\'&\u0003\u0002\u0002\u0002\'(\u0003",
    "\u0002\u0002\u0002(,\u0003\u0002\u0002\u0002)+\u0005\u0012\n\u0002*",
    ")\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002",
    "\u0002,-\u0003\u0002\u0002\u0002-2\u0003\u0002\u0002\u0002.,\u0003\u0002",
    "\u0002\u0002/1\u0005\u0006\u0004\u00020/\u0003\u0002\u0002\u000214\u0003",
    "\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "35\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000256\u0007\u0002\u0002",
    "\u00036\u0003\u0003\u0002\u0002\u00027<\u00074\u0002\u000289\u0007\u0083",
    "\u0002\u00029;\u0007Y\u0002\u0002:8\u0003\u0002\u0002\u0002;>\u0003",
    "\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002",
    "=?\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?@\u0007\u0083\u0002",
    "\u0002@\u0005\u0003\u0002\u0002\u0002AB\u0005\b\u0005\u0002B\u0007\u0003",
    "\u0002\u0002\u0002CD\u0007\u0004\u0002\u0002DH\u0007O\u0002\u0002EG",
    "\u0005\u0012\n\u0002FE\u0003\u0002\u0002\u0002GJ\u0003\u0002\u0002\u0002",
    "HF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002",
    "\u0002JH\u0003\u0002\u0002\u0002KL\u0007\u0005\u0002\u0002LM\u0005\n",
    "\u0006\u0002MN\u0007\u0006\u0002\u0002NO\u0005\u0010\t\u0002OP\u0007",
    "\u0007\u0002\u0002P\t\u0003\u0002\u0002\u0002QS\u0005\f\u0007\u0002",
    "RQ\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002",
    "\u0002TU\u0003\u0002\u0002\u0002U\u000b\u0003\u0002\u0002\u0002VT\u0003",
    "\u0002\u0002\u0002WY\u0005\u000e\b\u0002XW\u0003\u0002\u0002\u0002X",
    "Y\u0003\u0002\u0002\u0002Y\\\u0003\u0002\u0002\u0002Z[\u0007\u0003\u0002",
    "\u0002[]\u0007h\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]^\u0003\u0002\u0002\u0002^_\u0007\u0083\u0002\u0002_`\u0007",
    "Q\u0002\u0002`e\u0005\u001e\u0010\u0002ab\u0007X\u0002\u0002bd\u0005",
    "\u001e\u0010\u0002ca\u0003\u0002\u0002\u0002dg\u0003\u0002\u0002\u0002",
    "ec\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fh\u0003\u0002\u0002",
    "\u0002ge\u0003\u0002\u0002\u0002hi\u0007R\u0002\u0002i\r\u0003\u0002",
    "\u0002\u0002jk\t\u0002\u0002\u0002k\u000f\u0003\u0002\u0002\u0002lq",
    "\u0005\u0014\u000b\u0002mn\u0007X\u0002\u0002np\u0005\u0014\u000b\u0002",
    "om\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002r\u0011\u0003\u0002\u0002\u0002sq\u0003",
    "\u0002\u0002\u0002tu\u0007\u0083\u0002\u0002uv\u0005\u001c\u000f\u0002",
    "v\u0013\u0003\u0002\u0002\u0002wx\u0005\u001c\u000f\u0002x\u0015\u0003",
    "\u0002\u0002\u0002yz\u0007S\u0002\u0002z{\u0005\u0018\r\u0002{|\u0007",
    "T\u0002\u0002|\u0080\u0003\u0002\u0002\u0002}~\u0007S\u0002\u0002~\u0080",
    "\u0007T\u0002\u0002\u007fy\u0003\u0002\u0002\u0002\u007f}\u0003\u0002",
    "\u0002\u0002\u0080\u0017\u0003\u0002\u0002\u0002\u0081\u0082\u0007O",
    "\u0002\u0002\u0082\u0083\u0007h\u0002\u0002\u0083\u0084\u0005\u001c",
    "\u000f\u0002\u0084\u0019\u0003\u0002\u0002\u0002\u0085\u0086\u0007U",
    "\u0002\u0002\u0086\u008b\u0005\u001c\u000f\u0002\u0087\u0088\u0007X",
    "\u0002\u0002\u0088\u008a\u0005\u001c\u000f\u0002\u0089\u0087\u0003\u0002",
    "\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008e\u0003\u0002",
    "\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u008f\u0007V",
    "\u0002\u0002\u008f\u0093\u0003\u0002\u0002\u0002\u0090\u0091\u0007U",
    "\u0002\u0002\u0091\u0093\u0007V\u0002\u0002\u0092\u0085\u0003\u0002",
    "\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u001b\u0003\u0002",
    "\u0002\u0002\u0094\u009c\u0007O\u0002\u0002\u0095\u009c\u0007\u0014",
    "\u0002\u0002\u0096\u009c\u0005\u0016\f\u0002\u0097\u009c\u0005\u001a",
    "\u000e\u0002\u0098\u009c\u0007M\u0002\u0002\u0099\u009c\u0007P\u0002",
    "\u0002\u009a\u009c\u0007\u0003\u0002\u0002\u009b\u0094\u0003\u0002\u0002",
    "\u0002\u009b\u0095\u0003\u0002\u0002\u0002\u009b\u0096\u0003\u0002\u0002",
    "\u0002\u009b\u0097\u0003\u0002\u0002\u0002\u009b\u0098\u0003\u0002\u0002",
    "\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b\u009a\u0003\u0002\u0002",
    "\u0002\u009c\u001d\u0003\u0002\u0002\u0002\u009d\u009e\b\u0010\u0001",
    "\u0002\u009e\u00bd\u0005 \u0011\u0002\u009f\u00a0\u0007\u0003\u0002",
    "\u0002\u00a0\u00a2\u0007h\u0002\u0002\u00a1\u009f\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a8\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0005$\u0013\u0002\u00a4\u00a5\u0007Y\u0002\u0002",
    "\u00a5\u00a7\u0003\u0002\u0002\u0002\u00a6\u00a3\u0003\u0002\u0002\u0002",
    "\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00ab\u0003\u0002\u0002\u0002",
    "\u00aa\u00a8\u0003\u0002\u0002\u0002\u00ab\u00bd\u0005$\u0013\u0002",
    "\u00ac\u00bd\u0007\u0003\u0002\u0002\u00ad\u00ae\t\u0003\u0002\u0002",
    "\u00ae\u00bd\u0005\u001e\u0010\u0011\u00af\u00b0\t\u0004\u0002\u0002",
    "\u00b0\u00bd\u0005\u001e\u0010\u0010\u00b1\u00b2\u0007Q\u0002\u0002",
    "\u00b2\u00b7\u0005\u001e\u0010\u0002\u00b3\u00b4\u0007X\u0002\u0002",
    "\u00b4\u00b6\u0005\u001e\u0010\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002",
    "\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00ba\u0003\u0002\u0002\u0002",
    "\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007R\u0002\u0002",
    "\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u009d\u0003\u0002\u0002\u0002",
    "\u00bc\u00a1\u0003\u0002\u0002\u0002\u00bc\u00ac\u0003\u0002\u0002\u0002",
    "\u00bc\u00ad\u0003\u0002\u0002\u0002\u00bc\u00af\u0003\u0002\u0002\u0002",
    "\u00bc\u00b1\u0003\u0002\u0002\u0002\u00bd\u00e5\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\f\u000f\u0002\u0002\u00bf\u00c0\t\u0005\u0002\u0002\u00c0",
    "\u00e4\u0005\u001e\u0010\u0010\u00c1\u00c2\f\u000e\u0002\u0002\u00c2",
    "\u00c3\t\u0006\u0002\u0002\u00c3\u00e4\u0005\u001e\u0010\u000f\u00c4",
    "\u00c5\f\r\u0002\u0002\u00c5\u00c6\t\u0007\u0002\u0002\u00c6\u00e4\u0005",
    "\u001e\u0010\u000e\u00c7\u00c8\f\f\u0002\u0002\u00c8\u00c9\t\b\u0002",
    "\u0002\u00c9\u00e4\u0005\u001e\u0010\r\u00ca\u00cb\f\u000b\u0002\u0002",
    "\u00cb\u00cc\u0007m\u0002\u0002\u00cc\u00e4\u0005\u001e\u0010\f\u00cd",
    "\u00ce\f\n\u0002\u0002\u00ce\u00cf\u0007o\u0002\u0002\u00cf\u00e4\u0005",
    "\u001e\u0010\u000b\u00d0\u00d1\f\t\u0002\u0002\u00d1\u00d2\u0007n\u0002",
    "\u0002\u00d2\u00e4\u0005\u001e\u0010\n\u00d3\u00d4\f\b\u0002\u0002\u00d4",
    "\u00d5\u0007^\u0002\u0002\u00d5\u00e4\u0005\u001e\u0010\t\u00d6\u00d7",
    "\f\u0007\u0002\u0002\u00d7\u00d8\u0007_\u0002\u0002\u00d8\u00e4\u0005",
    "\u001e\u0010\b\u00d9\u00da\f\u0006\u0002\u0002\u00da\u00db\u0007\n\u0002",
    "\u0002\u00db\u00e4\u0005\u001e\u0010\u0007\u00dc\u00dd\f\u0005\u0002",
    "\u0002\u00dd\u00de\u0007\t\u0002\u0002\u00de\u00e4\u0005\u001e\u0010",
    "\u0006\u00df\u00e0\f\u0003\u0002\u0002\u00e0\u00e1\u0007\u000b\u0002",
    "\u0002\u00e1\u00e2\u0007\r\u0002\u0002\u00e2\u00e4\u0005\u001e\u0010",
    "\u0004\u00e3\u00be\u0003\u0002\u0002\u0002\u00e3\u00c1\u0003\u0002\u0002",
    "\u0002\u00e3\u00c4\u0003\u0002\u0002\u0002\u00e3\u00c7\u0003\u0002\u0002",
    "\u0002\u00e3\u00ca\u0003\u0002\u0002\u0002\u00e3\u00cd\u0003\u0002\u0002",
    "\u0002\u00e3\u00d0\u0003\u0002\u0002\u0002\u00e3\u00d3\u0003\u0002\u0002",
    "\u0002\u00e3\u00d6\u0003\u0002\u0002\u0002\u00e3\u00d9\u0003\u0002\u0002",
    "\u0002\u00e3\u00dc\u0003\u0002\u0002\u0002\u00e3\u00df\u0003\u0002\u0002",
    "\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u001f\u0003\u0002\u0002",
    "\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e8\u00eb\u0005\u001c\u000f",
    "\u0002\u00e9\u00eb\u0007\u0003\u0002\u0002\u00ea\u00e8\u0003\u0002\u0002",
    "\u0002\u00ea\u00e9\u0003\u0002\u0002\u0002\u00eb!\u0003\u0002\u0002",
    "\u0002\u00ec\u00ed\t\t\u0002\u0002\u00ed#\u0003\u0002\u0002\u0002\u00ee",
    "\u00f4\u0007\u0083\u0002\u0002\u00ef\u00f4\u0007O\u0002\u0002\u00f0",
    "\u00f1\u0007U\u0002\u0002\u00f1\u00f2\u0007O\u0002\u0002\u00f2\u00f4",
    "\u0007V\u0002\u0002\u00f3\u00ee\u0003\u0002\u0002\u0002\u00f3\u00ef",
    "\u0003\u0002\u0002\u0002\u00f3\u00f0\u0003\u0002\u0002\u0002\u00f4%",
    "\u0003\u0002\u0002\u0002\u0018\',2<HTX\\eq\u007f\u008b\u0092\u009b\u00a1",
    "\u00a8\u00b7\u00bc\u00e3\u00e5\u00ea\u00f3"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FangyuanParser extends antlr4.Parser {

    static grammarFileName = "FangyuanParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, "'and'", 
                            "'or'", "'not'", "'is'", "'in'", "'like'", "'match'", 
                            "'regexp'", "'isnull'", "'notnull'", null, null, 
                            "'abstract'", "'assert'", "'boolean'", "'break'", 
                            "'byte'", "'case'", "'catch'", "'char'", "'class'", 
                            "'const'", "'continue'", "'default'", "'do'", 
                            "'double'", "'else'", "'enum'", "'extends'", 
                            "'final'", "'finally'", "'float'", "'for'", 
                            "'if'", "'goto'", "'implements'", "'import'", 
                            "'instanceof'", "'int'", "'interface'", "'long'", 
                            "'native'", "'new'", "'package'", "'private'", 
                            "'protected'", "'public'", "'return'", "'short'", 
                            "'static'", "'strictfp'", "'super'", "'switch'", 
                            "'synchronized'", "'this'", "'throw'", "'throws'", 
                            "'transient'", "'try'", "'void'", "'volatile'", 
                            "'while'", null, null, null, null, null, null, 
                            null, null, null, "'null'", "'('", "')'", "'{'", 
                            "'}'", "'['", "']'", "';'", "','", "'.'", "'=='", 
                            "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", 
                            "'--'", "'='", "'>'", "'<'", "'!'", "'~'", "'?'", 
                            "':'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", 
                            "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", 
                            "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", 
                            "'>>>='", "'->'", "'::'", "'@'", "'...'" ];
    static symbolicNames = [ null, "BIND_PARAMETER_", "RULE", "WHEN", "THEN", 
                             "END", "NAMESPACE", "AND_", "OR_", "NOT_", 
                             "IS_", "IN_", "LIKE_", "MATCH_", "REGEXP_", 
                             "ISNULL_", "NOTNULL_", "NULL_", "JSON_NUMBER", 
                             "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", 
                             "CASE", "CATCH", "CHAR", "CLASS", "CONST", 
                             "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
                             "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", 
                             "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", 
                             "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", 
                             "NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", 
                             "RETURN", "SHORT", "STATIC", "STRICTFP", "SUPER", 
                             "SWITCH", "SYNCHRONIZED", "THIS", "THROW", 
                             "THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", 
                             "WHILE", "DECIMAL_LITERAL", "HEX_LITERAL", 
                             "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", 
                             "HEX_FLOAT_LITERAL", "BOOL_LITERAL", "CHAR_LITERAL", 
                             "STRING_LITERAL", "NULL_LITERAL", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
                             "SEMI", "COMMA", "DOT", "EQUAL", "LE", "GE", 
                             "NOTEQUAL", "AND", "OR", "INC", "DEC", "ASSIGN", 
                             "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", 
                             "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", 
                             "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
                             "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", 
                             "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
                             "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", 
                             "COLONCOLON", "AT", "ELLIPSIS", "WS", "COMMENT", 
                             "LINE_COMMENT", "IDENTIFIER" ];
    static ruleNames = [ "parse", "packageDeclaration", "declaration", "ruleDeclaration", 
                         "ruleLHS", "condition", "logistics", "ruleRHS", 
                         "attribute", "json", "obj", "pair", "arr", "value", 
                         "expr", "literal_value", "unary_operator", "any_name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FangyuanParser.ruleNames;
        this.literalNames = FangyuanParser.literalNames;
        this.symbolicNames = FangyuanParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 14:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
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
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FangyuanParser.RULE_parse);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FangyuanParser.PACKAGE) {
	            this.state = 36;
	            this.packageDeclaration();
	        }

	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FangyuanParser.IDENTIFIER) {
	            this.state = 39;
	            this.attribute();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FangyuanParser.RULE) {
	            this.state = 45;
	            this.declaration();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this.match(FangyuanParser.EOF);
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
	    this.enterRule(localctx, 2, FangyuanParser.RULE_packageDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(FangyuanParser.PACKAGE);
	        this.state = 58;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 54;
	                this.match(FangyuanParser.IDENTIFIER);
	                this.state = 55;
	                this.match(FangyuanParser.DOT); 
	            }
	            this.state = 60;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 61;
	        this.match(FangyuanParser.IDENTIFIER);
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
	    this.enterRule(localctx, 4, FangyuanParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.ruleDeclaration();
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
	    this.enterRule(localctx, 6, FangyuanParser.RULE_ruleDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(FangyuanParser.RULE);
	        this.state = 66;
	        this.match(FangyuanParser.STRING_LITERAL);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FangyuanParser.IDENTIFIER) {
	            this.state = 67;
	            this.attribute();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 73;
	        this.match(FangyuanParser.WHEN);
	        this.state = 74;
	        this.ruleLHS();
	        this.state = 75;
	        this.match(FangyuanParser.THEN);
	        this.state = 76;
	        this.ruleRHS();
	        this.state = 77;
	        this.match(FangyuanParser.END);
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
	    this.enterRule(localctx, 8, FangyuanParser.RULE_ruleLHS);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FangyuanParser.BIND_PARAMETER_ || _la===FangyuanParser.NOT_ || _la===FangyuanParser.AND || _la===FangyuanParser.OR || _la===FangyuanParser.IDENTIFIER) {
	            this.state = 79;
	            this.condition();
	            this.state = 84;
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FangyuanParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FangyuanParser.NOT_ || _la===FangyuanParser.AND || _la===FangyuanParser.OR) {
	            this.state = 85;
	            this.logistics();
	        }

	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FangyuanParser.BIND_PARAMETER_) {
	            this.state = 88;
	            this.match(FangyuanParser.BIND_PARAMETER_);
	            this.state = 89;
	            this.match(FangyuanParser.COLON);
	        }

	        this.state = 92;
	        this.match(FangyuanParser.IDENTIFIER);
	        this.state = 93;
	        this.match(FangyuanParser.LPAREN);
	        this.state = 94;
	        this.expr(0);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FangyuanParser.COMMA) {
	            this.state = 95;
	            this.match(FangyuanParser.COMMA);
	            this.state = 96;
	            this.expr(0);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
	        this.match(FangyuanParser.RPAREN);
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



	logistics() {
	    let localctx = new LogisticsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FangyuanParser.RULE_logistics);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        _la = this._input.LA(1);
	        if(!(_la===FangyuanParser.NOT_ || _la===FangyuanParser.AND || _la===FangyuanParser.OR)) {
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



	ruleRHS() {
	    let localctx = new RuleRHSContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FangyuanParser.RULE_ruleRHS);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.json();
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FangyuanParser.COMMA) {
	            this.state = 107;
	            this.match(FangyuanParser.COMMA);
	            this.state = 108;
	            this.json();
	            this.state = 113;
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



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FangyuanParser.RULE_attribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(FangyuanParser.IDENTIFIER);
	        this.state = 115;
	        this.value();
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



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FangyuanParser.RULE_json);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.value();
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



	obj() {
	    let localctx = new ObjContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FangyuanParser.RULE_obj);
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.match(FangyuanParser.LBRACE);
	            this.state = 120;
	            this.pair();
	            this.state = 121;
	            this.match(FangyuanParser.RBRACE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.match(FangyuanParser.LBRACE);
	            this.state = 124;
	            this.match(FangyuanParser.RBRACE);
	            break;

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



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FangyuanParser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(FangyuanParser.STRING_LITERAL);
	        this.state = 128;
	        this.match(FangyuanParser.COLON);
	        this.state = 129;
	        this.value();
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



	arr() {
	    let localctx = new ArrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FangyuanParser.RULE_arr);
	    var _la = 0; // Token type
	    try {
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.match(FangyuanParser.LBRACK);
	            this.state = 132;
	            this.value();
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FangyuanParser.COMMA) {
	                this.state = 133;
	                this.match(FangyuanParser.COMMA);
	                this.state = 134;
	                this.value();
	                this.state = 139;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 140;
	            this.match(FangyuanParser.RBRACK);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.match(FangyuanParser.LBRACK);
	            this.state = 143;
	            this.match(FangyuanParser.RBRACK);
	            break;

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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FangyuanParser.RULE_value);
	    try {
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FangyuanParser.STRING_LITERAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.match(FangyuanParser.STRING_LITERAL);
	            break;
	        case FangyuanParser.JSON_NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
	            this.match(FangyuanParser.JSON_NUMBER);
	            break;
	        case FangyuanParser.LBRACE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 148;
	            this.obj();
	            break;
	        case FangyuanParser.LBRACK:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 149;
	            this.arr();
	            break;
	        case FangyuanParser.BOOL_LITERAL:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 150;
	            this.match(FangyuanParser.BOOL_LITERAL);
	            break;
	        case FangyuanParser.NULL_LITERAL:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 151;
	            this.match(FangyuanParser.NULL_LITERAL);
	            break;
	        case FangyuanParser.BIND_PARAMETER_:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 152;
	            this.match(FangyuanParser.BIND_PARAMETER_);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, FangyuanParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 156;
	            this.literal_value();
	            break;

	        case 2:
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FangyuanParser.BIND_PARAMETER_) {
	                this.state = 157;
	                this.match(FangyuanParser.BIND_PARAMETER_);
	                this.state = 158;
	                this.match(FangyuanParser.COLON);
	            }

	            this.state = 166;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 161;
	                    this.any_name();
	                    this.state = 162;
	                    this.match(FangyuanParser.DOT); 
	                }
	                this.state = 168;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	            }

	            this.state = 169;
	            this.any_name();
	            break;

	        case 3:
	            this.state = 170;
	            this.match(FangyuanParser.BIND_PARAMETER_);
	            break;

	        case 4:
	            this.state = 171;
	            localctx.prefix = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (FangyuanParser.INC - 94)) | (1 << (FangyuanParser.DEC - 94)) | (1 << (FangyuanParser.ADD - 94)) | (1 << (FangyuanParser.SUB - 94)))) !== 0))) {
	                localctx.prefix = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 172;
	            this.expr(15);
	            break;

	        case 5:
	            this.state = 173;
	            localctx.prefix = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===FangyuanParser.BANG || _la===FangyuanParser.TILDE)) {
	                localctx.prefix = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 174;
	            this.expr(14);
	            break;

	        case 6:
	            this.state = 175;
	            this.match(FangyuanParser.LPAREN);
	            this.state = 176;
	            this.expr(0);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FangyuanParser.COMMA) {
	                this.state = 177;
	                this.match(FangyuanParser.COMMA);
	                this.state = 178;
	                this.expr(0);
	                this.state = 183;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 184;
	            this.match(FangyuanParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 227;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 225;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 189;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 105)) & ~0x1f) == 0 && ((1 << (_la - 105)) & ((1 << (FangyuanParser.MUL - 105)) | (1 << (FangyuanParser.DIV - 105)) | (1 << (FangyuanParser.MOD - 105)))) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 190;
	                    this.expr(14);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 191;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 192;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===FangyuanParser.ADD || _la===FangyuanParser.SUB)) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 193;
	                    this.expr(13);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 194;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 195;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (FangyuanParser.LE - 89)) | (1 << (FangyuanParser.GE - 89)) | (1 << (FangyuanParser.GT - 89)) | (1 << (FangyuanParser.LT - 89)))) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 196;
	                    this.expr(12);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 197;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 198;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===FangyuanParser.IN_ || _la===FangyuanParser.EQUAL || _la===FangyuanParser.NOTEQUAL)) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 199;
	                    this.expr(11);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 200;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 201;
	                    localctx.bop = this.match(FangyuanParser.BITAND);
	                    this.state = 202;
	                    this.expr(10);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 203;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 204;
	                    localctx.bop = this.match(FangyuanParser.CARET);
	                    this.state = 205;
	                    this.expr(9);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 206;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 207;
	                    localctx.bop = this.match(FangyuanParser.BITOR);
	                    this.state = 208;
	                    this.expr(8);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 209;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 210;
	                    localctx.bop = this.match(FangyuanParser.AND);
	                    this.state = 211;
	                    this.expr(7);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 212;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 213;
	                    localctx.bop = this.match(FangyuanParser.OR);
	                    this.state = 214;
	                    this.expr(6);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 215;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 216;
	                    localctx.bop = this.match(FangyuanParser.OR_);
	                    this.state = 217;
	                    this.expr(5);
	                    break;

	                case 11:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 218;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 219;
	                    localctx.bop = this.match(FangyuanParser.AND_);
	                    this.state = 220;
	                    this.expr(4);
	                    break;

	                case 12:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FangyuanParser.RULE_expr);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 222;
	                    this.match(FangyuanParser.NOT_);
	                    this.state = 223;
	                    this.match(FangyuanParser.IN_);
	                    this.state = 224;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 229;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	literal_value() {
	    let localctx = new Literal_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FangyuanParser.RULE_literal_value);
	    try {
	        this.state = 232;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 230;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 231;
	            this.match(FangyuanParser.BIND_PARAMETER_);
	            break;

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



	unary_operator() {
	    let localctx = new Unary_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FangyuanParser.RULE_unary_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        _la = this._input.LA(1);
	        if(!(_la===FangyuanParser.NOT_ || ((((_la - 100)) & ~0x1f) == 0 && ((1 << (_la - 100)) & ((1 << (FangyuanParser.TILDE - 100)) | (1 << (FangyuanParser.ADD - 100)) | (1 << (FangyuanParser.SUB - 100)))) !== 0))) {
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



	any_name() {
	    let localctx = new Any_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FangyuanParser.RULE_any_name);
	    try {
	        this.state = 241;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FangyuanParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 236;
	            this.match(FangyuanParser.IDENTIFIER);
	            break;
	        case FangyuanParser.STRING_LITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this.match(FangyuanParser.STRING_LITERAL);
	            break;
	        case FangyuanParser.LBRACK:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 238;
	            this.match(FangyuanParser.LBRACK);
	            this.state = 239;
	            this.match(FangyuanParser.STRING_LITERAL);
	            this.state = 240;
	            this.match(FangyuanParser.RBRACK);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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


}

FangyuanParser.EOF = antlr4.Token.EOF;
FangyuanParser.BIND_PARAMETER_ = 1;
FangyuanParser.RULE = 2;
FangyuanParser.WHEN = 3;
FangyuanParser.THEN = 4;
FangyuanParser.END = 5;
FangyuanParser.NAMESPACE = 6;
FangyuanParser.AND_ = 7;
FangyuanParser.OR_ = 8;
FangyuanParser.NOT_ = 9;
FangyuanParser.IS_ = 10;
FangyuanParser.IN_ = 11;
FangyuanParser.LIKE_ = 12;
FangyuanParser.MATCH_ = 13;
FangyuanParser.REGEXP_ = 14;
FangyuanParser.ISNULL_ = 15;
FangyuanParser.NOTNULL_ = 16;
FangyuanParser.NULL_ = 17;
FangyuanParser.JSON_NUMBER = 18;
FangyuanParser.ABSTRACT = 19;
FangyuanParser.ASSERT = 20;
FangyuanParser.BOOLEAN = 21;
FangyuanParser.BREAK = 22;
FangyuanParser.BYTE = 23;
FangyuanParser.CASE = 24;
FangyuanParser.CATCH = 25;
FangyuanParser.CHAR = 26;
FangyuanParser.CLASS = 27;
FangyuanParser.CONST = 28;
FangyuanParser.CONTINUE = 29;
FangyuanParser.DEFAULT = 30;
FangyuanParser.DO = 31;
FangyuanParser.DOUBLE = 32;
FangyuanParser.ELSE = 33;
FangyuanParser.ENUM = 34;
FangyuanParser.EXTENDS = 35;
FangyuanParser.FINAL = 36;
FangyuanParser.FINALLY = 37;
FangyuanParser.FLOAT = 38;
FangyuanParser.FOR = 39;
FangyuanParser.IF = 40;
FangyuanParser.GOTO = 41;
FangyuanParser.IMPLEMENTS = 42;
FangyuanParser.IMPORT = 43;
FangyuanParser.INSTANCEOF = 44;
FangyuanParser.INT = 45;
FangyuanParser.INTERFACE = 46;
FangyuanParser.LONG = 47;
FangyuanParser.NATIVE = 48;
FangyuanParser.NEW = 49;
FangyuanParser.PACKAGE = 50;
FangyuanParser.PRIVATE = 51;
FangyuanParser.PROTECTED = 52;
FangyuanParser.PUBLIC = 53;
FangyuanParser.RETURN = 54;
FangyuanParser.SHORT = 55;
FangyuanParser.STATIC = 56;
FangyuanParser.STRICTFP = 57;
FangyuanParser.SUPER = 58;
FangyuanParser.SWITCH = 59;
FangyuanParser.SYNCHRONIZED = 60;
FangyuanParser.THIS = 61;
FangyuanParser.THROW = 62;
FangyuanParser.THROWS = 63;
FangyuanParser.TRANSIENT = 64;
FangyuanParser.TRY = 65;
FangyuanParser.VOID = 66;
FangyuanParser.VOLATILE = 67;
FangyuanParser.WHILE = 68;
FangyuanParser.DECIMAL_LITERAL = 69;
FangyuanParser.HEX_LITERAL = 70;
FangyuanParser.OCT_LITERAL = 71;
FangyuanParser.BINARY_LITERAL = 72;
FangyuanParser.FLOAT_LITERAL = 73;
FangyuanParser.HEX_FLOAT_LITERAL = 74;
FangyuanParser.BOOL_LITERAL = 75;
FangyuanParser.CHAR_LITERAL = 76;
FangyuanParser.STRING_LITERAL = 77;
FangyuanParser.NULL_LITERAL = 78;
FangyuanParser.LPAREN = 79;
FangyuanParser.RPAREN = 80;
FangyuanParser.LBRACE = 81;
FangyuanParser.RBRACE = 82;
FangyuanParser.LBRACK = 83;
FangyuanParser.RBRACK = 84;
FangyuanParser.SEMI = 85;
FangyuanParser.COMMA = 86;
FangyuanParser.DOT = 87;
FangyuanParser.EQUAL = 88;
FangyuanParser.LE = 89;
FangyuanParser.GE = 90;
FangyuanParser.NOTEQUAL = 91;
FangyuanParser.AND = 92;
FangyuanParser.OR = 93;
FangyuanParser.INC = 94;
FangyuanParser.DEC = 95;
FangyuanParser.ASSIGN = 96;
FangyuanParser.GT = 97;
FangyuanParser.LT = 98;
FangyuanParser.BANG = 99;
FangyuanParser.TILDE = 100;
FangyuanParser.QUESTION = 101;
FangyuanParser.COLON = 102;
FangyuanParser.ADD = 103;
FangyuanParser.SUB = 104;
FangyuanParser.MUL = 105;
FangyuanParser.DIV = 106;
FangyuanParser.BITAND = 107;
FangyuanParser.BITOR = 108;
FangyuanParser.CARET = 109;
FangyuanParser.MOD = 110;
FangyuanParser.ADD_ASSIGN = 111;
FangyuanParser.SUB_ASSIGN = 112;
FangyuanParser.MUL_ASSIGN = 113;
FangyuanParser.DIV_ASSIGN = 114;
FangyuanParser.AND_ASSIGN = 115;
FangyuanParser.OR_ASSIGN = 116;
FangyuanParser.XOR_ASSIGN = 117;
FangyuanParser.MOD_ASSIGN = 118;
FangyuanParser.LSHIFT_ASSIGN = 119;
FangyuanParser.RSHIFT_ASSIGN = 120;
FangyuanParser.URSHIFT_ASSIGN = 121;
FangyuanParser.ARROW = 122;
FangyuanParser.COLONCOLON = 123;
FangyuanParser.AT = 124;
FangyuanParser.ELLIPSIS = 125;
FangyuanParser.WS = 126;
FangyuanParser.COMMENT = 127;
FangyuanParser.LINE_COMMENT = 128;
FangyuanParser.IDENTIFIER = 129;

FangyuanParser.RULE_parse = 0;
FangyuanParser.RULE_packageDeclaration = 1;
FangyuanParser.RULE_declaration = 2;
FangyuanParser.RULE_ruleDeclaration = 3;
FangyuanParser.RULE_ruleLHS = 4;
FangyuanParser.RULE_condition = 5;
FangyuanParser.RULE_logistics = 6;
FangyuanParser.RULE_ruleRHS = 7;
FangyuanParser.RULE_attribute = 8;
FangyuanParser.RULE_json = 9;
FangyuanParser.RULE_obj = 10;
FangyuanParser.RULE_pair = 11;
FangyuanParser.RULE_arr = 12;
FangyuanParser.RULE_value = 13;
FangyuanParser.RULE_expr = 14;
FangyuanParser.RULE_literal_value = 15;
FangyuanParser.RULE_unary_operator = 16;
FangyuanParser.RULE_any_name = 17;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_parse;
    }

	EOF() {
	    return this.getToken(FangyuanParser.EOF, 0);
	};

	packageDeclaration() {
	    return this.getTypedRuleContext(PackageDeclarationContext,0);
	};

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

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

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitParse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitParse(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = FangyuanParser.RULE_packageDeclaration;
    }

	PACKAGE() {
	    return this.getToken(FangyuanParser.PACKAGE, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FangyuanParser.IDENTIFIER);
	    } else {
	        return this.getToken(FangyuanParser.IDENTIFIER, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FangyuanParser.DOT);
	    } else {
	        return this.getToken(FangyuanParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterPackageDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitPackageDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitPackageDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = FangyuanParser.RULE_declaration;
    }

	ruleDeclaration() {
	    return this.getTypedRuleContext(RuleDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = FangyuanParser.RULE_ruleDeclaration;
    }

	RULE() {
	    return this.getToken(FangyuanParser.RULE, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(FangyuanParser.STRING_LITERAL, 0);
	};

	WHEN() {
	    return this.getToken(FangyuanParser.WHEN, 0);
	};

	ruleLHS() {
	    return this.getTypedRuleContext(RuleLHSContext,0);
	};

	THEN() {
	    return this.getToken(FangyuanParser.THEN, 0);
	};

	ruleRHS() {
	    return this.getTypedRuleContext(RuleRHSContext,0);
	};

	END() {
	    return this.getToken(FangyuanParser.END, 0);
	};

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterRuleDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitRuleDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitRuleDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = FangyuanParser.RULE_ruleLHS;
    }

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterRuleLHS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitRuleLHS(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitRuleLHS(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_condition;
    }

	IDENTIFIER() {
	    return this.getToken(FangyuanParser.IDENTIFIER, 0);
	};

	LPAREN() {
	    return this.getToken(FangyuanParser.LPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(FangyuanParser.RPAREN, 0);
	};

	logistics() {
	    return this.getTypedRuleContext(LogisticsContext,0);
	};

	BIND_PARAMETER_() {
	    return this.getToken(FangyuanParser.BIND_PARAMETER_, 0);
	};

	COLON() {
	    return this.getToken(FangyuanParser.COLON, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FangyuanParser.COMMA);
	    } else {
	        return this.getToken(FangyuanParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogisticsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_logistics;
    }

	AND() {
	    return this.getToken(FangyuanParser.AND, 0);
	};

	OR() {
	    return this.getToken(FangyuanParser.OR, 0);
	};

	NOT_() {
	    return this.getToken(FangyuanParser.NOT_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterLogistics(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitLogistics(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitLogistics(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = FangyuanParser.RULE_ruleRHS;
    }

	json = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(JsonContext);
	    } else {
	        return this.getTypedRuleContext(JsonContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FangyuanParser.COMMA);
	    } else {
	        return this.getToken(FangyuanParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterRuleRHS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitRuleRHS(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitRuleRHS(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_attribute;
    }

	IDENTIFIER() {
	    return this.getToken(FangyuanParser.IDENTIFIER, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitAttribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JsonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_json;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterJson(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitJson(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitJson(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_obj;
    }

	LBRACE() {
	    return this.getToken(FangyuanParser.LBRACE, 0);
	};

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	RBRACE() {
	    return this.getToken(FangyuanParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterObj(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitObj(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitObj(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_pair;
    }

	STRING_LITERAL() {
	    return this.getToken(FangyuanParser.STRING_LITERAL, 0);
	};

	COLON() {
	    return this.getToken(FangyuanParser.COLON, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitPair(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitPair(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_arr;
    }

	LBRACK() {
	    return this.getToken(FangyuanParser.LBRACK, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	RBRACK() {
	    return this.getToken(FangyuanParser.RBRACK, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FangyuanParser.COMMA);
	    } else {
	        return this.getToken(FangyuanParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterArr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitArr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitArr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_value;
    }

	STRING_LITERAL() {
	    return this.getToken(FangyuanParser.STRING_LITERAL, 0);
	};

	JSON_NUMBER() {
	    return this.getToken(FangyuanParser.JSON_NUMBER, 0);
	};

	obj() {
	    return this.getTypedRuleContext(ObjContext,0);
	};

	arr() {
	    return this.getTypedRuleContext(ArrContext,0);
	};

	BOOL_LITERAL() {
	    return this.getToken(FangyuanParser.BOOL_LITERAL, 0);
	};

	NULL_LITERAL() {
	    return this.getToken(FangyuanParser.NULL_LITERAL, 0);
	};

	BIND_PARAMETER_() {
	    return this.getToken(FangyuanParser.BIND_PARAMETER_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_expr;
        this.prefix = null; // Token
        this.bop = null; // Token
    }

	literal_value() {
	    return this.getTypedRuleContext(Literal_valueContext,0);
	};

	any_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Any_nameContext);
	    } else {
	        return this.getTypedRuleContext(Any_nameContext,i);
	    }
	};

	BIND_PARAMETER_() {
	    return this.getToken(FangyuanParser.BIND_PARAMETER_, 0);
	};

	COLON() {
	    return this.getToken(FangyuanParser.COLON, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FangyuanParser.DOT);
	    } else {
	        return this.getToken(FangyuanParser.DOT, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(FangyuanParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(FangyuanParser.SUB, 0);
	};

	INC() {
	    return this.getToken(FangyuanParser.INC, 0);
	};

	DEC() {
	    return this.getToken(FangyuanParser.DEC, 0);
	};

	TILDE() {
	    return this.getToken(FangyuanParser.TILDE, 0);
	};

	BANG() {
	    return this.getToken(FangyuanParser.BANG, 0);
	};

	LPAREN() {
	    return this.getToken(FangyuanParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(FangyuanParser.RPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FangyuanParser.COMMA);
	    } else {
	        return this.getToken(FangyuanParser.COMMA, i);
	    }
	};


	MUL() {
	    return this.getToken(FangyuanParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(FangyuanParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(FangyuanParser.MOD, 0);
	};

	LE() {
	    return this.getToken(FangyuanParser.LE, 0);
	};

	GE() {
	    return this.getToken(FangyuanParser.GE, 0);
	};

	GT() {
	    return this.getToken(FangyuanParser.GT, 0);
	};

	LT() {
	    return this.getToken(FangyuanParser.LT, 0);
	};

	EQUAL() {
	    return this.getToken(FangyuanParser.EQUAL, 0);
	};

	NOTEQUAL() {
	    return this.getToken(FangyuanParser.NOTEQUAL, 0);
	};

	IN_() {
	    return this.getToken(FangyuanParser.IN_, 0);
	};

	BITAND() {
	    return this.getToken(FangyuanParser.BITAND, 0);
	};

	CARET() {
	    return this.getToken(FangyuanParser.CARET, 0);
	};

	BITOR() {
	    return this.getToken(FangyuanParser.BITOR, 0);
	};

	AND() {
	    return this.getToken(FangyuanParser.AND, 0);
	};

	OR() {
	    return this.getToken(FangyuanParser.OR, 0);
	};

	OR_() {
	    return this.getToken(FangyuanParser.OR_, 0);
	};

	AND_() {
	    return this.getToken(FangyuanParser.AND_, 0);
	};

	NOT_() {
	    return this.getToken(FangyuanParser.NOT_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Literal_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_literal_value;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	BIND_PARAMETER_() {
	    return this.getToken(FangyuanParser.BIND_PARAMETER_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterLiteral_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitLiteral_value(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitLiteral_value(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Unary_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_unary_operator;
    }

	SUB() {
	    return this.getToken(FangyuanParser.SUB, 0);
	};

	ADD() {
	    return this.getToken(FangyuanParser.ADD, 0);
	};

	TILDE() {
	    return this.getToken(FangyuanParser.TILDE, 0);
	};

	NOT_() {
	    return this.getToken(FangyuanParser.NOT_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterUnary_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitUnary_operator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitUnary_operator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Any_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FangyuanParser.RULE_any_name;
    }

	IDENTIFIER() {
	    return this.getToken(FangyuanParser.IDENTIFIER, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(FangyuanParser.STRING_LITERAL, 0);
	};

	LBRACK() {
	    return this.getToken(FangyuanParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(FangyuanParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.enterAny_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FangyuanParserListener ) {
	        listener.exitAny_name(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FangyuanParserVisitor ) {
	        return visitor.visitAny_name(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FangyuanParser.ParseContext = ParseContext; 
FangyuanParser.PackageDeclarationContext = PackageDeclarationContext; 
FangyuanParser.DeclarationContext = DeclarationContext; 
FangyuanParser.RuleDeclarationContext = RuleDeclarationContext; 
FangyuanParser.RuleLHSContext = RuleLHSContext; 
FangyuanParser.ConditionContext = ConditionContext; 
FangyuanParser.LogisticsContext = LogisticsContext; 
FangyuanParser.RuleRHSContext = RuleRHSContext; 
FangyuanParser.AttributeContext = AttributeContext; 
FangyuanParser.JsonContext = JsonContext; 
FangyuanParser.ObjContext = ObjContext; 
FangyuanParser.PairContext = PairContext; 
FangyuanParser.ArrContext = ArrContext; 
FangyuanParser.ValueContext = ValueContext; 
FangyuanParser.ExprContext = ExprContext; 
FangyuanParser.Literal_valueContext = Literal_valueContext; 
FangyuanParser.Unary_operatorContext = Unary_operatorContext; 
FangyuanParser.Any_nameContext = Any_nameContext; 
