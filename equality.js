// traditionally, JS has two forms of equality
// === is said to perform a comparison based on value and type
// == is said to perform a comparison based on value only
// * this is an over simplification
// * all equals comparisons are in fact triple ===
// * but use of the double == operator allows coercion of one or more operands
// * BEFORE a === comparison is made

// double
console.log(3 == "3") // true

// triple
console.log(3 === "3") //false

//  so what of other values?

function multiplyTwoNumbers(num1, num2){
    return num1 * num2; 
}

console.log(multiplyTwoNumbers(2, 2)); //4
console.log(multiplyTwoNumbers(2, "2")); //4 2nd operand is coerced
console.log(multiplyTwoNumbers(2, "2mo.")); // Not a number - a number was expected but non provided


console.log(NaN == NaN); //false
console.log(NaN == NaN); // false - NaN never equals itself

//  3. object.is
console.log("using Object.is()");
console.log(Object.is(NaN, NaN)); //true - edge case corrected

//  NaN behaves like an object even though its a number
console.log(typeof NaN); // number
// no two objects are ever equal by default

//  2nd edge case corrected:
console.log(+0 === -0); // true
console.log(+0 == -0); // true
console.log(Object.is(+0, -0)); //false


// COPYING OBJECTS

const nestedObj = {
    a: 1,
    nums: [1, 2, 3]
}

console.log("nested object copying");
// copying reference
const nestedObjCopyByRef = nestedObj;
//  a change in either ref
//  affects the object
nestedObjCopyByRef.a = 2;
console.log(nestedObj); // original changed
//either ref changes original

console.log("using spread");
//  2. using spread operator ...
const nestedObjCopy = {...nestedObj} // new brackets, so new object created
nestedObjCopy.a = 3;
console.log(nestedObj); //original

nestedObjCopy.nums.push(4);
console.log(nestedObj); // changed

console.log("using spread recursively");
// 3. using spread recursively for deep copying
const nestedObjDeepCopy = {...nestedObj, nums: [...nestedObj.nums]}; // new array brackets break dependency on old array
nestedObjDeepCopy.nums.push(5);
console.log(nestedObj); // original unaffected

//  deep copying is beyond the scope of this course,
//  but many ways have been tried over the years in JS and all have drawbacks
//  the above syntax is barely readable at one level of recursion let alone more
//  object properties can be made non-writable but this is also very fiddly
//  we can serialise objects into JSON as a string then deserialise the string again after copy made
//  this method cannot handle some datatypes
//  the far and away best method of deep copying is to use a library
//  such as Immer, rfdc (really fast deep clone)