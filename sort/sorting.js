const notes = [{
        title: "MongoDB",
        body: "Learn MongoDB"
    },
    {
        title: "React Js",
        body: "Learn React JS"
    },
    {
        title: "Blowing",
        body: "Learn React JS"
    },
    {
        title: "Node JS",
        body: "Learn Node JS"
    }
]


//sorting

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes);
console.log(notes);



//TODO 

//Sort by incompleted

const todos = [{
        text: "Teach",
        completed: false
    },
    {
        text: "Go abroad",
        completed: true
    },
    {
        text: "Learn React",
        completed: false
    },
    {
        text: "Birthdat Party",
        completed: false
    },
    {
        text: "Learn Chines",
        completed: false
    }
];

const sortTodos = function (todo) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)