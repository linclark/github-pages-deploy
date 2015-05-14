#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("github-pages-commit && github-pages-push");
