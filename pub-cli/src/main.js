
var services = require('../../pub-services')

function getListPubs() {
    // Get pubs
    var pubs = services.services.listPubs();
    // Get names only
    var pubsNames = pubs.map(function(pub) {
        return pub.name;
    });
    // Print the names
    console.log('\n*** ALL PUBS : ***');
    for (var pub of pubsNames) {
        console.log('* ' + pub);
    }
}

function getListOpenPubs() {
    // Get pubs
    var openPubs = services.services.listOpenPubs();
    // Get names only
    var openPubsNames = openPubs.map(function(pub) {
        return pub.name;
    });
    // Print the names
    console.log('\n** OPEN TODAY : **');
    for (var pub of openPubsNames) {
        console.log('* ' + pub);
    }
}

module.exports = {
    getListPubs: getListPubs,
    getListOpenPubs: getListOpenPubs
};