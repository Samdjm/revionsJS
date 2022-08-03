console.log(this);

disBonjour();
disBonjour();

console.log("du code au milieu");

const disBonjourObj = disBonjour();

//Une fonction peut etre declarée après sont utilisation/execution
function disBonjour() {
  let bonjour = "bonjour";
  console.log(bonjour);
  bonjour = "bye";
}

//la variable bonjour n'est accessible que dans la fonction: scope local
// console.log(bonjour);

const disBonjourAlt = function () {
  let bonjour = "bonjour atl";
  console.log(bonjour);
  bonjour = "bye";
};
disBonjourAlt();

const disSalut = () => {
  let salut = "salut";
  console.log(salut);
};

disSalut();
disSalut();

console.log(typeof disBonjourAlt);

function dis(texte) {
  console.log(texte);
}

dis("Hello");
dis("Le texte qu'on veut");

function afficheAdd(a, b) {
  console.log(`Addition = ${a + b}`);
}
afficheAdd(5, 10);
afficheAdd(10, 20);

function add(a, b) {
  return a + b;
}
let add5Et10 = add(5, 10);
console.log(add5Et10);

console.log(add(10, 30));

//Exercice:
//1- Créer une fonction qui prend en paramètre un nombre et retourne une tableau contenant la table de multiplication: Signature: (a:number) => number[]

//entrées nombre: exemple 8
//tab =  []
// loop entre 0 et 10: i=0, 1..., 10
//ajouter a la fin du tableau i*8
//retourner tab

function tableMul(nombre) {
  let tab = [];
  for (let i = 0; i <= 10; i++) {
    // tab.push(i * nombre);
    //PHP: array_push(tab, i * 8)
    tab[i] = i * nombre;
  }
  return tab;
}
console.log(tableMul(2));

//2- Créer une fonction qui prend un paramètre un tableau, et qui affiche chaque élément de ce tableau:
//Signature (list:number[]) => void
// entrées: []: exemple [0,2,4, ..., 20]
//loop sur chaque element du tableau:
//Afficher dans la console la valeur de l'element

function afficheTableau(tab) {
  tab.forEach((element, index) => {
    console.log("id: " + index + " - element:" + element);
  });
}

//3- Utiliser la fonction avec: 12
const v = 3;
afficheTableau(tableMul(3));

//Call back:
function log() {
  console.log("test");
  return "test";
}
function afficheLog(callback) {
  callback();
}
afficheLog(log);

afficheLog(() => {
  console.log("anonyme");
});

//Call back avec paramètres:
function getUser(id, appelLafonction) {
  const usersDB = ["sam.djm93@gmail.com", "john@doe.com", "exemple@exemple.fr"];
  appelLafonction(usersDB[id]);
  return usersDB[id];
}

function getUsers(ids, callback) {
  const usersDB = ["sam.djm93@gmail.com", "john@doe.com", "exemple@exemple.fr"];
  let listUsers = [];
  ids.forEach((element, index) => {
    listUsers.push(usersDB[element]);
  });
  callback(listUsers);
  return listUsers;
}

getUsers([0, 2], (listUsers) => {
  console.log(listUsers);
});

const utilisateur = getUser(0, (user) => {
  console.log(user);
});
getUser(0, (user) => {
  document.writeln(user);
});
//Call back: mauvais exemple
function afficheElement(element, index) {
  document.writeln("id: " + index + " - element:" + element);
  document.writeln("<br/>");
}

function writeTableau(tab) {
  tab.forEach(afficheElement);
}

writeTableau(tableMul(5));

function createAndShowTab(tab, callback) {
  console.log("tab", tab);
  tab.forEach((element, index) => {
    callback(element, index);
  });
}

createAndShowTab(tableMul(10), afficheElement);

createAndShowTab(tableMul(7), (element, index) => {
  document.writeln(`<p>l'element: ${element}</p>`);
});

createAndShowTab(["Djemai", "Samy"], (element, index) => {
  document.writeln(`<h2 style='color:red;'>l'element: ${element}</h2>`);
});

//Parenthese tests:
function affiche(text) {
  if (isNaN(text)) {
    return `<p>${text}</p>`;
  } else {
    return `<span>${text}</span>`;
  }
}

// function testAffiche() {
//   if (affiche("hello") === "<p>hello</p>") {
//     console.log("test 1: affiche('hello') => <p>hello</p>: OK!");
//   } else {
//     console.log("test 1:affiche('hello') => <p>hello</p>: Raté");
//   }
//   if (affiche(5) === "<span>5</span>") {
//     console.log("test 2: affiche(0) => <span>0</span>: OK!");
//   } else {
//     console.log("test 2: affiche(0) => <span>0</span>: RATE!");
//   }
// }
// testAffiche();
//////////////
