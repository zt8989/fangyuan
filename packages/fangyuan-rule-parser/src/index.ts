import { CharStreams, CommonTokenStream } from "antlr4ts";
import { FangyuanVisitor } from "./FangyuanVisitor";
import { FangyuanLexer } from "./lang/FangyuanLexer";
import { FangyuanParser } from "./lang/FangyuanParser";
import * as fs from "fs";
import * as prettier from "prettier";
import glob from "glob";
import path from "path";

export function gen(args: any) {
  glob(args, async (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    for (const file of files) {
      const content = await fs.promises.readFile(file, { encoding: "utf-8" });
      const chars = CharStreams.fromString(content);
      const lexer = new FangyuanLexer(chars);
      const tokens = new CommonTokenStream(lexer);
      const parser = new FangyuanParser(tokens);
      parser.buildParseTree = true;
      const tree = parser.parse();

      const visit = new FangyuanVisitor();
      const targetSource = visit.visit(tree);

      const basePath = path.dirname(file);
      await fs.promises.writeFile(
        path.join(basePath, `${visit.filename}.js`),
        prettier.format(targetSource, { parser: "typescript" }),
        {
          encoding: "utf-8",
        }
      );
      if (visit.typescript) {
        await fs.promises.writeFile(
          path.join(basePath, `${visit.filename}.d.ts`),
          prettier.format(visit.typescript, { parser: "typescript" }),
          {
            encoding: "utf-8",
          }
        );
      }
    }
  });
}
