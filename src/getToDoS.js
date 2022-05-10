function getToDoS() {
  let tasks = Object.keys(localStorage);
  let toDoS = [];
  tasks.forEach(key => {
    if (key.includes("To-Do ")) {
      toDoS.push(JSON.parse(localStorage.getItem(key)));
    }
  })
  return toDoS;
}

export {getToDoS}