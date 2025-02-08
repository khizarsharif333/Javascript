// DOM - Document Object Model 
// Object{} - that represents the page you see in the browser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an html document an structures all the elements in a tree-like representation.
// Javascript can access the DOM to dynamically change the structure, content and style the web page.

// DOM Navigation

// firstElementChild

// const fruits = document.getElementById("fruits");
// const firstChild = fruits.firstElementChild;
// fruits.nextElementSibling.style.backgroundColor = "yellow";


//previousElementSibling

const veges = document.getElementById("veges");
// const firstChild = fruits.firstElementChild;
veges.previousElementSibling.style.backgroundColor = "yellow";

//parent

const ice = document.getElementById("icecream");
// const firstChild = fruits.firstElementChild;
ice.parentElement.style.backgroundColor = "gray";

//childern

const vegge = document.getElementById("veges");
// const firstChild = fruits.firstElementChild;

// vegge.children[1].style.backgroundColor = "red";

Array.from(vegge.children).forEach(child => {
    child.style.backgroundColor = "green";
})

vegge.children[1].style.backgroundColor = "red";