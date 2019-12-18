//Function cannot modify anything outside - No side effect
//Function given the same output base on input


//No side effect

//When you console.log the array you will see that there is no value of 3 because this function has modified something outside it scope

// const array = [1, 2, 3]

// function mutateArray(arr) {
//     arr.pop()

// }


// function mutateArray2(arr) {

//     arr.forEach((item) => {
//         arr.push('Functional Programming')
//     })

// }
// mutateArray2(array)
// console.log(array)


//NO SIDE EFFECT
//

//Function should return what's was input but not base on outside world

// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(10, 20));


function notGood(number) {
    return Math.random(number)
}

//console.log(notGood(4))

// for (let i = 0; i < 200; i++) {
//     console.log(i)
// }

//Immutatability: Not changing the state nut rather copying a state and manipulate it

const obj = {
    name: 'Emmanuel'
};

function clone(obj) {
    let changeName = { ...obj }
    changeName.name = 'Twenebaoh'
    return changeName
};

// console.log(obj)
// console.log(clone(obj))


//==========
//HOC
//==========

//It takes one or functions as argument
//Functions that returns another function after callback

function hof() {
    return function () {
        return 5
    }
}

//console.log(hof()()) //This means calling the second anonymous function


//AMAZON SHOPPING CART

const user = {
    name: 'Tom',
    active: true,
    cart: [],
    purchases: []
};

//Purchase item

function purchasedItem(user, item) {
    return Object.assign({}, user, { purchases: item })
};

const userdata = purchasedItem(user, { price: 200 });
console.log(userdata)