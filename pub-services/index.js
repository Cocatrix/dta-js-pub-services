
const services= require('./pub-services/pub-services.js');

/*
 * To be called in client (here : '../pub-cli-es/src/main.js')
 */
module.exports = {
    services: {
        listPubs: services.listPubs,
        listOpenPubs: services.listOpenPubs
    }
}
