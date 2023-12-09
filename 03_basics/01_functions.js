function sayMyName(){
    console.log('S')
    console.log('U')
    console.log('M')
    console.log('A')
    console.log('N')
}
// sayMyName();

// function addTwoNumbers(number1, number2){           // number1, number2 => parameters
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(4, 9)             // 4, 9 => arguments
// console.log(result)

function loginUserMessage(username = "sam"){        // can also provide default value
    return `${username}, you just logged in`
}

// console.log(loginUserMessage("Suman"))



function calculateCartPrice(...num1) {          // ... -> rest operator. stores all input arguments into array num1
    return  num1;
}

console.log(calculateCartPrice(200, 300, 400, 500, 600))

// Object handling in functions

const user = {
    username: "suman",
    price: 199
}

function handleObjects(anyobject){              // if anyobject.username is not found then in that place undefined will be shown.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObjects(user)
handleObjects({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 500, 400, 300];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));