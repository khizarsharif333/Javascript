// This keyword : it refers to the object where this is used.

// for example : 

const person = {
    name: "Khizar Sharif",
    age: 23,
    sayHello: function (){
        console.log(`Hey! This is ${this.name}!`)
    }
}

person.sayHello();