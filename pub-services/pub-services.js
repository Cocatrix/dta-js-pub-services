//const _ = require('lodash');
const pubs = require('../mocks/pubs.json');
const moment = require('moment');

function listPubs() {
    return pubs.map(function(pub) {
        return pub.name;
    });
}

function listOpenPubs() {
    var openPubs = [];
    for(pub of pubs) {
        if (pub.openDays.includes(moment().format('dddd'))) {
            openPubs.push(pub);
        }
    }
    return openPubs.map(function(pub) {
        return pub.name;
    });
}

module.exports = {
    listPubs: listPubs,
    listOpenPubs: listOpenPubs
};