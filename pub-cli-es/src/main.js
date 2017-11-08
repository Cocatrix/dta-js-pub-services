
const services = require('../../pub-services');

function getListPubs() {
    // Get pubs
    const pubs = services.services.listPubs();
    // Get names only
    const pubsNames = pubs.map(pub => pub.name);
    // Print the names
    console.log('\n*** ALL PUBS : ***');
    for (const pub of pubsNames) {
        console.log('* ' + pub);
    }
}

function getListOpenPubs() {
    // Get pubs
    const openPubs = services.services.listOpenPubs();
    // Get names only
    const openPubsNames = openPubs.map(pub => pub.name);
    // Print the names
    console.log('\n** OPEN TODAY : **');
    for (const pub of openPubsNames) {
        console.log('* ' + pub);
    }
}

module.exports = {
    getListPubs: getListPubs,
    getListOpenPubs: getListOpenPubs
};