// Singleton object
const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// const tinderUser = {};          // Non singleton object... Baki same hain normal object k
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suman Shekhar",
            lastname: "Bhardwaj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

// const obj4 = Object.assign(obj1, obj2, obj3);
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4)

// Jab v data base s value aata hain hain tho array of objects k form m aata hain
const users = [
    {
        id: 1,
        email: "gippy@gmail.com"
    },
    {
        id: 1,
        email: "gippy@gmail.com"
    },
    {
        id: 1,
        email: "gippy@gmail.com"
    }
]
// console.log(users[1].id)

console.log(tinderUser);
// To get all keys in an object
console.log(Object.keys(tinderUser))         //Return type array -> all keys are returned in an array
// To get all values in an object
console.log(Object.values(tinderUser))      //Return type array -> all values are returned in an array
// key value ko array m convert karega
console.log(Object.entries(tinderUser))
//Check karna ho ki ye property hain ki nahi obj k pass
console.log(tinderUser.hasOwnProperty('isLoggedIn'))        // True
