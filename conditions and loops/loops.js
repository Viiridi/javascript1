const band = [
    "Patti",
    "Stevie",
    "Nils",
    "Tom",
    "Max",
    "Gary",
    "Danny",
    "Soozie",
    "Clarence",
    "Jake"
];
console.log(band.length); //10

//1. conventional for loop
for (let i = 0; i < band.length; i++){
    console.log(band[i]);
}

//2. for of loop
for (let member of band){
    console.log(member);
}

// 2A. for in loop (really deisgned for objects
// works because an array is a type of object
// concerned with keys not value
for (let index in band){
    // console.log(index)
    console.log(`${Number(index) + 1}: ${band[index]}`);
}

//break and continue (used with a conventional for loop as example)
console.log("using break:");
for (let i = 0; i < band.length; i++){
    if(band[i] === "Max"){
        continue;
    }
    console.log(band[i]);
}

// 4. while loop
// like a conventional for, with statements not on one line
// suits use cases where stop condition is NOT a counter
// though may be used as a counter too
let counter = 0;
while(counter < band.length){
    console.log(band[counter]);
    counter++;//MUST increment/decrement counter inside body of the while loop
}

// 4A, do-while loop

// runs once and only then checks condition
let counter2 = 0;
while(counter2 < band.length){
    console.log(band[counter2]);
    counter2++;//MUST increment/decrement counter inside body of the while loop
}