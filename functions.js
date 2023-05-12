// console.log("Hello");
// console.log("World");
// console.log("How are you today?");

// Essential functions
// 1. functional decleration
// no input, no output

function greet1(){
    console.log("Hello");
    console.log("World");
    console.log("How are you today?");
}
greet1();
// no output, as there is no return statement
// as we have only print statements we may not persist the result of the function
var myGreet1 = greet1();
console.log(myGreet1);
console.log(greet1());

// 2. input, no output
function greet2(name){
    console.log("Hello");
    console.log(name);
    console.log("How are you today?");
}

greet2("Alan");

// return statements mut be the last statement in the code block
// having said that, there may be multiple return statements in a single app

// 3. input and output
function greet3(name) {
    return `
Hello 
${name} 
How are you today?`
}

console.log(greet3('joe'));
var iestyn = greet3("Iestyn");
console.log(iestyn); 

// 4. output, no input
function greet4() {
    return `
Hello 
world
How are you today?`;
}

greet4();
console.log(greet4());

// Extra Functions
// 5. anonymous function expression
// function expressions are loaded into memory where they occur
// they may be used to assign functions to the prototype (see objects chapter)
// they may be refactpred amd simplified into arrow functions
const noName = function(){
    return 'A girl has no name';
};
console.log(noName());

// 6. ARROW FUNCTIONS - abbreviated form of anonymous function expression
// stage 1 - take an anon func expression
const noName1 = function(){
    return 'A girl has no name';
};
// stage 2 - remove function keyword, add arrow after parens
const noName2 = () => {
    return 'A girl has no name';
};
// stage 3 - remove return statement and braces IF there is only one statement in body
const noName3 = () => 'A girl has no name';
// stage 4 - optionally remove paramater brackets IF there is only one param
const noName4 = (name) => 'A girl has the name' + name;
