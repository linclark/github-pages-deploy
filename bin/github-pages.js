#! /usr/bin/env node

var yargs = require("yargs");

var argv = yargs.usage("$0 command")
  .command("commit", "commit changes to the repo")
  .command("push", "push changes up to GitHub")
  .command("deploy", "commit and push changes in one step")
  .demand(1, "must provide a valid command")
  .help("h")
  .alias("h", "help")
  .argv
