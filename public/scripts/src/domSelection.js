export const exemple = () => {
  console.dir(document);
  //Selectionner avec balise
  const listLi = document.getElementsByTagName("li");

  console.log(listLi);
  console.dir(listLi[0]);

  const listA = listLi[0].getElementsByTagName("a");
  console.log(listA);

  //Selectionner avec classes
  const listClassNav = document.getElementsByClassName("navBar");
  console.log(listClassNav);

  //Selectionner avec id
  const menu = document.getElementById("menu");
  console.log(menu);

  //QuerySelector et querySelectorAll:
  const querylistLi = document.querySelectorAll("li");
  console.log(querylistLi);

  const queryNavBar = document.querySelector(".navBar");
  console.log(queryNavBar);

  const aDansLi = document.querySelectorAll("li > a");
  console.log(aDansLi);

  //Modifier Les elements:
  let nav = document.querySelector(".navBar");
  console.log(nav.textContent);
  console.log(nav.innerHTML);
  console.log(nav.outerHTML);

  let h1 = document.querySelector("h1");
  h1.innerHTML = "Fin revision Javascript";

  let root = document.querySelector("#root");
  let user = "Sam";
  root.innerHTML = `
            <h2>Hello ${user} !</h2>
            <button>Click me!</button>
            `;
  console.log(root.style);
  root.style.backgroundColor = "gray";
  root.style.padding = "20px";
  root.style.borderBottomWidth = "2px";
  root.style.borderBottomColor = "red";
  root.style.borderBottomStyle = "solid";

  //Créer des elements:
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>Hello  !</h2>
    <p>World!</p>
    `;

  //Ajouter l'element au parent
  root.append(div);
  console.log(div);
  div.style.backgroundColor = "rgb( 220, 220, 220)";
};
