// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3])

// *************************** Array Methords **********************************

// myArr.push(6);
// myArr.push(7);
// console.log(myArr)
// myArr.pop();
// console.log(myArr)

// myArr.unshift(27);      // Used to push elements from the front
// console.log(myArr);

// myArr.shift();      // Used to pop elements from the front
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);     // String


// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C ", myArr)