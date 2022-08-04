import { exemple } from "./src/domSelection.js";

exemple();

//Selectionne un l'ement menu button et on ajoute un event listener
document.querySelector("svg").addEventListener("click", (e) => {
  console.log(e);
  const menu = document.querySelector("#menu");
  if (!menu.style.left || menu.style.left === "-100%") {
    menu.style.left = "0";
  } else {
    menu.style.left = "-100%";
  }
});
