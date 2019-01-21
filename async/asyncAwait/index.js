
//Async Await is used to consume promises
//We don't use Async Await to produce promises
 

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve([673,242,786,213,789,200]);
    },1500);
});

const getRecipe = recID => {
     return new Promise((resolve, reject) => {
         setTimeout(ID => {
           const recipe = {
               publisher: "Emmanuel",
               title: "Fresh Tomato"};
               resolve(`${ID}: ${recipe.title}`)
         },1500, recID);
       
     });
};

// CONSUMING PROMISE USING ASYNC AWAIT

//This returns a promise but it's wait
//Inside async function we can have more await functions

//The await will stop the async functio to execute untill the promise is resolve

//Await is only used in an async function
 async function getRecipeAW () {
     const IDs = await getIDs;
     //The IDs becomes the values from our promise function getIDs()
    console.log(IDs);
    const recipe = await getRecipe(IDs[3]);
    console.log(recipe)

 };
 getRecipeAW();