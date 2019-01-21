//Callback functions are functions that are passed to another function to be called.

// function doThings(other) {
//     let x = 89;
//     console.log("Prince Akosua")
//     //Doing other things
//     other()

// }

// function myName() {
//     console.log("Emmanuel Tweneboah");

// }
//doThings(myName)

//EXPLANATION

//  For the doThings() function it takes in an argument which is a callback function. When passing a callback to another you can use any variable to represent but when calling the actual function to execute the callback function you have to pass in the actual function.


//When a function that serves as a callback function requires additionl argument to be passed before it can work

// function doThings2(callback) {

//     console.log("My sweetHeart Mothers")
//     let name = "Emmanuel" //This is the variable myName() need
//     callback(name)

// }

// function myName2(name) {
//     console.log(`Hello ${name}`);

// }

//doThings2(myName2, "Emmanuel")



//================================
let x = function () {
    console.log("I'm called from inside a function");
};

let y = function (callback) {
    console.log("Do somethindg");
    callback();
}

y(x)


// ===
// === === === === == EXAMPLE 3 === === =

let cal = (num1, num2, calcType) => {
    if (calcType === "add") {
        return num1 + num2;

    } else if (calcType === "multiply") {
        return num1 * num2
    }
}

const calAnswer = cal(3, 5, "multiply")
console.log(calAnswer)

// WHY THE NEED OF CALLBACK FUNCTIONS

// Let 's the function for calculation comes from a certain and all what the user have to do is pass in the numbers into the function for calculation then callback is necesary

// We can create our own
// function to perform certain by calling it.



let add = (a, b) => {
    return a + b;
};

let multiply = (a, b) => {
    return a * b
};

let doWhatever = (a, b) => {
    console.log(`Here are your two numbers back ${a} and ${b}`)
}

let cal2 = (num1, num2, callback) => {
    return callback(num1, num2)
};

console.log(cal2(3, 8, doWhatever)) //Using our doWhatever function
console.log(cal2(3, 8, add)) //using my add() function
console.log(cal2(3, 8, multiply)) //using my multiply function



// MAKING SURE THE USER PASS IN A FUNCTION BUT NOT A STRING OR A VARRIABLE


let add = (a, b) => {
    return a + b;
};

let multiply = (a, b) => {
    return a * b
};

let doWhatever = (a, b) => {
    console.log(`Here are your two numbers back ${a} and ${b}`)
}

let cal2 = (num1, num2, callback) => {

    if (typeof callback === "function") {
        return callback(num1, num2)
    } else {
        return `Please enter a function`;
    }

};

console.log(cal2(3, 8, doWhatever)) //Using our doWhatever function
console.log(cal2(3, 8, add)) //using my add() function
console.log(cal2(3, 8, multiply)) //using my multiply function