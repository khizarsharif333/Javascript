// Async : makes a funciton returns a promise.
// Await : makes an async function wait for a promise.

// Allows you to write asynchronous code in a synchronous manner. Async doesn't have resolve or reject paramteres.
// Everything after await is placed in an event queue.

function walkDog(){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let walkedDog = true;
            if(walkedDog) resolve("Walked the dog.");
            else reject("Didn't walk the dog.");
        },3000);
    });
}
function doDishes(){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let dishes = true;
            if(dishes) resolve("Did the dishes.");
            else reject("Didn't do the dishes.")
        },4005);
    });
}
function takeOutTrash(){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let trash = true;
            if(trash) resolve("took the trash.");
            else reject("Didn't take the trash.")
        },4500);
    });
}

async function doChores() {
    
    try{
        const walkingTheDog = await walkDog();
        console.log(walkingTheDog);

        const doingDishes = await doDishes();
        console.log(doingDishes);

        const takingTrash = await takeOutTrash();
        console.log(takingTrash);
    }
    catch(error){
        console.error(error);
    }
}

doChores();