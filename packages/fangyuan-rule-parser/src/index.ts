import { CharStreams, CommonTokenStream } from "antlr4ts";
import { FangyuanVisitor } from "./FangyuanVisitor";
import { FangyuanLexer } from "./lang/FangyuanLexer";
import { FangyuanParser } from "./lang/FangyuanParser";
import * as fs from "fs";
import { FangyuanListener } from "./FangyuanListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import * as prettier from "prettier";

const chars = CharStreams.fromString(
  fs.readFileSync(__dirname + "/../test/rule.drl", { encoding: "utf-8" })
);
const lexer = new FangyuanLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new FangyuanParser(tokens);
parser.buildParseTree = true;
const tree = parser.parse();
// const listener = new FangyuanListener();

// ParseTreeWalker.DEFAULT.walk(listener, tree);
const visit = new FangyuanVisitor();
const file = visit.visit(tree);

fs.writeFileSync(
  __dirname + `/../test/${visit.filename}.js`,
  prettier.format(file, { parser: "typescript" }),
  {
    encoding: "utf-8",
  }
);
fs.writeFileSync(
  __dirname + `/../test/${visit.filename}.d.ts`,
  prettier.format(visit.typescript, { parser: "typescript" }),
  {
    encoding: "utf-8",
  }
);
