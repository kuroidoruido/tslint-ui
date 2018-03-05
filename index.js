#! /usr/bin/env node
var program = require('commander');

var package = require('./package.json');
//var args = process.argv.slice(2);

function run(args) {
  console.log('run');
}

program
  .version(package.version, '-v, --version')
  .option('-i, --input <json file>', 'JSON tslint output file to use', run, [])
  .parse(process.argv);
