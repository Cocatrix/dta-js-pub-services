#!/usr/bin/env node
const program = require('commander');

program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .option('-o, --open-list', 'Get the pubs list which are open today')
    .parse(process.argv);
if (program.list) {
    require('../src/main').getListPubs();
}
if (program.openList) {
    require('../src/main').getListOpenPubs();
}