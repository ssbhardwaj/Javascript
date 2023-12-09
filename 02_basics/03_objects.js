/*
There are two ways two declear object
    i). literal         ii). constructor

Jab constructor se object banate hain tho singleton object banta hain.(Singleton matlab ye apne tarha ka ek hi object hain).
jab hm log dusre tarha se banate hain tho uske multiple instances bn jate hain.
Constructer methord to create  -> Object.create
*/

const mySym = Symbol("key1");

// objects literals
const JsUser = {
    [mySym]: "mykey1",
    name: "Suman Shekhar Bhardwaj",
    age: 21,
    location: "Jamshedpur",
    email: "suman@microsoft.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym])


JsUser.email = "sumanshekharbhardwaj@microsoft.com"
// Object.freeze(JsUser);
// JsUser.email = "suman@microsoft.com"
// console.log(JsUser)             // object freezed -> no change applicable to object


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())