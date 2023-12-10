// if we declear a variable using "var" inside a scope it will be available both inside and outside the scope. Hence var is avoided

let a = 300

if(true) {
    let a = 10
    // console.log("INNER: ", a)
}

// console.log(a);

// Jab hm apne browser k andar jate hain right click kr k inspect karte hain tho waha pr console k andar ja kr jo scope dekhege
// wo alag hota hain jab hm apne code environment m node k through run karege tho global scope alag hota hain...

function one(){
    const username = "Suman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)     // website is defined only within the function two().

    two()
}

// one()


// if(true) {
//     const username = "Suman"
//     if(username === "Suman"){
//         const website = " youtube"
//         console.log(username + website)
//     }
//     // console.log(website)
// }

// // console.log(username)


// ****************************** Interesting *********************************

// 1. Is case m function call fun decleration k pehle v likh sakte hain aur fun decleration k baad v

console.log(addone(5))
function addone(num) {
    return num + 1
}

console.log(addone(5))



// 2. Is case m function call fun decleration k baad hi m likhna hota hain....

function addTwo(num) {
    return num + 2
}

console.log(addTwo(5))