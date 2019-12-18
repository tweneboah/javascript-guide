class Car {
    constructor(x, y) {
        console.log('cONS');
        //This is use to initialise variables and runs any functions declared into. this will automaticall when an instance of class is created so to avoid automatically runing of function we will create it outside the constructor but for variables we have to create it inside the constructor to initialise the varriables anytime it's called

        this.x = x;
        this.y = y
    }

    //The function created is used to manipulate the variables of the object but you can also passed in your argumenets
    msg() {
        console.log(`This is just a message`)
    }

    //Static function does not require the new keyword or object instance before it can call on the class
    static myName() {
        alert('my nane')
    }
};

//Car.msg() //this can't be called without static keyword

//Car.myName()



//CLASS INHERITANCE

//A class that inherit another class



class MyAcoount {
    constructor(name, age, account) {
        this.name = name,
            this.age = age,
            this.account = account
    }
};


const account1 = new MyAcoount('Emmanuel', 29, 'Premium');

console.log(account1);



function deposit() {

}





