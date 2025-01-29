// Function declaraton : define a reuable block of code that performs a specific task.

function hello(){
    console.log("hello");
}

setTimeout(hello,3000);
// logs hello after 3 seconds.

// Function expression : a way to define functions as values or variables.

setTimeout(function hello(){
    console.log("hello");
},3000);