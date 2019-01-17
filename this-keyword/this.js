
// const person = {
//     firstName: "Emmanuel",
//     lastNmame: "Tweneboah",
//     id: 542,
//     fullName: function(){
//         return this.firstName + " " + this.lastNmame
//     }
// }
//console.log(person.fullName());

let v = this;
//console.log(v);



// this in a Function (Default)

function myFunction () {
    return this;
}

console.log(myFunction())

// this in event Handlers

//In a JavaScript function, the owner of the function is the default binding for this.


// Object Method Binding

//In these examples, this is the person object (The person object is the "owner" of the function):

const person = {
    firstName: "Emmanuel",
    lastNmame: "Tweneboah",
    id: 542,
    fullName: function(){
        return this;
    }
}

console.log(person.fullName())


