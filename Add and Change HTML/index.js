const newH1 = document.createElement("h1");
newH1.innerText = "New Heading!"
newH1.style.textAlign = "center";
newH1.style.color = "tomato";

document.getElementById("box1").append(newH1);

const newLi = document.createElement("li");
newLi.textContent = "Orange";
newLi.style.backgroundColor = "lightgreen";

const children = document.querySelectorAll("#fruits li");

document.getElementById("fruits").insertBefore(newLi,children[1]);