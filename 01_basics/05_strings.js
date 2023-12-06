const name = "Suman"
const repoCount = 10

// console.log(name + repoCount + " Value");     => Old way not prefered

// String interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

// string decleration
const gameName = new String('SSBHARDWAJ');

console.log(gameName[0]);
console.log(gameName.__proto__);    // gives the string object consisting of various functions..
console.log(gameName.length)
console.log(gameName.endsWith('J'));
console.log(gameName.toLowerCase());

//Refer various functions of string ...

// Example - split => gives every substring splitted by splitter in form of array
const str = "Suman-Shekhar-Bhardwaj-BIT-Mesra-Ranchi"
console.log(str.split('-'));