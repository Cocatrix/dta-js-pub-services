
class Beer {
    constructor (jsonBeer) {
        this.type = jsonBeer.type;
        this.name = jsonBeer.name;
    }
}

/*
 * Used in './Pub.js'
 */
module.exports = Beer;