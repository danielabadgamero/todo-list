function getProjects() {
  let tasks = Object.keys(localStorage);
  let projects = [];
  tasks.forEach(key => {
    if (key.includes("Project ")) {
      projects.push(JSON.parse(localStorage.getItem(key)));
    }
  })
  return projects;
}

export {getProjects}