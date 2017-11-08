const moment = require('moment');
const personConstructor = require('./Person.js');
const openHoursConstructor = require('./OpenHours.js');
const beerConstructor = require('./Beer.js');

class Pub {
    constructor ({name, owner, openDays, openHours, beers}) {
        this.name = name;
        this.owner = new personConstructor(owner);
        this.openDays = openDays;
        this.openHours = new openHoursConstructor(openHours);
        this.beers = beers.map(beer => new beerConstructor(beer))
    }
    isOpenToday() {
        return this.openDays.includes(moment().format('dddd'))
    }
}

/*
 * Used in './pub-services.js'
 */
module.exports = Pub;