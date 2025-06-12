// const userEmail = "deveshAI.gmail.com"

// if(userEmail){
//     console.log("Got User Email")
// } else {
//     console.log("don't Have USer Email")
// }

// falsy value 
// false ,0,-0,BigInt 0n , "" , null , undefined , NaN 
// trthy value 
// "0" ,'false', " " [] , {} , function(){}


// const userArray = []

// if(userArray.length===0){
//     console.log(" Array Is Empty");
    

// }

// const emptyObj ={}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("empyt Object")
    
// }

// false == 0
// false == ''
// true =0

// Nullish Coalescing Operator (??) :null Underfine 
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 10

console.log(val1)



// Terniary operator 
// 
// 
// condition ? true : false

// const iceTeaPrice = 100

// iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80 ")



// ✅ Example 1: Truthy/Falsy check with if condition
const userEmail = "deveshAI.gmail.com";

if (userEmail) {
    console.log("✔️ Got User Email");
} else {
    console.log("❌ Don't have User Email");
}

// ⚠️ Falsy Values in JS:
// false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN

// ✅ Truthy Values in JS:
// "0", 'false', " ", [], {}, function(){}

// ✅ Example 2: Check if array is empty
const userArray = [];

if (userArray.length === 0) {
    console.log("📦 Array is empty");
}

// ✅ Example 3: Check if object is empty
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("📭 Object is empty");
}

// ✅ Comparison Confusions in JS
console.log(false == 0);   // true
console.log(false == '');  // true
console.log(0 == '');      // true
// JS loosely compares different types in '=='

// ✅ Nullish Coalescing Operator (??)
// Iska use null ya undefined value ke alternate dene ke liye hota hai
let val1;

// val1 = 5 ?? 10         // 👉 5
// val1 = null ?? 10      // 👉 10
// val1 = undefined ?? 15 // 👉 15
val1 = null ?? 10 ?? 20   // 👉 10 (first non-null/undefined value)
console.log("✅ val1 is:", val1);


// ✅ Ternary Operator (shortcut for if-else)
// Syntax: condition ? true block : false block

const iceTeaPrice = 100;

iceTeaPrice <= 80 
    ? console.log("🧊 Price is less than or equal to 80") 
    : console.log("💰 Price is more than 80");


//      Truthy and Falsy:
// JavaScript mein kuch values by default false treat hoti hain: false, 0, "", null, undefined, NaN.

// Baaki sab values automatically true treat hoti hain, jaise: "0", " ", [], {}, function(){}.

// 🔹 ?? (Nullish Coalescing Operator):
// Sirf null ya undefined hone par fallback value use karta hai.

// Useful when checking values that may be null or undefined.

// 🔹 Ternary Operator:
// Ek line mein condition likhne ka shortcut:
condition ? result_if_true : result_if_false 


// ✅ Practice Questions:
// Check if a string userName is truthy, and print "Welcome" or "Guest".

// Write a function that takes an object and prints "Empty Object" if it's empty.

// Use ?? to give default value to a variable when input is null or undefined.

// Use ternary operator to check if a number is even or odd.

// Compare the result of false == 0, false === 0, and explain why they differ.