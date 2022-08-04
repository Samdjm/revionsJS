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
