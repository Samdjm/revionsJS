// 1- Types chaine de caractères / string:
// console.log("Une chaine de caractères avec \"double guillement\"");
console.log('Une chaine de caractères avec "double guillement"');
console.log("j'ai etudié javascript");

// Déclarer ou definir une variable
let textVar = "Du texte dans une variables appelée textVar";
const constText = "Du texte qui ne peut pas changer";

// Lire la varibiable
console.log(textVar);
console.log(constText);

// Modifier la valeur de la variable: affecter:
textVar = "Le texte a changé!";
//constText = "On ne peut pas modifier une constante.";

// Lire la variable aprés changement
console.log(textVar);

//Concatenation de chaines de caractères
console.log("Bonjour" + " " + "Comment allez vous?");

const bjr = "Bonjour";
console.log(bjr + " Comment allez vous?");
let cava = "Comment allez vous?";
console.log(bjr + " " + cava);

//Templates string / Littéraux de gabarits:
console.log(`Salut, ${cava} Exemple`);
document.write(`<h2>Salut, ${cava} Exemple</h2>`);

// 1- Les nombres / numbers: integer/entier, float/double/decimaux:
console.log("25");
console.log(25);

const add = 25 + 10;
console.log(add);

const sub = 25 - 10;
console.log(sub);

const mul = 25 * 10;
console.log(mul);

const div = 25 / 10;
console.log(div);

const pow = 25 ** 10;
console.log(pow);

const rest = 25 % 7;
console.log(rest);

//Arrondir un nombre
console.log(Math.floor(25 / 7));
console.log(Math.trunc(25 / 7));
//Avoir un nombre aléatoire entre 0 et 100
console.log(Math.floor(Math.random() * 101));

//Avoir un nombre aléatoire entre 50 et 125
//Logique Math.floor(Math.random() * (max - min + 1)) + min
document.write(Math.floor(Math.random() * (125 - 100 + 1)) + 100);

console.log(1 + "1");
console.log("1" + 1);
console.log("Le resultat = " + (25 + 10));
const a = 10;
const b = 20;
console.log(`Le resultat ${a + b}`);

//Exercice:
//Déclarer 3 variables: nom:string, prenom:string, age:number
//Afficher: Bonjour, (nom) (prenom). Vous avez (age)ans. Dans un an votre age sera: (age + 1)
const nom = "Djemai";
const prenom = "Samy";
const age = 28;

console.log(
  `Bonjour, ${nom} ${prenom}. Vous avez ${age}ans. Dans un an votre age sera: ${age + 1}`
);

//Type boolean:
const vrai = true;
const faux = false;

//Operateur logique ET - &&:
//true && true = true
//true && false = false
//false && true = false
//false && false = false

//Operateur logique OU - ||:
//true || true = true
//true || false = true
//false || true = true
//false || false = false

//Operateur logique XOR - (true && false) || (false && true):
//true xor true = false
//true xor false = true
//false xor true = true
//false xor false = false

const rien = null;
console.log(rien);

const indefini = undefined;
console.log(indefini);

//Les tableau - arrays:
let testList = ["Sam", rien, indefini, vrai, age, "Djemai"];
console.log(testList);
console.log("element postion 0: ", testList[0]);
console.log("element postion 4: ", testList[4]);
console.log("Dernier element:", testList[testList.length - 1]);

let prisList = [20, 22, 50, 1, 36, 10, 45];

let listFiltre = prisList
  .filter(function (element, index) {
    //Retourne un boolean: On garde l'éléement si true.
    return element % 2 === 0;
  })
  .map(function (element, index) {
    return element / 2;
  });
console.log("liste filtrée: ", listFiltre);

listFiltre.forEach(function (element, index, list) {
  console.log(list);
  listFiltre[index] = `<p>${element}</p>`;
});
console.log(listFiltre);
