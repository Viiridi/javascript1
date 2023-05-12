const trainees = [
    "jeef",
    "bill",
    "goat"
]

let allTrainees = "";

trainees.forEach((member) => allTrainees += member + '\n');

console.log(allTrainees);

trainees.push("Me");
console.log(trainees);

trainees.sort();
console.log(trainees);

trainees.splice(trainees.indexOf('Me'), 1);
console.log(trainees);

allTrainees = "";
trainees.forEach((member) => allTrainees += member + ', ');
console.log(allTrainees);

