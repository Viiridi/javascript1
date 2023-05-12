var a = 7;
var b = 3;
var truth = false;

console.log("\nArithmetic")
console.log(`a + b: ${a + b}`);
console.log(`a - b: ${a - b}`);
console.log(`a * b: ${a * b}`);
console.log(`a / b: ${a / b}`);
console.log(`a % b: ${a % b}`);

console.log("\nUnary")
console.log(`+a: ${+a}`);
console.log(`-b: ${-b}`);
console.log(`++a: ${++a}`);
console.log(`--b: ${--b}`);
console.log(`a++: ${a++}`);
console.log(`b--: ${b--}`);
console.log(`!truth: ${!truth}`);

console.log("\nRelational")
console.log(`a == b: ${a == b}`);
console.log(`a != b: ${a != b}`);
console.log(`a > b: ${a > b}`);
console.log(`b >= 4: ${b >= 4}`);
console.log(`a < b: ${a < b}`);
console.log(`a <= 7: ${a <= 7}`);

console.log("\nLogical")
console.log(`a > b && b < a: ${a > b && b < a}`);
console.log(`a == b && b < a: ${a == b && b < a}`);
console.log(`a < b && b > a: ${a < b && b > a}`);
console.log(`a > b || b < a: ${a > b || b < a}`);
console.log(`a == b || b < a: ${a == b || b < a}`);
console.log(`a < b || b > a: ${a < b || b > a}`);
console.log(`a > b ^ b < a: ${a > b ^ b < a}`);
console.log(`a > b ^ b > a: ${a > b ^ b > a}`);

a = 7;
b = 3;
truth = false;

console.log("\nOrder of precedence")
console.log(`a + b * 2: ${a + b * 2}`);
console.log(`(a + b) * 2: ${(a + b) * 2}`);
console.log(`15/b * a: ${15/b * a}`);
console.log(`14 % b + b: ${14 % b + b}`);
console.log(`--a * b++: ${--a * b++}`);
a = 7;
b = 3;
console.log(`a++ * 2 + --b: ${a++ * 2 + --b}`);
