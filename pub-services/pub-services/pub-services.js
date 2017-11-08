const pubs = require('../mocks/pubs.json');
const pubClass = require('./pub.js');


const allPubs = function() {
    const myTab = [];
    for (const pub of pubs) {
        myTab.push(new pubClass.Pub(pub.name, pub.owner, pub.openDays, pub.openHours, pub.beers));
    }
    return myTab;
};

function listPubs() {
    return allPubs;
}

function listOpenPubs() {
    return allPubs.filter(pub => pub.isOpenToday());
}

/*
 * Exporting to be called in ../index.js
 */
module.exports = {
    listPubs: listPubs,
    listOpenPubs: listOpenPubs
};