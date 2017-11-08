const moment = require('moment');

class Pub {
    constructor (name, owner, openDays, openHours, beers) {
        this.name = name;
        this.owner = owner;
        this.openDays = openDays;
        this.openHours = openHours;
        this.beers = beers;
    }
    isOpenToday() {
        return this.openDays.includes(moment().format('dddd'));
    }
}

module.exports = {
    Pub: Pub
};