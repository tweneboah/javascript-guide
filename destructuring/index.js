
//Object destructuring

const myObject = {
    names:'Emmanuel',
    age: 30,
    skills: ['Node', 'Express', 'Bootstrap', 'MongoDB'],
    married: false
}

//HOW TO DESTRUCTURE

// 1. First look at the properties of the object you want to destructure carefully

//2. The name of the varibles you extract must be the same as the one in the original object

const { } = myObject;
//This means inside the {} we can access all the properties

//EXTRACTING ONLY THE SKILLS
//const  { skills } = myObject

//EXTRACTING ALL THE PROPERTIES
const { name, age, married, skills} = myObject
console.log(`My name is ${name}, and these are my skills ${skills}, my married status is ${married}`)


//DESTRUCTURING PARAMETERS PASS TO A FUNCTION

//1. You can only destructure parameters if the function requires object as argument

//First get to know the object and their properties 

//If a function requires an object as argument and you pass anything apart from object it will throw an error

//If a function requires to pass object do it when calling that function



const  myDetails = ({firstName, lastName, age, work }) => {
     return (`My full name is ${firstName} ${lastName} I'm ${age} years old and am a ${work}`)
}

const hereAreMyDetails = myDetails({
   firstName: 'Emmanuel',
   lastName: 'Tweneboah',
   age: 30,
   work: 'Developer'
})

console.log(hereAreMyDetails)
//For the above function i requires the client to pass in their details