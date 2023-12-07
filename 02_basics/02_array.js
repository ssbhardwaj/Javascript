const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)           // 4th element of marvel_heros = ["superman", "flash", "batman"]; (matlab pura array jayega 4th m)
// console.log(marvel_heros[3][1])

// Push works on the same array but concat return a new array so need to store in a new variable

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// Spread Operator
// const all_new_Heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_Heros)

// Sare sub-array ko tod dene k liye such that ek hi array reh jaye
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const useable_another_array = another_array.flat(Infinity);
// console.log(useable_another_array)


console.log(Array.isArray("Suman Shekhar"))
console.log(Array.from("Suman Shekhar"))
console.log(Array.from({name: "Suman Shekhar"}))        // jab kch aasa de jisse Array nahi bn sakta tho [] -> empty array result.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))