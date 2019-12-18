
//=======================================
//FUNCTIONS
//=======================================


function run() {
    console.log('runing')
};

for (let i = 0; i < 100; i++) {
    run()
}


function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`The roll is ${roll}`)
}

rollDie();


//RETURNING A VALUE

//To determine a function returns something assign the the funtion to a variale and then console log the variable

const validatorPassword = (username, password) => {
    if (password.length < 8) {
        return false
    }

    if (username.indexOf(' ') !== -1) {
        return false
    }


    if (username.indexOf(username) !== -1) {
        return false
    }

    return true
};


// let isPass = validatorPassword('username', '3923sfxc')
// console.log(isPass);


//Find average of arrays

const findAverage = (num1, num2) => {
    let average = (num1 + num2) / 2;
    return average
}


const ans = findAverage(20, 10);
console.log(ans)




