const user = {
    username: "Suman",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)           // this -> current context k bare m batata hain. console karne s current obj ko show karega.
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)               // node environment m this ek empty obj ko point karta hain. Tho console karne s {} karega.
// // browser k andar this ko console karege tho window obj ko point karta hain.

// function chai() {
//     console.log(this)           // Kch kch tho bhout sara cheez aa jata hain.
// }

// const chai = function () {
//     const username = "Suman"
//     console.log(this.username)           // undefined
// }

// const chai = () => {
//     const username = "Suman"
//     console.log(this.username)           // undefined
//     console.log(this)                   // {}
// }

// chai()

// ***************************** Arrow Function ***************************************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// // Implicit return -> jab hmlog ko pata hain ki ek line ka hi fun hain aur pehla line ka result ko return karna hain
// const addTwo = (num1, num2) => (num1 + num2)        // or,  num1 + num2

// Return an objct => () brackets m enclose karna hi hoga
const addTwo = (num1, num2) => ({username: "Suman", age: 21, company: "Microsoft"})

console.log(addTwo(3, 4))