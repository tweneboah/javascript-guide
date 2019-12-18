//=============
//ARRAY
//===========

//create Array

const moreNumbers = new Array(5, 9);
const moreNumbers2 = Array.of(56, 1, 9)
const moreNumbers3 = Array.from('sfd')

//array.from() is use to conevert object to array

const family = { name: 'Yaw', age: 70 };
const family2 = Array.from(family);





// console.log(family2.length)
const analyticsData = [[1, 2, 4], [-4.5, 9, 3, 2]];

//Looping through a nested Array

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint)
//     }
// };


//===============
//ARRAY METHODS
//==============

//1.push -> Add item at the end of the array
//unShit ->  Add item at the begining of an array
//3. pop -> Removes the last item
//4. shift -> Remove the first element
//5. Splice -> insert elements between items, we can also remove item
//6. slice -> This is use to copy an array
//7. concate -> combine arrays together


//Splice only work with iteralble array so to use splice on object convert to array

// const person = [3, 6, 'age', 'node js'];


// person.push('React js ');
// person.unshift('CSS');
// console.log(person)
// person.pop('react js');
// person.shift();

// //updating array
// person[0] = 'Express Js';


//======
// SPLICE
//=======

//INSERTING DATA USING SPLICE;

// person.splice(0, 1, 'HTML', 'Bootstrap'); //This means start from index 0 and delete one item and then insert HTML

// //REMOVING ITEM WITH SPLICE
// const removedItem = person.splice(0, 1) //Start from 0 index and delete one item from index zero
// //Splice also returns the remove item so if you want you can do something with it

// console.log('The removed item is', removedItem);

// console.log(person)

//===============
//SORTING
//============



const price = [50, 34, 2, 10, 20];

const sortedPrices = price.sort((a, b) => {
    if (a > b) {
        return -1
    } else if (a === b) {
        return 0
    } else {
        return 1
    }
});

//console.log(sortedPrices);

//===========
//indexOf();
//===========

//it returns the index of the item passed into otherwise it returns -1

//This only work with array


const findIndex = price.indexOf(9);
//console.log(findIndex);


//===========
//find()
//===========
//3 arguments ; 1. a single object of the array 2. The index of the single object 3. The full object

const personData = [{ name: 'Emmanuel' }, { name: 'Tweneboh' }]
const searchName = personData.find((person, index, personData) => {
    //The person represent a single object
    return person.name === 'Emmanuelf'
});

//console.log(searchName);



//=============
//findIndex
//========
//This returns the index of the object otherwise it returns negative

const nameIndex = personData.findIndex((person, index, persons) => {
    return person.name === 'Emmanuel'
})


//console.log(nameIndex);



//====================
//includes()
//================

//This does not return the index or a value but if you want to know if a data is part of an object


//This returns true if exist and false otherwise

// const price2 = [50, 34, 2, 10, 20];
// const checkIfExist = price2.includes(50);
//console.log(checkIfExist)


const salaries = [10, 30, 9.5, 20];
//add tax of 0.6 to each salary and print the newly salary

const tax = 0.6

const adjustedSalary = [];


//OPTION 1

// for (salary of salaries) {
//     adjustedSalary.push(salary * tax);
// }

//===========
//OPTION 2 using forEach()
//===========
//The difference above the method above is forEach you can return td 

//ForEach() does not return anything

// salaries.forEach((salary, index, salaries) => {
//     adjustedSalary.push(salary * tax)
// })



//===============
//map() this returns a new array
//==============


const newSalary = salaries.map((salary, index, salaries) => {
    return adjustedSalary.push(salary * 90)
})
//console.log(adjustedSalary);
//console.log('New salary', newSalary)



//==============
//FILTERING
//==============

//Find salary greater than 50

const filteredSalaries = salaries.filter((salary) => {
    return (salary !== 20)
});

//console.log('Filter salary', filteredSalaries)



//=============
//REDUCE
//============

const income = [20, 21, 20, 80]

//It reduces an array to a simple value
//Finding total income

const sum = income.reduce((prevValue, currentValue) => {
    return prevValue + currentValue
}, 0);
//console.log(sum)

//prevValue = 0
//currentValue = The first value in the array = 20



//REDUCE ON OBJECT


const data = [
    { name: 'Prince', amount: 200 },
    { name: 'Yaw', amount: 300 }
]

const initialValue = 0;

const sum2 = data.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.amount
}, initialValue);



//JOIN & SPLIT

//SPLIT = It's use to convert strings of data to array. Assuming you have a data like this which is not readerble by the computer you need to transform it by using split


//split is use to convert strings to array.
//The split() method is used to split a string into an array of substrings, and returns the new array.


const nameData = 'name;Emmanuel;300'

//When spliting this by ; it means in our nameData value, it will split at every ;
//console.log(nameData.split(';'));


//===========
//JOIN
//=========

//Convert the elements of an array into a string:
//The elements will be separated by a specified separator. The default separator is comma (,).

// const myData = ['node js', 'react js', 'css'];

// console.log(myData.join('-'))



//============
//SPREAD
//===========

//Pulling all elements from array and give it to you
//For copying arrays with comma separated. 
//After you copied a data using spread operator and later you update the original data, it won't affect the copied data

//One important thing about spread is that assuming you want to find a min value of a data and since the min function doesn't required an array as argument but instead it requires a comma separated  value(single values), we have to use spread to achieve that

//DEMO

// const myMoney = [200, 120, 400, 21] //Find the min value

// const minValue = Math.min(...myMoney);
// console.log(minValue)

// //COPYING
// const names = ['Emmanuel', 'Tweneboah', 'Hicotek'];

// const copiedNames = [...names];
// names.push('ATOM')
// console.log(copiedNames);


//==============
//DESTRUCTURING
//============

//This is use to pull or access individuals items from an array

//Previously we use square bracket to access them like so

const myData2 = ['Emmanuel', 'Tweneboah'];
// const firstName = myData2[0];
// const lastName = myData2[1];

//To avoid this complexity that's where array destructure comes in

// const [firstNamer, lastNamer] = myData2;
// //The varaible we assigned is our own variables and each represent an index of the array

// console.log(firstNamer, lastNamer);


//Assuming we have a bunch of data but we are interesed in age and gender but we also want to pull other values. This is how we will do it


// const myData3 = [30, 'male', 'node JS', 'China'];

// const [age, gender, ...otherValues] = myData3;

// console.log(age, gender, otherValues)


3718 