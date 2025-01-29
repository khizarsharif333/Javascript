class Student{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let newClass = [new Student("Khizar",23),new Student("Sharif",16),new Student("Shahul",17),new Student("Pawan",88),new Student("Khalid",18)];

let children = newClass.filter(isChild);

let adults = newClass.filter(isAdult);

function isChild(element){
    if(element.age < 18) return element;
}

function isAdult(element){
    if(element.age >= 18) return element;
}

console.log(children);
console.log(adults);