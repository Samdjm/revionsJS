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

//Avoir un nombre aléatoire entre 0 et 100
console.log(Math.floor(Math.random() * 101));

//Avoir un nombre aléatoire entre 50 et 125
//Logique Math.floor(Math.random() * (max - min + 1)) + min
document.write(Math.floor(Math.random() * (125 - 50 + 1)) + 50);