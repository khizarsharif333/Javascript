// Arrow Functions : a consice way to write function expressions good for simple functions that you use only once.
// we cannot use this this keyword in arrow functions.

// Normal way to write function expressions.
setTimeout(function hello(name = "Khizar"){
    console.log(`Hello ${name}`);
},2000);

// Arrow function way to write function expressions.
setTimeout((name = "Khizar") => console.log(`Hello ${name}`),3000);