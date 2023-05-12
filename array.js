const band = [
    "bruce",
    "bruce2",
    "bruce3"
];

const band2 = new Array(band);
const band3 = new Array(
    "bruce",
    "bruce2",
    "bruce3"
)

const myEmptyArray = new Array(20);

for(let i = 0; i < band.length; i++){
    console.log(band[i]);
}
for(let i = 0; i < myEmptyArray.length; i++){
    console.log(myEmptyArray[i]);
}

// adding and removing items

band.push("Alan");
console.log(band);
band.pop();
console.log(band);

// mutating items
band[4] = "Tom Morello";
console.log(band);
band.pop();
console.log(band);

// mutating items
band[4] = "Tom Morello";
console.log(band);

const shoutyBand = band.map((el) => el.toUpperCase());
console.log(shoutyBand);
console.log(band);

console.log("using for of:");
for(let member of band){
    console.log(member);
}

// forEach loop
console.log("using forEach:");
band.forEach((el) => console.log(el.toLowerCase()));

console.log("using forEach with multiple args:");
band.forEach((el, index) => console.log(index + 1 + ": " + el.toLowerCase()));

band.length = 20;
console.log("using forEach with empty elements skipped:");
band.forEach((el, index) => console.log(index + 1 + ": " + el.toLowerCase()));

const horns = band.slice(9,11);
console.log(band);

const guitarists = band.slice(0, 5);
console.log(guitarists);
console.log(band)