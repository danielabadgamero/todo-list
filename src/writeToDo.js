function writeToDo(name, description, date) {
  let task = {
    name: name,
    description: description,
    date: date,
    id: localStorage.length,
  }
  localStorage.setItem("To-Do " + name, JSON.stringify(task));
}

export {writeToDo}