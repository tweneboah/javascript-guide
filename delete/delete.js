const todos = [
  {
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

//Delete todo
//How to go about it.
// We need to use splice and splice require index therefore am using findIndex()

const deleteTodo = function(todos, todosText) {
  const itemDeleteIndex = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todosText.toLowerCase();
  });
  if (itemDeleteIndex > -1) {
    todos.splice(itemDeleteIndex, 1);
  }
};

deleteTodo(todos, "Learn Chines");
console.log(todos);
