// IMmediately Invoked Function expressions (IIFE)
// (function atul(){
//     // Named IIFE
//     console.log(`DB Connected`)
// })();

// (() =>{
//     console.log(`DB IS CONNCTED`);
    
// })()


// ( (name) =>{
//     console.log(`DB IS CONNCTED ${name}`);
    
// })('DEvehs')


// ✅ IIFE (Immediately Invoked Function Expression) Explained (Hindi mein)

(function atul(){
    // Named IIFE
    console.log(`DB Connected`)
})();


// 🔹 Yahan ek function banaya gaya hai atul() naam ka
// 🔹 Uske baad turant () laga ke usse turant execute kar diya gaya
// 🔹 Isko Named IIFE kehte hain
// 📌 IIFE ka fayda: global scope mein variable ya function declare karke pollution na ho

(() => {
    console.log(`DB IS CONNECTED`);
})();


// 🔹 Yeh hai ek Arrow Function IIFE
// 🔹 () se function banaya gaya aur doosra () usse call karta hai
// 🔹 Yeh bhi turant execute hota hai without storing in any variable

((name) => {
    console.log(`DB IS CONNECTED ${name}`);
})('Devesh')


//  Yeh arrow function hai jo parameter accept kar raha hai: name
// 🔹 'Devesh' argument ke roop mein diya gaya hai
// 🔹 Output: DB IS CONNECTED Devesh
// 🔹 Yeh bahut useful hota hai agar aap kisi choti functionality ko run karna chahte ho bina scope pollute kiye

//  Key Points about IIFE
// Immediately execute hota hai (jaise hi code run hota hai)

// Global scope ko pollute nahi karta

// Named ya anonymous dono ho sakte hain

// Parameters bhi le sakta hai

// Arrow function ke saath bhi likha ja sakta hai

// 🧠 Practice Questions (IIFE Practice)
// Create an IIFE that prints "Hello World" on execution.

// Create a named IIFE that takes one number and prints its square.

// Create an arrow IIFE that accepts two numbers and prints their sum.

// Use an IIFE to declare a variable and print it inside the IIFE, but try accessing it outside (observe what happens).

// Explain the difference between a normal function and IIFE in 1 line.