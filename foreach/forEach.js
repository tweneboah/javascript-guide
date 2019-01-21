//Looping using forEach()
//It uses callback function
//It accept two arguements. The first argument represent the individual item and the second argument is the position of the items
//This is the most common loop

const notes = ["Learn Js", "Learn React", "Dinner", "Shopping", "Chinese"];

console.log(`You have ${notes.length} notes`);

notes.forEach(function (note, index) {
    //console.log(note) //Individual items
    // console.log(index); //Position of the items

    //Formatting the output in a listed form
    const num = index + 1;
    console.log(`${num}.${note}`)
})