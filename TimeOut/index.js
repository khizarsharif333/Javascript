// Settimeout : We use settimeout to callback a function after a set time.

// ClearTimeOut : We can cancel any settimeout before it triggers.

const firstTimeOut = setTimeout(() => {

    console.log("You will get a window alert in 7 secs of Hello!");

    window.alert("Hello")
},10000);

clearTimeout(firstTimeOut);