let score = "33"
let scoreCheck = "33abc"
let nullNumber = null
let undefinedNumber = undefined


// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
let valueInNumberCheck = Number(scoreCheck)
let nullValue = Number(nullNumber)
let undefinedValue = Number(undefinedNumber)

// console.log(typeof valueInNumber);
// console.log(valueInNumberCheck);            //  --> NaN
// console.log(nullValue);                    //  --> 0
// console.log(undefinedValue);                //  --> NaN


// "33"  =>  33
// "33abc" => NaN
// true => 1;  false => 0;

// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Suman" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber)
console.log(typeof(stringNumber))