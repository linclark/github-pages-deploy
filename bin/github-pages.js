#! /usr/bin/env node

var shell = require("shelljs");
var yargs = require("yargs");

var argv = yargs.usage("$0 command")
  .command("commit", "commit changes to the repo", function (yargs) {
    shell.exec("git add -A . && git commit -a -m 'gh-pages update'");
  })
  .command("push", "push changes up to GitHub", function (yargs) {
    shell.exec("git push origin master --force");
  })
  .command("deploy", "commit and push changes in one step", function (yargs) {
    shell.exec("github-pages commit && github-pages push");
  })
  .demand(1, "must provide a valid command")
  .help("h")
  .alias("h", "help")
  .argv
