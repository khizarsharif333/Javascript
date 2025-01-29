// Destructing : Extract values from arrays and objects, and assign them to variables in a convineint way.

// [] - to perform array destructing.
// {} - to perform object destructing.

// Ex-1

let a = 1;
let b = 2;

[a, b] = [b, a];
// console.log(a+" "+b);

// Ex-2

let arr = ["apple", "ball", "cat"];

[arr[0], arr[2]] = [arr[2], arr[0]];
// console.log(arr);

// Ex-3

const [first, second, ...rest] = arr;

// console.log(first);
// console.log(second);
// console.log(rest);

// Ex-4 - Extract values from objects

const person1 = {
    firstName: "Khizar",
    lastName: "Sharif",
    age: 23
}

const person2 = {
    firstName: "Khalid",
    lastName: "Sharif",
    age: 26,
    job: "Software Engineer"
}

const { firstName, lastName, age, job = "UnEmplyoed" } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// EX-5 - Destructure in function parameters

function display({ firstName, lastName, age, job = "UnEmplyoed" }) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}

display(person2);

const curDate = new Date();

console.log(curDate);