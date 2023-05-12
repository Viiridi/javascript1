const person1 = { name: "", age: 0};

const alan = { name: "Alan lavender", age: 56 };
const bruce = { name: "Bruce Springsteen", age: 56 };
const nils = { fname: "Nils", lname: "Lofgren" };

const bandOfLiterals = [alan,bruce, nils];

for (let member of bandOfLiterals) {
    console.log(`${member.name} is ${member.age}`);
}

//  Functions constructors make objects with the same props (not necessarily same values)
function Musician(name, age) {
    this.name = name;
    this.age = age;
}

// const Musician = (name, age) = >
//      this.name = name;
//      this.age = age;
// }
// it's a declaration: loaded into memory at the start
// this function constructor does not work alone
// its is called by the new keyword
// new keyword is like new set of {} - a new object is formed

const alanF = new Musician("Alan", 56);
const bruceF = new Musician("Bruce", 73);
const nilsF = new Musician("Nils", 69);

console.log(alanF instanceof Musician); // true

// muisican is a user-defined type
// we are making our own datatypes

// what about functions?
// console.log(alanF.hello()); //type error: alanF.hello is not a function

Musician.prototype.hello = function() {
    return `${this.name} says hello!`;
};

// an expression: loaded into memory when it occurs
// this adds a function to prototype prop of a function constructor object
// this function is available to EVERY object created, past, present, and future!

console.log(alanF.hello()); //TypeError: alanF.hello is not a function

// although prototype manipulation is the core underlying structure of objects in JS,
// Since ES6 (2015) classes have been introduced and are far more popular
// let's turn our Musician function constructor and prototype method into an ES6 class

class MusicianClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    hello = function() {
        return `${this.name} says hello`;
    }
    howAreYou = () => {
        return `${this.name} says how are you?`;
    } //arrow function has no context of this
    //but goes and looks one scope level up
    //which in this case is the class itself - this works!
} // end class

// classes are popular because they wrap variables and functions together
// even if you use a class you mat STILL augment its methods by the prototype
const alanC = new MusicianClass("Alan", 56);
const bruceC = new MusicianClass("Bruce", 73);
const nilsC = new MusicianClass("Nils", 44);