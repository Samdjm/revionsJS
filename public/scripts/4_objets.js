//Les objets c'est des contenant: attributs (variables), method:(fonctions)
console.log(console);
const cat1 = {
  name: "Felix",
  age: 5,
  salut: function () {
    console.log(`Salut je suis ${this.name}. J'ai ${this.age}ans.`);
  },
};
console.log(typeof cat1);
console.log(cat1);

console.log("age de Felix", cat1.age);
cat1.salut();

const cat2 = {
  name: "Sam",
  age: 3,
  salut: function () {
    console.log(`Salut je suis ${this.name}. J'ai ${this.age}ans.`);
  },
  test: () => {
    console.log(this);
  },
};
const cat3 = {
  name: "John",
  age: 2,
  salut: function () {
    console.log(`Salut je suis ${this.name}. J'ai ${this.age}ans.`);
  },
};
cat2.salut();
const catList = [cat1, cat2];
catList.forEach((cat) => {
  cat.salut();
});
//////////////
class Dog {
  constructor(nom, age) {
    this.name = nom;
    this.age = age;
    this.salut = function () {
      console.log(this);
      console.log(`Salut je suis ${this.name}. J'ai ${this.age}ans.`);
    };
    this.user = {
      salut: () => {
        console.log("Je suis le proprio de " + this.name);
      },
    };
  }

  bonjour() {
    console.log(`Bonjour je suis ${this.name}.`);
  }
}

const dog1 = new Dog("Bob", 7);
console.log(dog1);
dog1.salut();
dog1.bonjour();
dog1.user.salut();

//Exercice:
//Créer une class User:
//paramètres construtor: username, email.
//Initialiser: email et username, cours = string[]
//Method:
// getUsername, setUsername, getEmail, setEmail,
// getCours, addCours(position, cours), removeCours(position)

class User {
  #email;
  #username;
  #cours;
  constructor(username, email) {
    this.#email = email;
    this.#username = username;
    this.#cours = [];
    // this.getUsername = function () {
    //   return this.username;
    // };
  }

  getUsername() {
    return this.#username;
  }
  getEmail() {
    return this.#email;
  }
  getCours() {
    return this.#cours;
  }

  setUsername(newUsername) {
    this.#username = newUsername;
    return this;
  }
  setEmail(newEmail) {
    this.#email = newEmail;
    return this;
  }

  addCours(cours, position = -1) {
    if (position < 0 || position >= this.#cours.length) {
      this.#cours.push(cours);
      return this;
    }

    this.#cours.splice(position, 0, cours);
    return this;
  }
}

const user1 = new User("Sam", "sam@sam.com ");

// console.log(user1.#email); lecture d'un argument privé
console.log(user1);
console.log(user1.getUsername());

// user1.setEmail("test")
// user1.setUsername("test@test.com")
// console.log(user1);

console.log(
  user1
    .setEmail("Djemai")
    .setUsername("Djemai@djemai.com")
    .addCours("PHP")
    .addCours("Javascript", 0)
    .addCours("React", 12)
    .addCours("Nextjs")
);

let tab = new Array(0);

class MyArray extends Array {
  constructor(taille) {
    super(taille);
  }
}

const myTab = new MyArray(0);
myTab.push("test");
console.log(myTab);

//Destructuration d'objets:
const dogName = dog1.name;
const dogAge = dog1.age;

console.log(dogName);
console.log(dogAge);

const { name: bobName, age } = dog1;
console.log(bobName);
console.log(age);

function afficheAnimal({ name }) {
  console.log(name);
}

afficheAnimal({ name: "sam" });

//Destructuration de tableau:
let listText = ["Sam", "Sam@sam.com", 28, { test: "test" }];
let userName1 = listText[0];
let [userName, , userAge, objet] = listText;
console.log(userName);
objet.test = "Attributs de l'objet change";
console.log(listText);

//Fonctionnel:
// Fonction d'ordre sup
function createIncrement(start) {
  let i = start;
  return function () {
    i++;
    return i;
  };
}

const increment = createIncrement(5);
console.log(increment);
console.log(increment());
console.log(increment());
//i = 36;
console.log(increment());

///////
const React = (function () {
  let i = 0;
  return {
    add: (number) => {
      i += number;
      return i;
    },
    sub: (number) => {
      i -= number;
      return i;
    },
  };
})();
console.log("------------------------");
console.log(React.add(5));
console.log(React.sub(2));

function createUser(username, email) {
  function getEmail() {
    return email;
  }
  function getUsername() {
    return username;
  }
  function setEmail(newValue) {
    email = newValue;
  }
  function setUsername(newValue) {
    username = newValue;
  }

  function isEmailCorrect() {
    return email.includes("@");
  }
  function isUsernameCorrect() {
    return username.length < 10 && username !== "";
  }

  function showErrorEmail() {
    console.log("test", isEmailCorrect());
    return isEmailCorrect() ? "" : "Votre email n'est pas bon!";
  }
  function showUsernameError() {
    return isUsernameCorrect() ? "" : "username doit etre inferieure a 10!";
  }
  function saveToDb() {
    return console.log("Requete vers backend envoyant email et username");
  }

  return {
    getEmail,
    getUsername,
    setEmail,
    setUsername,
    isEmailCorrect,
    isUsernameCorrect,
    showErrorEmail,
    showUsernameError,
    saveToDb,
  };
}
const user2 = createUser("exemple", "Exemple@exemple.com");

// console.log(user2.getEmail());
// user2.setEmail("laaaA@lalala");
// console.log(user2.getEmail());

//avant d'envoier la donner la backend on teste les entré
if (user2.isEmailCorrect() && user2.isUsernameCorrect()) {
  user2.saveToDb();
} else {
  console.log(user2.showErrorEmail());
  console.log(user2.showUsernameError());
}
