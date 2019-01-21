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

const filteredNotes = notes.filter(function (note, index) {
  const isTitleMatch = note.title.toLowerCase().includes("No");
  const isBodyMatch = note.body.toLowerCase().includes("No");
  return isTitleMatch || isBodyMatch;
});

console.log(filteredNotes);