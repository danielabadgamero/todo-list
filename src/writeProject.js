function writeProject(name, description, date) {
  let task = {
    name: name,
    description: description,
    date: date,
    id: localStorage.length,
  }
  localStorage.setItem("Project " + name, JSON.stringify(task));
}

export {writeProject}