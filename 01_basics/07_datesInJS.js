// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

let myCreatedDate = new Date(2024, 6, 27)
// console.log(myCreatedDate.toDateString())

// let myCreatedDateWithTime = new Date(2024, 6, 26, 18, 20)
let myCreatedDateWithTime = new Date("07-27-2024")//MM-DD-YYYY
// console.log(myCreatedDateWithTime.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // Time in ms from the reference initial time of year 1970
// console.log(myCreatedDate.getTime()) // fun to get the same as ----Do----
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay())

// `${newDate.getDay()} and the time ${}`

newDate.toLocaleString('default', {
    weekday: "long"
})      // Weekdays ko pura Monday kr k likhega.