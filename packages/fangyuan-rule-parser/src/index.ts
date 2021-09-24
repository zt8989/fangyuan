import { CharStreams, CommonTokenStream } from "antlr4ts";
import { FangyuanVisitor } from "./FangyuanVisitor";
import { FangyuanLexer } from "./lang/FangyuanLexer";
import { FangyuanParser } from "./lang/FangyuanParser";
import * as fs from "fs";
import * as prettier from "prettier";
import glob from "glob";
import path from "path";
import { FangyuanVisitorForJava } from "./FangyuanVisitorForJava";
import mkdirp from "mkdirp";

export function gen(args: any) {
  glob(args, async (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    for (const file of files) {
      const filename = path.parse(file).name;
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
        path.join(basePath, `${filename}.ts`),
        prettier.format(targetSource, {
          parser: "typescript",
          singleQuote: true,
        }),
        {
          encoding: "utf-8",
        }
      );
      // if (visit.typescript) {
      //   await fs.promises.writeFile(
      //     path.join(basePath, `${filename}.d.ts`),
      //     prettier.format(visit.typescript, { parser: "typescript" }),
      //     {
      //       encoding: "utf-8",
      //     }
      //   );
      // }
    }
  });
}

export function genJava(args: any, option: any) {
  glob(args, async (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    for (const file of files) {
      let output = (str: string) => "";

      if (!option.output) {
        if (
          file.includes("/src/main/java") ||
          file.includes("/src/test/java")
        ) {
          output = (p: string) => {
            return path.join(
              file.replace(/(\/src\/(main|test)\/java).*/, "$1"),
              p.replace(/\./g, "/")
            );
          };
        } else {
          console.error("没有找到对应的java目录，请使用-o指定");
          process.exit(1);
        }
      } else {
        output = () => option.output;
      }

      const filename = path.parse(file).name;
      const content = await fs.promises.readFile(file, { encoding: "utf-8" });
      const chars = CharStreams.fromString(content);
      const lexer = new FangyuanLexer(chars);
      const tokens = new CommonTokenStream(lexer);
      const parser = new FangyuanParser(tokens);
      parser.buildParseTree = true;
      const tree = parser.parse();

      const visit = new FangyuanVisitorForJava();
      visit.context["filename"] = filename;
      const targetSource = visit.visit(tree);

      const basePath = output(visit.package);
      mkdirp.sync(basePath);
      await fs.promises.writeFile(
        path.join(basePath, `${filename}.java`),
        targetSource
      );
      // if (visit.typescript) {
      //   await fs.promises.writeFile(
      //     path.join(basePath, `${filename}.d.ts`),
      //     prettier.format(visit.typescript, { parser: "typescript" }),
      //     {
      //       encoding: "utf-8",
      //     }
      //   );
      // }
    }
  });
}
