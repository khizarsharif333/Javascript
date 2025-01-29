// Class : new ES6 features which provides more structured and cleaner way to work with objects.

// Static : the properties and methods which has static keyword belong to the class.

class User{
    static userCount = 0;

    constructor(name){
        this.name = name;
        User.userCount++;
    }

    static displayUserCount() {
        console.log(`The user count is : ${this.userCount}`);
    }
}

const user1 = new User("Khizar");
const user3 = new User("Sharif");
const user2 = new User("Pawana");
const user4 = new User("Shikar");
const user5 = new User("Srihari");

User.displayUserCount();