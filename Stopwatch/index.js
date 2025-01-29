const count = document.getElementById("time");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
   if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update,10);
    isRunning = true;
   }
}

function update(){
    const curTime = Date.now();
    elapsedTime = curTime - startTime;

    let hours = Math.floor(elapsedTime /(1000 * 60 * 60)).toString().padStart(2,0);
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2,0);
    let secs = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2,0);
    let millis = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2,0);

    const timeString = `${hours}:${mins}:${secs}:${millis}`;
    count.innerText = timeString;
}

function stop(){
    if(isRunning){
        isRunning = false;
        elapsedTime = Date.now() - startTime;
        clearInterval(timer);
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    count.innerText = `00:00:00:00`;
}

