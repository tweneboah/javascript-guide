// let keepMyPromise;
// keepMyPromise = false;

// promise2 = new Promise(function (resolve, reject) {
//     if (keepMyPromise) {
//         resolve("I like to keep my promise");
//     } else {
//         reject("I couldnt fullfill my promise");
//     }
// })

// console.log(promise2)




// //PROMISE
// //Promise returns whether an event was successfull(resolve) or rejected
// //It's constructed using new keyword.
// //It accept a callback function with two parameters; 1.resolve 2. reject

// let promiseToCleanTheRoom = new Promise(function (resolve, reject) {

//     //Cleaning the room
//     let isClean = true;
//     if (isClean) {
//         resolve("Cleaned");
//     } else {
//         reject("Not cleand")
//     }
// })

// //Promise execution

// //We append .then() to our promise variable. This is take in a callback function and this is fired when the promise is resolved

// //When returning the reject outcome you need to chain it with .catch() and this receives a callback function which will display the outcome if the promise failed.

// //You can receive the status back from the resolve

// //

// promiseToCleanTheRoom.then(function (fromresolved) {
//     console.log(`The room is ${fromresolved}`)
// }).catch(function (fromReject) {
//     console.log(`The room is not ${fromReject}`)
// })


// //EXAMPLE TWO========

// let cleanRoom = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Cleaned the Room");
//     });
// };

// let removeGarbage = (p) => {
//     return new Promise((resolve, reject) => {
//         resolve("remove garbage")
//     });
// }

// let winIceCream = (p) => {
//     return new Promise((resolve, reject) => {
//         resolve("won Icecream")
//     });
// }

// //We want to execute this function base on our criteria, hence promise is very crucial

// cleanRoom().then(() => {
//     return removeGarbage();
// }).then(() => {
//     return winIceCream()
// }).then(() => {
//     console.log("Finished")
// })