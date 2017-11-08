
class Person {
    constructor (jsonPerson) {
        this.firstName = jsonPerson.firstName;
        this.lastName = jsonPerson.lastName;
        this.email = jsonPerson.email;
    }
}

/*
 * Used in './Pub.js'
 */
module.exports = Person;