#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import { initCommandAction } from "./commands/init";

const program = new Command();

console.log(figlet.textSync("Kaslter-CLI"));

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-l, --ls  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .command("init")
  .description("Initialize the project")
  .action(initCommandAction)
  .parse(process.argv);

const options = program.opts();
