
function updateClock(){
    const curDate = new Date();
    let hours = curDate.getHours();
    let mins = curDate.getMinutes();
    let secs = curDate.getSeconds();
    let merdian = (hours > 12)? "PM" : "AM";
    hours = hours % 12;

    hours = hours.toString().padStart(2,0);
    mins = mins.toString().padStart(2,0);
    secs = secs.toString().padStart(2,0);

    const timeString = `${hours}:${mins}:${secs} ${merdian}`;

    document.getElementById("time").innerText = timeString;
}

updateClock();

const inter = setInterval(updateClock,1000);

// stops after 10 secs.
setTimeout(() => clearInterval(inter),10000);