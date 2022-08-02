// Les bloques de structure:
//Les conditions:
// if et/ou else
const a = 2;
if (a < 5) {
  console.log("a est inf a 5");
} else {
  console.log("a est sup a 5");
}

//Simplifie le if et le else: opérateur ternaire:
// (condtion) ? si true : si false
console.log(a < 5 ? "a sup 5" : "a est sup a 5");
//On peut enchainer les ternaires
console.log(a < 5 ? (a < 2 ? "a inf 2" : "a sup 2") : "a est sup a 5");

//switch case:
let jour = "0";
switch (jour) {
  case "0":
  case "1":
    console.log("C'est le week end");
    break;
  case "2":
    console.log("Lundi");
    break;
  case "3":
    console.log("Mardi");
    break;
  default:
    console.log("Un autre jour");
    break;
}
//Exercice:
// Declarer 3 variables numbers: num1, num2, num3
// Utiliser les conditions pour:
// Afficher: tous les nombres sont identiques.
// Afficher: 2 des nombres sont identique.
// Afficher: les nombres ne sont pas identiques.

// "" == false -> true
// 0 == false -> true
// [] == false -> true
// null == false -> true
// undefined == false -> true: a verifier

// "q" == true -> true
// 5 == true -> true
// ["test"] == true -> true
// undefined == true -> true : a verifier

let num1 = 1,
  num2 = 2,
  num3 = 2;

if (num1 === num2 && num1 === num3) {
  console.log("Tous les nombres sont identiques.");
} else {
  if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("2 des nombres sont identique.");
  } else {
    console.log("les nombres ne sont pas identiques.");
  }
}
