// // Number TO JAvaSCipt 

// const score =400
// console.log(score)

// const balance =new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNumber =283.46789
// console.log(otherNumber.toPrecision(3));

// const hundreds =1000000
// console.log(hundreds.toLocaleString())
// // console.log(hundreds.toLocaleString('en_IN'))

// //MAths

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4.6));
// console.log(Math.abs(4.3));
// console.log(Math.round(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.min(4,9,4,5,6,7,8));
// console.log(Math.max(4,9,4,5,6,7,8));



// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() *(max -min  +  1 )) + min)


// ⭐ Number in JavaScript

const score = 400
console.log(score)  
// Normal number, 400 as it is print hoga

const balance = new Number(100)
console.log(balance)  
// Yeh Number object hai, value: 100

console.log(balance.toString().length)  
// 100 ko string bana diya => "100" => length = 3

console.log(balance.toFixed(2))  
// Decimal fix kar raha hai => 100.00 (2 digit after decimal)

// ⭐ Precision
const otherNumber = 283.46789
console.log(otherNumber.toPrecision(3))  
// Sirf 3 significant digits => 283

const hundreds = 1000000
console.log(hundreds.toLocaleString())  
// Indian comma format nahi, default en-US => 1,000,000

// console.log(hundreds.toLocaleString('en-IN'))  
// Uncomment karo to get Indian format => 10,00,000

// 🔥 Math Object - built-in functions

console.log(Math)  
// Math ka pura object dekhne ko milega (functions, constants, etc.)

console.log(Math.abs(-4))  
// Absolute value => 4

console.log(Math.abs(4.6))  
// Already positive => 4.6

console.log(Math.abs(4.3))  
// Already positive => 4.3

console.log(Math.round(4.2))  
// Round off => 4

console.log(Math.floor(4.9))  
// Floor => lowest integer => 4

console.log(Math.ceil(4.9))  
// Ceil => next integer => 5

console.log(Math.min(4,9,4,5,6,7,8))  
// Min value => 4

console.log(Math.max(4,9,4,5,6,7,8))  
// Max value => 9

// 🎲 Random number generation

console.log(Math.random())  
// Random number between 0 and 1

console.log((Math.random()*10) + 1)  
// Random between 1 and 10 (float)

console.log(Math.floor(Math.random()*10) + 1)  
// Random between 1 to 10 (integer only)

// 🎯 Random number in custom range (like between 10 and 20)
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// Yeh generate karega random number between 10 and 20 (both included)


// 🧠 Practice Questions: (Topic - Numbers & Math in JS)
// ❓ Q1.
// Write a JavaScript function generateRandomBetween(min, max) that returns a random integer between the given min and max values (both included).

// ❓ Q2.
// Convert the number 5678.92345 to a string and print:

// Its type

// Its length
// Also, round it off to 2 decimal places and print that value.

// ❓ Q3.
// Given a number num = 98.75, write code to:

// Round it to nearest integer

// Floor it

// Ceil it

// Print all three results.

// ❓ Q4.
// Write a code that takes 5 numbers as input in an array, and prints the:

// Maximum number

// Minimum number
// Using Math.max() and Math.min().

// ❓ Q5.
// You are given a number like 100000000.
// Print this number in:

// US format (toLocaleString())

// Indian format (toLocaleString('en-IN'))