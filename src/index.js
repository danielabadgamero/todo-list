import { updateHeader } from "./updateHeader";
import { updateContent } from "./updateContent";
import { writeToDo } from "./writeToDo";
import { writeProject } from "./writeProject";

const header = document.getElementById("title");
const content = document.getElementById("content");
const tabLinks = [...document.querySelectorAll("li")];
const buttons = [];
buttons.push(document.getElementById("newtodo"));
buttons.push(document.getElementById("newproject"));
const todoForm = document.getElementById("todo-form");
const projectForm = document.getElementById("project-form");
const todoConfirm = document.getElementById("confirm-todo");
const projectConfirm = document.getElementById("confirm-project");
const todoCancel = document.getElementById("cancel-todo");
const projectCancel = document.getElementById("cancel-project");

let currentTab = "todos";

updateHeader();
updateContent();

tabLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    currentTab = e.target.id;
    updateHeader();
    updateContent();
  })
})

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "newtodo") {
      todoForm.classList.remove("empty");
      todoConfirm.addEventListener("click", () => {
        if (document.getElementById("todo-name").value && document.getElementById("todo-description").value && document.getElementById("todo-date").value) {
          document.getElementById("todo-name").classList.remove("false");
          document.getElementById("todo-description").classList.remove("false");
          document.getElementById("todo-date").classList.remove("false");
          writeToDo(document.getElementById("todo-name").value, document.getElementById("todo-description").value, document.getElementById("todo-date").value);
          todoForm.classList.add("empty");
          document.getElementById("todo-name").value = "";
          document.getElementById("todo-description").value = "";
          document.getElementById("todo-date").value = "";
        } else {
          document.getElementById("todo-name").classList.add("false");
          document.getElementById("todo-description").classList.add("false");
          document.getElementById("todo-date").classList.add("false");
        }
        updateContent();
      })
      todoCancel.addEventListener("click", () => {
        document.getElementById("todo-name").value = "";
        document.getElementById("todo-description").value = "";
        document.getElementById("todo-date").value = "";
        todoForm.classList.add("empty");
      })
    } else {
      projectForm.classList.remove("empty");
      projectConfirm.addEventListener("click", () => {
        if (document.getElementById("project-name").value && document.getElementById("project-description").value && document.getElementById("project-date").value) {
          document.getElementById("project-name").classList.remove("false");
          document.getElementById("project-description").classList.remove("false");
          document.getElementById("project-date").classList.remove("false");
          writeProject(document.getElementById("project-name").value, document.getElementById("project-description").value, document.getElementById("project-date").value);
          projectForm.classList.add("empty");
          document.getElementById("project-name").value = "";
          document.getElementById("project-description").value = "";
          document.getElementById("project-date").value = "";
        } else {
          document.getElementById("project-name").classList.add("false");
          document.getElementById("project-description").classList.add("false");
          document.getElementById("project-date").classList.add("false");
        }
        updateContent();
      })
      projectCancel.addEventListener("click", () => {
        document.getElementById("project-name").value = "";
        document.getElementById("project-description").value = "";
        document.getElementById("project-date").value = "";
        projectForm.classList.add("empty");
      })
    }
  })
})

export {header, currentTab, content}