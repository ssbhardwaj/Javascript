// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const val of arr) {
    // console.log(val)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map)

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`)
}


// const myObject = {
//     "game1" : "NFS",
//     "game2" : "Spiderman"
// }

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value)
// }

// foro loop s map iterable hain lakin object iterable nahi hain...

// ********************************** for in loop **************************************

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for printing keys
for (const key in myObject) {
    // console.log(key)
}
// for printing values of key
for (const key in myObject) {
    // console.log(myObject[key])
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key])
}

// for in loop s map pr iteration nahi kiya ja sakta hain.




// *********************************** for each loop ******************************************

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val)
// } )

// coding.forEach( (val) => {
//     console.log(val)
// } )

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// for each loop has access of item, index and entire array
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )

// case : [{}, {}, {}]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )