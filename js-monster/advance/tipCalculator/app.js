const btn = document.querySelector('button');

const outPut = document.querySelector('.output');


btn.addEventListener('click', () => {
    //For dynamic values put it inside 
    let cost = document.querySelector('input').value
    //check for empty
    if (cost !== '') {
        //Give 50% discount
        let tip = (cost * 0.15).toFixed(2);
        let displayMessage = `<h2>Your discount on Ghc ${cost} is Ghc ${tip} </h2>`
        outPut.innerHTML = displayMessage
    } else {
        alert('Please enter a value')
    }

})