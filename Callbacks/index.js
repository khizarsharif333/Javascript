// Callbacks : A function that is apassed as an argument to another function.

// Used to handle aynchronous operations such as Reading a file, Network requests, Interacting with databases.


let result = document.getElementById("result");

sum(22,33,display);

function sum(a,b,callback){
    return callback(a,b,a+b);
}

function display(a,b,sum){
    result.innerText = `The sum of ${a} + ${b} = ${sum}!`;
}
