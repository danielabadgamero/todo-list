import {header, currentTab} from "./index"

function updateHeader() {
  switch (currentTab) {
    case "todos":
      header.textContent = "To-Do's";
      break;
    case "projects":
      header.textContent = "Projects";
      break;
    case "calendar":
      header.textContent = "Calendar";
      break;
  }
}

export {updateHeader}