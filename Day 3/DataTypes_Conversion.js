// let score = "33"
// let score1 = null
// let score2 = undefined

// console.log(typeof score)
// console.log(typeof score1)
// console.log(typeof score2)


// let valueToNumber = Number(score)
// console.log(typeof valueToNumber)


// let isloggedIn =1
// let BooleanIsLoggedIn = Boolean(isloggedIn)
// console.log(BooleanIsLoggedIn)


// let someNumber =23
// let stringtoNumber =String(someNumber)
// console.log(stringtoNumber);

// console.log(typeof stringtoNumber)

let score = "33"               // score ek string hai "33"
let score1 = null              // score1 null hai, iska typeof "object" hota hai (JS ka ek quirk)
let score2 = undefined         // score2 undefined hai, matlab koi value assigned nahi

console.log(typeof score)      // "string" print hoga
console.log(typeof score1)     // "object" print hoga
console.log(typeof score2)     // "undefined" print hoga

let valueToNumber = Number(score)   // string "33" ko number 33 me convert kar rahe hain
console.log(typeof valueToNumber)   // "number" print hoga

let isloggedIn = 1                  // 1 ko true maana jata hai boolean context me
let BooleanIsLoggedIn = Boolean(isloggedIn) // number 1 ko boolean true me convert kiya
console.log(BooleanIsLoggedIn)      // true print hoga

let someNumber = 23                 // ek number value
let stringtoNumber = String(someNumber) // number 23 ko string "23" me convert kar rahe hain
console.log(stringtoNumber)         // "23" print hoga
console.log(typeof stringtoNumber)  // "string" print hoga
