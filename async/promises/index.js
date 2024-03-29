
// //PROMISES

// //This is an object that keep track about whether certain event has happened already or not.

// //It determines what happens after the event has happened

// //It implements the concept of a future value that we're expecting

//  //    PROMISE STATES

//  //  Pending-------> Evenet Happens------> Resolved / Rejected


//  //PRODUCING & CONSUMING PROMISES

//  //Produce a promise means, we create a new promise and send that results using that promise

//  //Consuming Promise means: Using  Callback function for fullfillment or rejection of our promise


//  //Poducing / Creating a promise

// //We pass a function to our promises call executor(callback) function, this will call as soon as our promise is created.

// //If our promise was fulfilled, we call the resolve callback function and reject if otherwise

// //The resolve function takes in a callback function which is the function we want to execute

//   const getIDs = new Promise((resolve, reject) => {
//      setTimeout(() => {
//         resolve([673,242,786,213,789,200]);
//      },1500);
//  });

// //Creating another function that requres data from our getIDs() functions.

// //Here our return value will be a promise because, either the getIDs() promise was able to fullfilled or not

// const getRecipe = recID => {
//       return new Promise((resolve, reject) => {
//           setTimeout(ID => {
//             const recipe = {
//                 publisher: "Emmanuel",
//                 title: "Fresh Tomato"};
//                 resolve(`${ID}: ${recipe.title}`)
//           },1500, recID);

//       });
// };

//  //CONSUMING OUR PROMISE (then() or catch())

//  //We pass in a callback function to 'then()' . This returns the results from our resolve function.

//  //The number of arguments we pass to then() depends on the results we want to return from the resolve method



//  getIDs
//  .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//  })
//  .then((recipe) => {
//      console.log(recipe);
//  })
//  .catch((err) => {
//      console.log("Error")
//  })


// const promises = new Promise((reslove, reject) => {
//     if (true) {
//         reslove('It worked')
//     } else {
//         reject('Failed')
//     }
// })

// promises.then((results) => {
//     return results + '!'
// }).then((result2) => {
//     throw Error
//     console.log(result2)
// }).catch((err) => {
//     console.log('err')
// });


//ASYNC AWAIT

//It returns a promise


// const fetchData = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const dataFetched = await data.json();
//     console.log(dataFetched)
// }

// fetchData()


//ERROR

//Throw causes your app to stop executing unless you handle it. Because the error will give it to the callstack

//The error has 3 properties
//1. message
//2. name
//3. stack //where the error occured

//throw new Error();


//CATCHING ERRORS


//. try catch block

function fail() {
    try {
        //Run everything here if there is error catch them here
        console.log('workked')
        throw new Error('oppps')

    } catch (error) {
        console.log(error)
    }
}

fail()



