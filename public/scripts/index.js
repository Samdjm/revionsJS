import { exemple } from "./src/domSelection.js";
import { executeAjaxExemple } from "./src/ajax.js";
//a executer ensemble: car exemple() Crée un h2, et executeAjaxExemple() l'utilise
// exemple();
// executeAjaxExemple();

fetch("http://localhost:5500/posts.json")
  //Callback qui s'execute quand on a la réponse
  .then(async (reponse) => {
    console.log(reponse);
    try {
      //Pour transformer le json en objet
      const posts = await reponse.json();
      console.log(posts);
    } catch (err) {
      console.log("C'est pas du JSON");
    }
  })
  //Callback qui s'execute quand il y'a une erreur
  .catch((err) => {
    console.log("Hello", err);
  });

fetch("https://thronesapi.com/api/v2/Characters").then(async (reponse) => {
  const data = await reponse.json();
  const charListElements = data.map((personnage) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${personnage.lastName} ${personnage.firstName}</h2>
      <img src="${personnage.imageUrl}" >
      <h3>${personnage.family}</h3>
    `;
    return div;
  });
  document.querySelector("main").append(...charListElements);
});
