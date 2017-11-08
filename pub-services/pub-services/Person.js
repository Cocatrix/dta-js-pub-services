
class Owner {
    constructor (jsonOwner) {
        this.firstName = jsonOwner.firstName;
        this.lastName = jsonOwner.lastName;
        this.email = jsonOwner.email;
    }
}

module.exports = Owner;