import { exemple } from "./src/domSelection.js";

exemple();

//Selectionne un l'ement menu button et on ajoute un event listener
document.querySelector("svg").addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  if (!menu.style.left || menu.style.left === "-100%") {
    menu.style.left = "0";
  } else {
    menu.style.left = "-100%";
  }
});

document.querySelectorAll(".accordionButton").forEach((htmlElement) => {
  htmlElement.addEventListener("click", (e) => {
    console.dir(e.target);

    //const panel = e.target.nextElementSibling;
    const panel = e.target.parentNode.querySelector(".panel");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
