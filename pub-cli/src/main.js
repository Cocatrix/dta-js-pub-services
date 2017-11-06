
var services= require('../../pub-services/pub-services/pub-services.js');

function getListPubs() {
    var pubs = services.listPubs();
    console.log('\n*** ALL PUBS : ***');
    for (var pub of pubs) {
        console.log('* ' + pub);
    }
}

function getListOpenPubs() {
    var openPubs = services.listOpenPubs();
    console.log('\n** OPEN TODAY : **');
    for (var pub of openPubs) {
        console.log('* ' + pub);
    }
}

module.exports = {
    getListPubs: getListPubs,
    getListOpenPubs: getListOpenPubs
}