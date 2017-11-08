
class Person {
    constructor ({firstName, lastName, mail}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }
}

/*
 * To be called in './Pub.js'
 */
module.exports = Person;