#! /usr/local/bin/node
var shell = require("shelljs");

shell.exec("git push origin master --force");
