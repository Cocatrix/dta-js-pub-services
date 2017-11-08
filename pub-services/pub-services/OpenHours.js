
class OpenHours {
    constructor (jsonOpenHours) {
        this.start = jsonOpenHours.start;
        this.end = jsonOpenHours.end;
    }
}

/*
 * Used in './Pub.js'
 */
module.exports = OpenHours;