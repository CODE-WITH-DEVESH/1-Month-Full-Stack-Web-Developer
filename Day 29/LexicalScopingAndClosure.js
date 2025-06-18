// // LexicalScopingAndClosure

// function outer(){
//     let username = "devesh"
//     function inner(){
//         console.log(username)
//        }
//        inner()
// } 
// outer()
// // console.log(username)

// // Closure 










// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();




// 📘 Lexical Scoping & Closures in JavaScript — Explained Like You're My Friend

// -----------------------------------------
// ✅ 1. Lexical Scope kya hota hai?
// -----------------------------------------
// JavaScript mein **function ke andar likhe function** 
// apne outer function ke variables ko access kar sakte hain.
// Isse **Lexical Scope** kehte hain.

// Example 👇

function outer() {
    let username = "devesh"  // outer function ka variable

    function inner() {
        console.log(username);  // ✅ inner function outer ka variable use kar raha
    }

    inner();  // Output: devesh
}

outer();
// console.log(username) ❌ yeh error dega kyunki `username` outer ke bahar access nahi ho sakta

// Lexical Scope ka matlab hota hai ki function apna surrounding scope dekh sakta hai
// Lekin bahar ka function andar ke function ko access nahi kar sakta


// -----------------------------------------
// ✅ 2. Closures kya hote hain?
// -----------------------------------------
// Jab koi inner function apne outer function ke variables ko 
// yaad rakh leta hai **even after outer function finish ho gaya ho**, 
// usse Closure kehte hain.

// 📦 Example:

function makeFunc() {
  const name = "Mozilla"; // yeh variable local hai makeFunc ke

  function displayName() {
    console.log(name);  // lekin yeh access ho raha hai makeFunc ke bahar bhi
  }

  return displayName;   // inner function ko return kiya
}

const myFunc = makeFunc();  // ab makeFunc ka kaam ho gaya, lekin...
myFunc();  // Output: Mozilla ✅ displayName ne closure bana liya name pe

// 💡 Closure ka use tab hota hai jab hume data ko "lock" karke rakhna ho
// bina global variable banaye


// -----------------------------------------
// ✅ PRACTICE QUESTIONS (Closures & Scope)
// -----------------------------------------

// ❓ Q1. Kya inner function outer function ke variable use kar sakta hai?
// ✅ Haan, yehi to lexical scope hai.

// ❓ Q2. makeFunc ka execution khatam ho gaya, phir bhi `name` variable kaise yaad hai?
// ✅ Kyunki displayName ne closure bana liya `name` pe.

// ❓ Q3. Kya closure sirf function return hone pe hota hai?
// ✅ Mostly haan, jab inner function ko return ya pass kiya jata hai.

// ❓ Q4. Kya closure memory mein data ko hold karta hai?
// ✅ Haan, jab tak closure ka function active hai, tab tak data memory mein rehta hai.

// ❓ Q5. Closure kisliye useful hota hai?
// ✅ Secret/private data store karne ke liye. Example: counter, secure data, encapsulation.


// -----------------------------------------
// ✅ BONUS PRACTICE: Closure Counter
// -----------------------------------------

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(`Current count: ${count}`);
    }
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2
counter1(); // 3

const counter2 = createCounter();
counter2(); // 1 → because it has its own closure

// 📌 `count` private hai, direct access nahi kar sakte — yeh closure ka magic hai

// -----------------------------------------
// 💬 Summary (Ek Line mein)
// -----------------------------------------
// 🔹 Lexical Scope: Inner function outer variables ko dekh sakta hai.
// 🔹 Closure: Inner function outer variables ko yaad rakhta hai even after function ends.
