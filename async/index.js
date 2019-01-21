
// CALLBACK HELL

function getRecipe () {
    setTimeout(()=>{
        const recipeID = [673,242,786,213,789,200];
        console.log(recipeID);
        //Assumes is from server
         //We want data from this recipeID so let's create a function that need one of the arrays data

         //We have to pass the value we get from recipeID as an argument to our second callback function
          setTimeout((id)=>{
              const recipe = {
                  publisher: "Emmanuel",
                  title: "Fresh Tomato"};

              console.log(`${id}: ${recipe.title}`);
  //Again i need data from recipe/publisher so i have to create another callback function
                    // setTimeout((publisher) => {
                    // const recipe2 = {
                    //     title: "Italian Pizza",
                    //     publisher: "Tweneboah"};
                    //     console.log(recipe);
                    // }, 1500, recipe.title);

                          setTimeout(publisher => {
                               const recipe2 = {title: "Pizza",
                               publisher: "Tweneboah"};
                               console.log(recipe);
                          }, 1500, recipe.publisher);

          },1000, recipeID[2]);    

    },1500);
}

getRecipe();


