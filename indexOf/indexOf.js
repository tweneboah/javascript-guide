//SEARCHING THROUGH AN ARRAY

//1.indexOf()

//We use indexof() to find the position of an item so that we do something about it.Example, we can delete it
//We assign a variable whenever we use indexof()
//If the item is found it returns the position of that item but if it does not exist it returnds negative
//When there is more than one item found it returns the first item

//indexOf() cannot be used with array of object because but rather use findindex(), this is use to work with array of objects

const notes = ["Learn Js", "Learn React", "Dinner", "Shopping", "Chinese"];

const search = notes.indexOf("Learn Js");
console.log(search);