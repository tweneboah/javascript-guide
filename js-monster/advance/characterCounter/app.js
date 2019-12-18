
//node
const text = document.querySelector('textarea');
const outPut = document.querySelector('.output');

const maxLength = 10;
const warnLength = 5;

['keyup', 'keydown', 'change'].forEach((keyEvent) => {
    text.addEventListener(keyEvent, worCount)
})


function worCount(e) {

    const count = text.value.length;

    if (count > maxLength) {
        text.value = text.value.substring(0, maxLength);
    } else if (count > warnLength) {
        outPut.classList.add('red')
    } else {
        outPut.classList.remove('red')
    }

    outPut.innerHTML = maxLength - text.value.length + ' Characters  left ' + '/' + '10'
}




window.navigator.vibrate([200])

//loop through all the event

