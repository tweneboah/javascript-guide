
// DISPLAYING DATA

//Foreach takes in a callback which will loop through the data one at a time 

//We pass in an anonymous function to the forEach function and this will call at a time for the individual items in the array

const colors = ['Red', 'Yellow', 'Green', 'white'];
colors.forEach((color) => {
    console.log('The answer '  + color); 
});



// ADDING DATA IN AN ARRAY

//STEPS

//1. Create an array of numbers
const numbers = [1, 9, 20];

//2. create a variable to hold the sum
let sum = 0;

//3. Loop over the array, incrementing the sum variable
numbers.forEach((number) => {
   sum = sum + number;
})
//console.log(sum)
//4. print the sum variable


//INCOME AND EXPENSES

const income = [10., 60, 3, 7];
const expense = [10, 20, 40];

let inc = 0;
let exp = 0;

income.forEach((myIncome) => {
    inc = inc + myIncome;
});

console.log(inc);

expense.forEach((myExpense)=> {
    exp = exp + myExpense;
});

console.log(exp);

console.log(`My total income is $${inc - exp}.00`);


//PUTTING forEach in a function and display all object properties

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
   posts.forEach((post) => {
       console.log(`${post.id} - ${post.title}`)
   })
};

handlePosts();



//EXAMPLE 3

//Calculate the area of an image and save their values in an array

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];

  images.forEach((image) => {
      areas.push(image.height * image.width);
  });

  console.log(`The calculated values are ${areas}`);