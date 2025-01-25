let array = ["khizar","Sharif"];

// The spread operator is used to "spread" the elements of an array or object into individual elements or properties.

let newArray = [...array,"Pawan"];

console.log(...newArray);

// Rest Operator 
// The rest operator is used to collect multiple elements into a single array or object. It is often used in:

// Function parameters to handle variable numbers of arguments
// Destructuring to group remaining items

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
  
const fruits = ["apple", "banana", "cherry", "date"];
const [first, second, ...rest] = fruits;
console.log(first); // "apple"
console.log(second); // "banana"
console.log(rest); // ["cherry", "date"]

const person = { name: "Alice", age: 25, city: "New York" };
const { name, ...details } = person;
console.log(name); // "Alice"
console.log(details); // { age: 25, city: "New York" }
