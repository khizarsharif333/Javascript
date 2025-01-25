
// let username = window.prompt("Enter your name: ").trim();

// username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

// console.log(username);

let userInput = window.prompt("Enter the context!");

while(userInput === 3.14) {
    console.log(typeof(userInput));
    userInput = window.prompt("Enter the context again!");
}