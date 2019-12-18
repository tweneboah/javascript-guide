// const mile = prompt('Enter miles')


// const convertToKm = mile * 1.60
// console.log(`Your miles in km i ${Number(convertToKm)}`);


// const a = ''

// if (a) {
//     console.log('Exist')
// } else {
//     console.log('No Exist')
// }


// const age = 5

// const check = age > 9 ? 'Yes' : 'No'




//Check if a number is even



// const number = prompt('Enter a number')

// const check = number % 2 === 0 ? 'Even' : "No it's odd";

// console.log(check);


// let time = prompt('Enter time');
// time = Number(time)

// if (time < 12) {
//     console.log(`Good morning, your time is ${time}`)
// } else {
//     console.log(`Good afternoon, your time is ${time}`)
// }


// let name = 'Emma';

// switch (name) {
//     case 'Emma':
//         console.log('Yes');
//         break;
//     case 'Atom':
//         console.log('Nooo')

// }

//FUNCTIONS

// function message() {
//     console.log('Hoiiii')
// }

// message(


// )

// function add(num1, num2 = 3) {
//     return num1 + num2
// };

// console.log(add(3));

// const btns = document.querySelectorAll('button')
// console.log(btns)



// let var1, var2, var3

// var1 = var2 = var3

// function message() {
//     console.log(var1 + '' + var2 + '' + var3)
// };


// function message1() {
//     var1++
//     message()
//}

//btns[0].onclick = message1



// function Car(color, price) {
//     this.color = color;
//     this.price = price;
// };



// const newOb = new Car('red', 89);

// console.log(newOb)

//DOM


//document.querySelector('h1').style.backgroundColor = 'red';



//let eleList = document.getElementsByClassName('first');

// let eleList2 = document.querySelectorAll('span');

// for (i = 0; i < eleList2.length; i++) {
//     console.log(eleList2[i])
// }


//DOM



// console.log(document.querySelector('#myID').style.backgroundColor = 'red');
// //style is use with css

// document.querySelector('h1').style.border = '2px solid red'


// const dmStr = document.querySelectorAll('li.first');

// console.log(dmStr.innerHTML);




//let elementList = document.getElementsByClassName('myclass');
//let elementList = document.getElementsByTagName('span');
// let = elementList = document.querySelectorAll('span')

// for (i = 0; i < elementList.length; i++) {
//     let el = elementList[i];
//     elementList[i].textContent = i + 1 + 'Updated'
//     console.log(el)
//     console.log(i)
// }
// const el1 = document.querySelector('#one'); console.dir(el1.innerHTML); el1.innerHTML = "Hello World"; el1.style.color = 'red'; el1.style.background = 'blue'; el1.innerText = "TEST";


// let el = document.querySelector('h1')
// console.log(el)


//SettAttribute
//el.setAttribute('class', 'red') //Specifiy either class or id and then the name of your class
//el.getAttribute('class') //Get the attribute of type class of the selected element
//el.remove()// This removes attribute

//let ctn = el.textContent.style.backgroundColor = 'yellow'



//SELECT HREF OF ELEMENTS

// const links = document.querySelectorAll('a');

// links.forEach((link) => {
//     console.log(link.getAttribute('href')) //Get all links
//     //Set attributes
//     el.setAttribute('href', 'http//www.hicotek.com')

// })


//THE RIGHT WAY

//Check if a class exisit

// const listItems = document.querySelectorAll('li');

// listItems.forEach((list, index) => {
//     console.log(list.className) //Display className 
//     list.textContent = list.className ? list.className : 'No Class name';
//     //Adding className if there is no className
//     list.classList.add('test');
//     //Add class if it is not there and remove if it's there
//     list.classList.toggle('test1');
//     //Remove class
//     //list.classList.remove('test')

//     //Replace classname
//     list.classList.replace('test', 'ghc')

// });



//PRACTICE


// const el = document.querySelector('h1');

// const age = prompt('Enter your age');

// if (age > 2) {
//     el.classList.add('bg')
// } else {
//     el.classList.remove()
// }

//PARENT AND CHILDREN

// const el = document.querySelector('div.first');

// for (let i = 0; i < el.children.length; i++) {
//     console.log(el.children[i].textContent)
// }


// for (let i = 0; i < el.childNodes.length; i++) {
//     console.log(el.childNodes[i].textContent)
// }


//CREATE AN ELEMENT

// const div = document.createElement('div');
// div.style.backgroundColor = 'yellow';
// div.style.padding = '20px'
// div.id = 'one';
// div.textContent = 'Hicotek';

//Anoter way of creating content
// const textInside = document.createTextNode('Welcome to Hico');
// div.appendChild(textInside);

// //adding to the page
// document.body.appendChild(div)
// console.log(div)


//Add this before h1

// const h1 = document.querySelector('h1');

// document.body.insertBefore(div, h1);




//EVENT




// window.addEventListener('offline', (event) => {
//     console.log('The internet connection has been lost')
// });


// window.onoffline = (event) => {
//     console.log("The network connection has been lost.");

// };


if (navigator.onLine) {
    console.log('online');
} else {
    console.log('offline');
}


const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    h1.style.backgroundColor = 'green';
    h1.style.padding = '50px'
});

// const log = document.querySelector('.event-log-contents');
// const badImg = document.querySelector('.bad-img');
// console.log(badImg)


//BACKGOUND CHANGER

const btn = document.querySelector('.changeBg');
btn.addEventListener('click', () => {

    //Generate rando color
    let myColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;

    //Change the style of the html body
    document.body.style.backgroundColor = myColor;

})


//Math.random() * 3 //from 0 - 2.99

Math.floor //round to a whole number

//const random = Math.floor(Math.random() * 255); //0 -4
//Remember colors values ranges from 0 -255 which represent a color
//rgb colors are of 3 format

//Our aim is to pass 255 constant and the values returns from the math.random will range from 0 -255

function randomNumber(num) {
    return Math.floor(Math.random() * num + 1)
}


//EVENT OBJECT

//e.target is the element that triggers the action in our case it's a button in that case we can add individual actions to it for example in our formal background changer anytime we click on the button it changes the whole body but now instead we want to click either h1 tag or any to change it

btn.addEventListener('click', (e) => {
    // console.log('BTN Clicked', e.target);
    // console.log('This', this) //This refers to object that triggers this function
})


//APP UPDATE

const spans = document.querySelectorAll('span');

spans.forEach((el) => {
    el.style.padding = '10px',
        el.style.fontSize = '19px';
    el.style.border = '2px solid green';
    el.style.display = 'block';
    el.addEventListener('click', (e) => {
        //e determins which element was clicked
        // console.log(e.target);
        // console.log(this);
        // console.log(el);

        //Change backgroun color when the spans is clicked
        e.target.style.backgroundColor = ranColor()
    })
});

function ranColor() {
    let myColor2 = `rgb(${randomNumber2(255)}, ${randomNumber2(255)}, ${randomNumber2(255)})`;
    return myColor2
}

function randomNumber2(num) {
    return Math.floor(Math.random() * num + 1)
};



//KEY EVENTS

let keys = {};

document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOf)

function pressKeyOn(event) {
    console.dir('key was pressed', event)
}

function pressKeyOf(event) {
    console.log('key off', event)
}