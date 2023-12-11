// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'flase', " ", [], {}, function() {}

// To check empty array
const array = []

if(array.length === 0){
    console.log("Array is empty")
}

// To check empty object

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}


// ********************* Nullish Coalescing Operator (??) : null undefined // Fall back opstion ***********************

let var1;
// var1 = 5 ?? 10
// var1 = null ?? 10
// var1 = undefined ?? 53
var1 = null ?? 10 ?? 2

console.log(var1)

// ************************************ Terniary Operator ******************************************

// (condition) ? true : false
const iceTeaPrice = 99
iceTeaPrice < 100 ? console.log("Prince is less than 100") : console.log("Price is more than 100")