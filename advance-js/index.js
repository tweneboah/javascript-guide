//HTTP (Hypertext transfer protocol)
//Request - what we want to do
//Response - what was actually done

// const request = new XMLHttpRequest()
// console.log(request);

// request.addEventListener("readystatechange", (e) => {
//     if(e.target.readyState === 4){
//         const data = JSON.parse(e.target.responseText);
//         console.log(data);
//     }
// });

// request.open("GET", "http://puzzle.mead.io/puzzle");
// request.send(); //This initialize our response and wait for us to get our data so that we can do something about it. Thus sending our request to the server


//Making an http request

//1. initialize request



const request = new XMLHttpRequest();


//2. specify a request where the data we want lives
request.open('GET', 'http://puzzle.mead.io/puzzle');

//3. we have to send the request to get our data but this does not happen instantly because it will depend on the server. This does not do anything unless we add event handler to it so that we can do something about it.
request.send();

//Adding eventListener to our request

//readystatechange: This is the stage that occures that causes our function to be fired

//the readystate has has 4 states
request.addEventListener('readystatechange', (e) => {
   if(e.target.readyState === 4 && e.target.status === 200){
       //determing whether the server gave us the data successfully
       const data = JSON.parse(e.target.responseText)
       console.log(data);
   }else if (e.target.readyState === 4){
       console.log('An error oocures');
   }
})

//e.target contains the response we want
// readyState has 4 states but what we want is 4 which is when our request is done

//e.target.readyState === 4 ; this means when our response is ready, it should display our response






