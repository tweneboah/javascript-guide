//SEARCHING THROUGH ARRAY

//findIndex()

//We use findIndex() for array of object. This return the position of the item if it exist but it returns -1 if it does not exist.
//Always assign with a variable and define the property you want to search for

//It accept a callback functions which accept two argument. one the individual item and 2: the index of each items

//If the item is not found it returns undefined

//find()
//====================


const notes = [{
        title: "MongoDB",
        body: "Learn MongoDB"
    },
    {
        title: "React Js",
        body: "Learn React JS"
    },
    {
        title: "Node JS",
        body: "Learn Node JS"
    }
]

// const index = notes.findIndex(function (note, index) {
//     return note.title === "React Js";
// })

// console.log(index);


//USING A FUNCTION WITH FINDINDEX()

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();

    });

    return notes[index] //This is like array[index]
}

const ans = findNote(notes, "mongoDB");
console.log(ans);