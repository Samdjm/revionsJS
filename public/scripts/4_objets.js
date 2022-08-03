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
      console.log(`Salut je suis ${this.name}. J'ai ${this.age}ans.`);
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
