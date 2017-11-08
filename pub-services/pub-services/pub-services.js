const pubs = require('../mocks/pubs.json');
const pubConstructor = require('./Pub.js');


const allPubs = pubs.map(pub => new pubConstructor(pub));

function listPubs() {
    return allPubs
}

function listOpenPubs() {
    return allPubs.filter(pub => pub.isOpenToday())
}

/*
 * Exporting to be called in ../index.js
 */
module.exports = {
    listPubs,
    listOpenPubs
};