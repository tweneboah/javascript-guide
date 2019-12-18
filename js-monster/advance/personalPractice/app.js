//=============================
//FUNCTION RETURNING A FUNCTION
//============================

function magic() {
    return function calc(x) {
        return x * 42;
    };
}

function msg() {
    return function yes() {
        return 'Yes oooo'
    }
}

const msg1 = msg(); //This means this function has been called and it return value is assinged to it's variable

// console.log(msg1())
// var answer = magic();
// console.log(answer(1337)); // 56154





//==============
//SWITCH
//=============

//The switch argument is the variable of the expression and the case is the value of the expression. When the swith value variable matches the value of the case, the function in it returns



// const expr = 'Papayas';

// switch (expr) {
//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound.');
//         break;
//     case 'Mangoes':
//     case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound.');
//         // expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log('Sorry, we are out of ' + expr + '.');
// }


//===============
//ARROW FUNCTION
//==================

//It cannot be used for creating constructor function

//It is suitable for a function that returns one line of code (simple);

//It suitable for callback function;


const square = (num) => {
    return num * num
};

const square2 = num => num * num

const people = [{
    name: 'Emma',
    age: 31
}, {
    name: 'Tweneboah',
    age: 22
}]

//Filter people under age of 30. Arrow function is suitable for this

const filterAge = people.filter(people => people.age < 31)

//Arrow function don't have access to this keyword

//

const person = {
    name: 'Emmanuel',
    getSummary: function () {
        return (`The name of the developer is ${this.name}`)
    }
};

//console.log(person.getSummary());



//====================
//TENARY OPERATOR
//==============

//It is short and used in place of if statement

const myAge = 20;
let message;

// (myAge < 30) ? message = `You can't votde` : message = `Yes you can vote`

//console.log(message);


//TRUTHY & FALSY

//Undefined is for arrays and objects 
//FALSY VALUES
//1. undefined
//2. 0
//3. empty string
//4. null


const products = [];
const product = {};

// if (product === undefined) {
//     console.log('No product found')
// } else {
//     console.log('Product found')
// }

//=============
// TYPE COERCION
//===============


//This is converting a data type to another say a string to a number

//String, number, boolean thus we can convert this to another data type

//Coverting a string to a number

const age1 = 20;
const age2 = '10';

//console.log(age1 + Number(age2))


//=================
//HANDLING ERRORS
//===============


// const getTip = (amount) => {
//     if (typeof amount === 'number') {
//         return amount * 0.4;
//     } else {
//         //Throw error
//         throw Error('Arguement must be a number')
//     }
// }


// try {
//     const results = getTip(true);
//     console.log(results)
// } catch (error) {
//     console.log(error)
// }



//OBJECT


const Person = function (firstName) {
    //It has no return keyword. It is 
    console.log(this);
    this.firstName = firstName
};

//The new Operator creates a new object of an instance

//this represent the functio
const person1 = new Person('Tweneboah');


console.log(person1)


