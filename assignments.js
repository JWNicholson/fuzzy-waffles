//Coding Challenge 1
const massMark = 78;
const massJohn = 95;

const heightMark = 1.69;
const heightJohn = 1.88;

let markHigherBMI
let johnHigherBMI

function calcBMI(mass, height) {
  BMI = mass / height ** 2;
  return BMI
}

const markBMI = calcBMI(massMark, heightMark);
console.log(markBMI.toFixed(2));

const johnBMI = calcBMI(massJohn, heightJohn);
console.log(johnBMI.toFixed(2));

{ markBMI > johnBMI ? markHigherBMI = true : johnHigherBMI = true }

console.log(`Mark's BMI is ${markBMI.toFixed(2)}, John's BMI is ${johnBMI.toFixed(2)}.`);