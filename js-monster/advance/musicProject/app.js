

let helloSong = new Audio('sound/hello.mp3')//directory to the mp3 file;

const playButton = document.querySelector('button');
const pauseButton = document.querySelector('.pause')

//PLAY
playButton.addEventListener('click', () => {
    let duration = helloSong.duration; //Duration of the song

    let muted = helloSong.muted;
    let pause = helloSong.pause;
    let volume = helloSong.volume

    //play
    helloSong.play()
    console.log(duration);
    console.log(muted)
    console.log(volume)
});


//PAUE
pauseButton.addEventListener('click', () => {
    helloSong.pause()
});


