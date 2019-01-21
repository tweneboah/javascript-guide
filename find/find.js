//SEARCHING THROUGH ARRAY

//find()

//This does not not return the position or the index but rather it returns the what we are searching for.

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



const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();

    });
}

const ans = findNote(notes, "mongoDB");
console.log(ans);