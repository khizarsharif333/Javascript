// Same as mouse events but based on keys.

const box = document.getElementById("box");
let speed = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown",event => {
    box.textContent = "😫";
    box.style.backgroundColor = "tomato";
})

document.addEventListener("keyup",event => {
    box.textContent = "😁";
    box.style.backgroundColor = "rgb(140, 196, 56)";
})

document.addEventListener("keydown",event => {

    console.log(event.key);

    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowLeft" : {
                x -= speed;
                break;
            }
            case "ArrowRight" : {
                x += speed;
                break;
            }
            case "ArrowDown" : {
                y += speed;
                break;
            }
            case "ArrowUp" : {
                y -= speed;
                break;
            }
        }

        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    }
});