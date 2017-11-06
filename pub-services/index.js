
var services= require('./pub-services/pub-services.js');
/*
console.log('\n** ALL PUBS : **')
var pubs = services.listPubs();

for (var pub of pubs) {
    console.log('* ' + pub);
}

console.log('\n** OPEN TODAY : **');
var openPubs = services.listOpenPubs();

for (var pub of openPubs) {
    console.log('* ' + pub);
}
*/
module.exports = {
    services: {
        listPubs: services.listPubs,
        listOpenPubs: services.listOpenPubs
    }
}