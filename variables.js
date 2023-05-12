// A variable is a reserved marker in memory
// that represents values and/or expressions

var width; // decleration, reserves memory for a variable in the future
// no initial value, no itial types, JS has special value for this - undefined
// NB Python this is NOT allowed



width = 42.5;
console.log(width);
console.log(typeof width);
console.log(Boolean(width));
console.log(Boolean(1))

let height;

height = 20.2;
height = 20.5;
console.log(height);

const depth = 500;
console.log(depth);

const dimensions = {
    width: 42.5,
    height: 20.5,
    depth: 500
};

console.log(dimensions)

dimensions.depth = 600;
console.table(dimensions)

const numbers = [1, 2, 3];
numbers.push(4);
console.table(numbers);