// Mouse Events : listens for specific events to cerate interactive web pages.

const box = document.getElementById("box");

box.addEventListener("click",event => {
    if(event.target.style.backgroundColor == "tomato"){
        event.target.textContent = "Click me! 😁";
        event.target.style.backgroundColor = "rgb(140, 196, 56)";
    }
    else{
        event.target.textContent = "Ouch! 😫";
        event.target.style.backgroundColor = "tomato";
    }
});

box.addEventListener("mouseover",event => {
    event.target.textContent = "Don't Do it! 🙅‍♂️";
    event.target.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout",event => {
    event.target.textContent = "Click me! 😁";
    event.target.style.backgroundColor = "rgb(140, 196, 56)";
});