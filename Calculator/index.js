const displayTag = document.getElementById("display");


function appendToDispay(character){
    displayTag.value += character;
}

function clearDisplay(){
    displayTag.value = "";
}

function calculate(){
    displayTag.value = eval(displayTag.value);
}