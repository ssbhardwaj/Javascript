// JavaScript is a dynamically typed language, 
// which means that data types of variables are determined 
// by the value they hold at runtime and can change throughout 
// the program as we assign different values to them.


// There are two types of datatypes
// i).  Primitive data types
// ii). Non-Primitive data types (Reference type)

// i). Primitive data types
        // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
        // Symbol --> Kisi v value ko unique banane k liye use hota hain..

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);      // result => false.

// ii).Non-Primitive data types
        // Array, Objects, Functions -> Result in typeof -> function. Bs function ka object function hota hain....

        // Array
            const heros = ["shaktiman", "naagraj", "doga"];
        // Object  ->  curly brackets k andar m jo v hain vo object.
            let myObj = {
                name: "Suman",
                age: 22,
            }
        // Function  ->  Function can be stored in variable as well
            const myFunction = function(){
                console.log("Hello World");
            }

            console.log(typeof myFunction);     // "function"
