// Callback Hell (also known as "Pyramid of Doom") happens when multiple 
// nested callbacks make the code hard to read, debug, and maintain.

// function walkDog(callback){

//     setTimeout(() => {
//         console.log("Walked the dog.");
//         callback();
//     },3000);
// }
// function doDishes(callback){

//     setTimeout(() => {
//         console.log("Did the dishes.");
//         callback();
//     },4000);
// }
// function takeOutTrash(callback){

//     setTimeout(() => {
//         console.log("Took the trash.");
//         callback();
//     },300);
// }

// walkDog(() => {
//     doDishes(() => {
//         takeOutTrash(() => {
//             console.log("Did all the chores!");
//         });
//     });
// });

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to handle async tasks without callback hell.

function walkDog(){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let walkedDog = false;
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
            let trash = false;
            if(trash) resolve("took the trash.");
            else reject("Didn't take the trash.")
        },4500);
    });
}

walkDog().then(value => {console.log(value); return doDishes()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("Did all the chores!")})
         .catch(error => console.error(error));