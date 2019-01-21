//OBJECT WITH FUNCTIONS
//How to return object from a function
//How to pass an object as an arguement

let myBook = {
  title: "Jesus",
  author: "Emmanuel",
  PageCount: 290
};

let myOtherBook = {
  title: "My Mother",
  author: "Tweneboah",
  PageCount: 400
};

//If i want to print the book summary for each, then i have to use a function

//Passing object as an arguement
//If you pass an object as an arguement to a function, you can access and manipulate the properties of that objec.

//HOW TO PASS OBJECT OR A FUNCTION TO ANOTHER FUNCTION.

//When you define a function you can use any variable name but when calling or using the function you use the original or the actual object name

//GET SUMMARY METHOD

const getSummary = function (book) {
  return {
    summary: `The author of the book is ${book.author} with the title ${
      book.title
    } which contains ${book.PageCount} pages`
  };
};

//Displaying the summary of my book
const ans = getSummary(myBook);
console.log(ans.summary);

//Displaying the summary of my other book
const ans1 = getSummary(myOtherBook);
console.log(ans1.summary);