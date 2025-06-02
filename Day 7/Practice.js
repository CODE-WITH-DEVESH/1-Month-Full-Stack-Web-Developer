const score = 400
console.log(score)

const balance =new Number(100)
console.log(balance)
// console.log(typeof balance)

console.log( balance.toString().length)


console.log(balance.toFixed(2))

const otherNumber = 296.78778989
console.log(otherNumber.toPrecision(4))

const hundreds =545677
console.log(hundreds.toLocaleString())

console.log(Math)
console.log(Math.abs(-4))

console.log(Math.abs(-4.6)) 
console.log(Math.round(4.5))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.1))

console.log(Math.min(3,5,6,7,8))
console.log(Math.max(3,5,6,7,8))

console.log(Math.random())
console.log(Math.floor(Math.random() *10 +1))
const min =10
const max =20
console.log(Math.floor(Math.random() * (max -min +1 )) + min)


//  Practice Questions
// function generateRandomBetween ={

// }

const NumberToString1 = 5678.92345
const converttostring = String(NumberToString1)
console.log(typeof converttostring)
console.log(converttostring.length)
console.log(NumberToString1.toFixed(2))

 
// Given a number num = 98.75, write code to:

// Round it to nearest integer

// Floor it

// Ceil it

// Print all three results.
const givenumber =98.57
console.log(Math.floor(givenumber))
console.log(Math.ceil(givenumber))
console.log(Math.round(givenumber))


// Write a code that takes 5 numbers as input in an array, and prints the:

// Maximum number

// Minimum number
// Using Math.max() and Math.min().

const arrr = [3,4,7,8,6]

console.log(Math.max(...arrr))
console.log(Math.min(...arrr))
console.log(Math.max(3,4,7,8,6))
console.log(Math.min(3,4,7,8,6))


// ❓ Q5.
// You are given a number like 100000000.
// Print this number in:

// US format (toLocaleString())

// Indian format (toLocaleString('en-IN'))
const GiveNumberTo = 100000000
console.log(GiveNumberTo.toLocaleString())

console.log(GiveNumberTo.toLocaleString('en-IN'))

