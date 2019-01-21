# js-complete-guide

# Async / Await

```javascript
//Async Await is used to consume promises
//We don't use Async Await to produce promises

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([673, 242, 786, 213, 789, 200]);
  }, 1500);
});

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          publisher: "Emmanuel",
          title: "Fresh Tomato"
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

// CONSUMING PROMISE USING ASYNC AWAIT

//This returns a promise but it's wait
//Inside async function we can have more await functions

//The await will stop the async functio to execute untill the promise is resolve

//Await is only used in an async function
async function getRecipeAW() {
  const IDs = await getIDs;
  //The IDs becomes the values from our promise function getIDs()
  console.log(IDs);
  const recipe = await getRecipe(IDs[3]);
  console.log(recipe);
}
getRecipeAW();
```

# PROMISES

```javascript
//PROMISES

//This is an object that keep track about whether certain event has happened already or not.

//It determines what happens after the event has happened

//It implements the concept of a future value that we're expecting

//    PROMISE STATES

//  Pending-------> Evenet Happens------> Resolved / Rejected

//PRODUCING & CONSUMING PROMISES

//Produce a promise means, we create a new promise and send that results using that promise

//Consuming Promise means: Using  Callback function for fullfillment or rejection of our promise

//Poducing / Creating a promise

//We pass a function to our promises call executor(callback) function, this will call as soon as our promise is created.

//If our promise was fulfilled, we call the resolve callback function and reject if otherwise

//The resolve function takes in a callback function which is the function we want to execute

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([673, 242, 786, 213, 789, 200]);
  }, 1500);
});

//Creating another function that requres data from our getIDs() functions.

//Here our return value will be a promise because, either the getIDs() promise was able to fullfilled or not

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          publisher: "Emmanuel",
          title: "Fresh Tomato"
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

//CONSUMING OUR PROMISE (then() or catch())

//We pass in a callback function to 'then()' . This returns the results from our resolve function.

//The number of arguments we pass to then() depends on the results we want to return from the resolve method

getIDs
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((err) => {
    console.log("Error");
  });
```

## Callback Hell

```javascript
// CALLBACK HELL
function getRecipe() {
  setTimeout(() => {
    const recipeID = [673, 242, 786, 213, 789, 200];
    console.log(recipeID);
    //Assumes is from server
    //We want data from this recipeID so let's create a function that need one of the arrays data

    //We have to pass the value we get from recipeID as an argument to our second callback function
    setTimeout(
      (id) => {
        const recipe = {
          publisher: "Emmanuel",
          title: "Fresh Tomato"
        };

        console.log(`${id}: ${recipe.title}`);
        //Again i need data from recipe/publisher so i have to create another callback function
        // setTimeout((publisher) => {
        // const recipe2 = {
        //     title: "Italian Pizza",
        //     publisher: "Tweneboah"};
        //     console.log(recipe);
        // }, 1500, recipe.title);

        setTimeout(
          (publisher) => {
            const recipe2 = { title: "Pizza", publisher: "Tweneboah" };
            console.log(recipe);
          },
          1500,
          recipe.publisher
        );
      },
      1000,
      recipeID[2]
    );
  }, 1500);
}

getRecipe();
```

//======================================================================

## bind() method

1. This help us to call a function and set this keyword mannually.

## Budget App

## IIFE

1. The are the functions that invoke automatically.

2. Functions and properties in IIFE are private.

3. To nake the properties or methods public unless you define them in a return key kewyord in the form of object.

4. IIFE returns the properties and methods in an object form.

5. To make the properties and methods public, define a function inside the return function.

6. Anytime you define a function inside an IIFE, to execute the function automatically, you have to call the function inside the same IIFE.

```javascript
var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    console.log(x + a);
  };
  add(90);
})();
```

### Making a function public

```javascript
var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    console.log(x + a);
  };

  //making the add function a public
  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  };
})();
```

### if you want to pass one function from one module to other, then you have to pass that module to the module you want access the method

My learning journey of pure javaScript

# this keyword -> 12/01/2019

```javascript
const person = {
  firstName: "Emmanuel",
  lastNmame: "Tweneboah",
  id: 542,
  fullName: function() {
    return this.firstName + " " + this.lastNmame;
  }
};
```

The JavaScript this keyword refers to the object it belongs to.

# this in a Method

In an object method, this refers to the "owner" of the method.

In the example on the top of this page, this refers to the person object.

The person object is the owner of the fullName method.

```javascript
fullName : function() {
  return this.firstName + " " + this.lastName;
}

```

# this alone

When used alone, the owner is the Global object, so this refers to the Global object.

In a browser window the Global object is [object Window]:

# this in a Function (Default)

In a JavaScript function, the owner of the function is the default binding for this.

So, in a function, this refers to the Global object [object Window].

```javascript
function myFunction() {
  return this;
}
```

# this in event Handlers

In HTML event handlers, this refers to the HTML element that received the event:

```javascript
<button onclick="this.style.display='none'">Click to Remove Me!</button>
```

# Object Method Binding

In these examples, this is the person object (The person object is the "owner" of the function):

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  myFunction: function() {
    return this;
  }
};
```
