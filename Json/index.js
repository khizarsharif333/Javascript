// JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data. 
// It is easy to read and write for humans and machines, making it widely used in web applications, APIs, 
// and data storage. JSON is language-independent but is commonly used with JavaScript and many other programming languages.


const arr = ["khizar", "pawan", "shahul"];

console.log(arr);
console.log(JSON.parse(JSON.stringify(arr)));

// fetch("person.json").then(response => response.json()).then(value => console.log(value));
fetch("people.json")
    .then(response => response.json())
    .then(value => value.forEach(element => console.log(element)))
    .catch(error => console.error(error));