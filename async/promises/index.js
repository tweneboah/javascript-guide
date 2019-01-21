
//PROMISES

//This is an object that keep track about whether certain event has happened already or not.

//It determines what happens after the event has happened

//It implements the concept of a future value that we're expecting

 //    PROMISE STATES

 //  Pending-------> Evenet Happens------> Resolved / Rejected


 //PRODUCING & CONSUMING PROMISES

 //Produce a promise means, we create a new promise and send that results using that promise

 //Consuming Promise means: Using  Callback function for fullfillment or rejection of our promise


 //Poducing / Creating a promise

//We pass a function to our promises call executor(callback) function, this will call as soon as our promise is created.

//If our promise was fulfilled, we call the resolve callback function and reject if otherwise

  const getIDs = new Promise((resolve, reject) => {

 })