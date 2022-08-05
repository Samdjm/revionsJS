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

//AJAX old:
//Etape 1 : créet l'objet request
let request = new XMLHttpRequest();

//Initialilser: On decide de la methode et de l'url
request.open("GET", "http://localhost:5500/data.json");

//Ajoute un callback qui s'execute a chaque changement d'état
request.onreadystatechange = function () {
  console.log("state", this.readyState);

  console.log("status", this.status);

  //Si la réponse est terminée et que la reponse est correcte.
  if (this.readyState === 4 && this.status === 200) {
    const { user } = JSON.parse(this.responseText);

    const root = document.querySelector("#root");

    root.querySelector("h2").innerHTML = user.username;

    user.couts.forEach((cours) => {
      const coursElement = document.createElement("p");
      coursElement.innerHTML = cours;
      root.appendChild(coursElement);
    });
  }
};
//Envoyer la requete
request.send();

//Exercice 1:

//Utiliser AJAX pour faire une requete vers posts.json

let req = new XMLHttpRequest();

req.open("GET", "http://localhost:5500/posts.json");

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const { posts } = JSON.parse(this.responseText);
    console.log(posts);
    //Afficher les posts sous forme d'accordion (append to main)
    const main = document.querySelector("main");

    const postsElements = posts.map((post) => {
      const div = document.createElement("div");
      div.classList.add("accordion");
      div.innerHTML = `
        <button class="accordionButton">${post.title}</button>
        <div class"panel">
          <p>
            ${post.content}
          </p>
        </div>
      `;
      return div;
    });
    console.log(postsElements);
    main.append(...postsElements);
    // main.append(posts[0], posts[1], posts[2]);
  }
};

req.send();

const names = ["Sam", "John"];

const namesParagraph = names.map((name, index) => {
  return `<p>${name}</p>`;
});
console.log(names);
console.log(namesParagraph);

function map(tab, callback) {
  let newTab = [];
  for (let i = 0; i < tab.length; i++) {
    let changedElement = callback(tab[i], i);
    newTab[i] = changedElement;
  }
  return newTab;
}

const changesNames = map(names, (element, index) => {
  return `<p>${element}</p>`;
});
console.log(changesNames);
