
const services = require('../../pub-services');

function getListPubs() {
    console.log('\n*** ALL PUBS : ***');
    // Get pubs
    const pubs = services.services.listPubs();
    // Get names only
    getNamesAndPrint(pubs);
}

function getListOpenPubs() {
    console.log('\n** OPEN TODAY : **');
    // Get pubs
    const openPubs = services.services.listOpenPubs();
    // Get names only
    getNamesAndPrint(openPubs);
}

function getNamesAndPrint(array) {
    const pubsNames = array.map(pub => pub.name);
    // Print the names
    for (const pub of pubsNames) {
        console.log('* ' + pub);
    }
}

module.exports = {
    getListPubs: getListPubs,
    getListOpenPubs: getListOpenPubs
};