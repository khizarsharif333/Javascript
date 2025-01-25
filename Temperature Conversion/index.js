let temp = document.getElementById("textBox");
let submit = document.getElementById("submit");
let fahrenheit = document.getElementById("toFahrenhit");
let celsius = document.getElementById("toCelsius");
let status_message = document.getElementById("status-message");

submit.onclick = function(){
    let num = Number(temp.value);

    status_message.classList.remove("hidden");
    if(isNaN(num)) {
        status_message.innerText = "Please enter valid number!";
        status_message.style.color = "rgb(190, 93, 93)";
    }
    else{
        status_message.style.color = "rgb(4, 121, 82)";
        if(fahrenheit.checked){
            num = num * 9/5 + 32;
            status_message.innerText = `Celsius to Fahrenheit is ${num}`;
        }
        else{
            num = (num-32) * 5/9;
            status_message.innerText = `Celsius to Fahrenheit is ${num}`;
        }
    }
}
