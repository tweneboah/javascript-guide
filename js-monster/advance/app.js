//NUMBERS

//Converting Strings to numbers

// let myNum1 = 1000.3034340;
// let myNum2 = '1000'

// const convertToNumber1 = Number(myNum2);
// const convertToNumber2 = parseInt(myNum2);

// //Convert to decimal places
// console.log(myNum1.toFixed(3))





//KEY EVENTS


// const keyWasPressed = (e) => {
//     console.log(e)
// }

// document.addEventListener('keypress', keyWasPressed)

// const el = document.querySelector('input');

// el.addEventListener('keypress', addItem);

// function addItem(e) {
//     console.log(e)
//     document.querySelector('h1').textContent = el.value;

//     if (el.value.length > 4) {
//         el.style.border = '2px solid red'
//     }
// }


//STRINGS
//=============

// let myWord = "Hello my name is Emmanuel, amd JS developer";

// console.log(myWord.split(' '));
// console.log(myWord.split(','));
// console.log(myWord);
// console.log(myWord.trim())
// console.log(myWord.toLocaleLowerCase().trim())
// window.addEventListener('DOMContentLoaded', (e) => {
//     console.log('DOM Fully loaded and passed')
// })



// ARRAY AND INCLUDES

// const arr = [3, 2, 5, 22, 4, 40];

// function member(val) {
//     return (arr.includes(val) ? 'yes' : 'No')
// }


// const check = member(66);
// console.log(check);


// const excludeNumbers = [10, 20, 44];

// function genRandom(min, max) {
//     let num = Math.floor(Math.random() * (max - min + 1));

//     return num
// }


//JSON Strig
//==========

//Converting strings to json json.Stringfy
//Converting from json to onject - json.parse


// const obj = { name: 'Emmanuel', age: 20 };

// let myString = JSON.stringify(obj)

// let newObj = JSON.parse(myString);
// console.log(myString);
// console.log(newObj);



//LOCAL STORAGE
//===========

//Item store in localstorage has no expiration date

//setItem('myCat', 'Tom') store Tom in myCat
//getItem('myCat') //Retrive value from storage
//removeItem('myCat')
//localStorage.clear() //clears all storages


let cat = localStorage.setItem('Cats', 'Picky');

//localStorage.clear();



//getBoundingClientRect
//===================


//This returns the size of an element and it's position


//TIMERS
//==========

//setTimeout this executes a function after the time expires


//setInterval //This run at a partiular interval

// setInterval(() => {

//     const randNum = Math.floor(Math.random() * 100);
//     console.log(randNum)

// }, 5000)


//REGRESSION

