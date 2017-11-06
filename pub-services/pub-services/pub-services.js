//const _ = require('lodash');
const pubs = require('../mocks/pubs.json');
const moment = require('moment');

function listPubs() {
    return pubs;
}

function listOpenPubs() {
    function openToday(pub) {
        return pub.openDays.includes(moment().format('dddd'));
    }

    return pubs.filter(openToday);
}

module.exports = {
    listPubs: listPubs,
    listOpenPubs: listOpenPubs
};