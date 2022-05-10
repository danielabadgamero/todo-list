import { getProjects } from "./getProjects";
import { getToDoS } from "./getToDoS";
import {content} from "./index"

const deleteButtons = []

function createCard(type, index) {
  const cardContainer = document.createElement("div");
  const name = document.createElement("p");
  const description = document.createElement("p");
  const date = document.createElement("p");

  if (type === "todo") {
    deleteButtons.push(document.createElement("button"));
    deleteButtons[index].setAttribute("id", "delete-button-" + index);
    deleteButtons[index].innerHTML = "Delete";
    deleteButtons[index].style.margin = "auto";
    cardContainer.classList.add("card");
    let cardName = getToDoS()[index].name
    name.innerHTML = `<strong>Name: </strong>${cardName}`;
    description.innerHTML = `<strong>Description: </strong>${getToDoS()[index].description}`;
    date.innerHTML = `<strong>Due: </strong>${getToDoS()[index].date}`;
    cardContainer.appendChild(name);
    cardContainer.appendChild(description);
    cardContainer.appendChild(date);
    cardContainer.appendChild(deleteButtons[index]);
    content.appendChild(cardContainer);
    deleteButtons[index].addEventListener("click", (e) => {
      localStorage.removeItem(`To-Do ${e.target.parentNode.querySelector("p").innerHTML.substring(23)}`);
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    })
  } else if (type === "project") {
      deleteButtons.push(document.createElement("button"));
      deleteButtons[index].setAttribute("id", "delete-project-" + index);
      deleteButtons[index].innerHTML = "Delete";
      deleteButtons[index].style.margin = "auto";
      cardContainer.classList.add("card");
      name.innerHTML = `<strong>Name: </strong>${getProjects()[index].name}`;
      description.innerHTML = `<strong>Description: </strong>${getProjects()[index].description}`;
      date.innerHTML = `<strong>Due: </strong>${getProjects()[index].date}`;
      cardContainer.appendChild(name);
      cardContainer.appendChild(description);
      cardContainer.appendChild(date);
      cardContainer.appendChild(deleteButtons[index]);
      content.appendChild(cardContainer);
      deleteButtons[index].addEventListener("click", (e) => {
        localStorage.removeItem(`Project ${e.target.parentNode.querySelector("p").innerHTML.substring(23)}`);
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      })
  }
}

export {createCard}