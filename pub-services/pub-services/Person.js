
class Person {
    constructor ({firstName, lastName, email}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

/*
 * To be called in './Pub.js'
 */
module.exports = Person;