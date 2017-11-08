
const services= require('./pub-services/pub-services.js');

/*
 * Exported to be called in client (../pub-cli-es/src/main.js)
 */
module.exports = {
    services: {
        listPubs: services.listPubs,
        listOpenPubs: services.listOpenPubs
    }
}
