
const services = require('../../pub-services');

function getListPubs() {
    // Get pubs
    const pubs = services.services.listPubs();
    // Print (names only)
    console.log('\n*** ALL PUBS : ***');
    getNamesAndPrint(pubs)
}

function getListOpenPubs() {
    // Get pubs
    const openPubs = services.services.listOpenPubs();
    // Print (names only)
    console.log('\n** OPEN TODAY : **');
    getNamesAndPrint(openPubs)
}

function getNamesAndPrint(array) {
    const pubsNames = array.map(pub => pub.name);
    // Print the names
    for (const pub of pubsNames) {
        console.log(`* ${pub}`)
    }
}
/*
 * To be called in '../bin/index.js'
 */
module.exports = {
    getListPubs: getListPubs,
    getListOpenPubs: getListOpenPubs
};