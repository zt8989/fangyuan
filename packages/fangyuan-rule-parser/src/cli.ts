#!/usr/bin/env node

import { Command } from "commander";
import { resolve } from "path";
const version = require("../package.json").version;

const program = new Command();
program.version(version);

program.usage("<command>");

program
  .command("gen:javascript <file>")
  .description("generate js from rule")
  .alias("gen:js")
  .action(require("./index").gen);

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
