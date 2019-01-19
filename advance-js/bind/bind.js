
var john = {
    name: "John",
    age: 29,
    job: "Teacher",
    presentation: function (style, timeOfDay){
        if (style === "formal"){
            console.log('Good' + timeOfDay + 'ladies and gentlemen. My name is' + this.name + 'Am' + this.age + 'years old and my job is ' + this.job );
        }else if ( style === "friendly"){
            console.log('Hey whatsapp!  am ' + this.name + 'am ' + this.age );
        }
    }
};


john.presentation('friendly', 'afternoon');


var Emma = {
    name: "Emma",
    age: 30,
    job: "Developer",
}


//Using john's function on Emma, I have to call the function or borrow from john's object

//Call() function
//This accept arguements. There is one compulsory/ required arguement, which is "this". this refers to the name of the object we want to use the function of the object that has the function we want

//The other arguements depends on the function require arguements.

john.presentation.call(Emma, 'friendly', 'afternoon');





