import {content, currentTab} from "./index"
import {getToDoS} from "./getToDoS"
import {createCard} from "./createCard"
import { getProjects } from "./getProjects";

function updateContent() {
  content.innerHTML = "";
  switch (currentTab) {
    case "todos":
      if (getToDoS() !== "undefined") {
        for (let i = 0; i < getToDoS().length; i++) {
          createCard("todo", i);
        }
      }
      break;
    case "projects":
      if (getProjects() !== "undefined") {
        for (let i = 0; i < getProjects().length; i++) {
          createCard("project", i);
        }
      }
  }
}

export {updateContent}