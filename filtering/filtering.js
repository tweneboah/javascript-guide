//SEARCHING

//filter()

//This is very flexible for searching because it returns all our searching criteria

//This returns a new array which contains our searching criteria

//It returns a boolean ie. when it's true it create a new array with our search item.



// const todos = [{
//         text: "Teach",
//         completed: false
//     },
//     {
//         text: "Go abroad",
//         completed: true
//     },
//     {
//         text: "Learn React",
//         completed: false
//     },
//     {
//         text: "Birthdat Party",
//         completed: false
//     },
//     {
//         text: "Learn Chines",
//         completed: false
//     }
// ];


// //DISPLAYING ONLY UNCOMPLETED TASK

// const incompletedTodo = function (todo) {
//     const filteredNotes = todos.filter(function (todo) {
//         return !todo.completed;
//     });

//     return filteredNotes;
// }

// const foundedIncompletedTodos = incompletedTodo(todos)
// console.log(foundedIncompletedTodos);





//NOTES APP================

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

//Filtering

const findNotes = function (notes, qeury) {
    const filterNote = notes.filter(function (note, index) {
        const isTtitleMatch = note.title.toLowerCase().includes(qeury.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(qeury.toLowerCase());
        return isBodyMatch || isTtitleMatch
    })
    return filterNote;
}

const filteredNotes = findNotes(notes, "node");
console.log(filteredNotes);