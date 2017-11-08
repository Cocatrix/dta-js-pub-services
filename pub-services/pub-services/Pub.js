const moment = require('moment');
const personConstructor = require('./Person.js');
const openHoursConstructor = require('./OpenHours.js');
const beerConstructor = require('./Beer.js');

class Pub {
    constructor (jsonPub) {
        this.name = jsonPub.name;
        this.owner = new personConstructor(jsonPub.owner);
        this.openDays = jsonPub.openDays;
        this.openHours = new openHoursConstructor(jsonPub.openHours);
        this.beers = jsonPub.beers.map(beer => new beerConstructor(beer));
    }
    isOpenToday() {
        return this.openDays.includes(moment().format('dddd'));
    }
}

/*
 * Used in './pub-services.js'
 */
module.exports = Pub;