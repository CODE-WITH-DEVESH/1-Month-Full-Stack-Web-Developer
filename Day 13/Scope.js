
// if(true){
    
//     let a =20
//     const b= 20
//     var c= 30
// }

// console.log(a)
// console.log(b)
// console.log(c)


// let a =300
// if(true){
//     let a =100
//     const b=20
//     console.log("INNER Value:" , a)
// }
// console.log("Outer Value:" , a)

// Pehla Example: Block Scope vs Global Scope

if (true) {
    let a = 20;      // 'let' ka scope sirf is block tak hai
    const b = 20;    // 'const' ka scope bhi sirf block tak hai
    var c = 30;      // 'var' ka scope poore function ya global tak chala jata hai
}

// console.log(a); // ❌ Error: 'a' is not defined (kyunki a block ke bahar access ho raha hai)
// console.log(b); // ❌ Error: 'b' is not defined (same reason)
// console.log(c); // ✅ Output: 30 (kyunki var block ke bahar bhi accessible hai)


// Doosra Example: Scope Shadowing

let a = 300; // Yeh global 'a' hai

if (true) {
    let a = 100; // Yeh block ka 'a' hai, jo outer 'a' ko shadow karta hai
    const b = 20;
    console.log("INNER Value:", a); // Output: 100 (andar wala a)
}

console.log("OUTER Value:", a); // Output: 300 (bahar wala a)

// var, let aur const me se kaunsa variable block ke bahar accessible hota hai?

// Agar let se declare kiya gaya variable block ke andar hai, to kya usse block ke bahar access kiya ja sakta hai?

// Agar same variable naam let se andar aur bahar dono jagah declare ho to kaunsa value print hogi andar ke block me?

// const se declare kiya gaya variable reassign kyu nahi hota?

// Kya var ka use karna best practice hai? Kyu?

// Which variable among var, let, and const is accessible outside a block even if declared inside it?

// If a variable is declared using let inside a block, can it be accessed outside the block?

// If a variable with the same name is declared using let both inside and outside a block, which value will be printed inside the block?

// Why can't a variable declared with const be reassigned in JavaScript?

// Is it considered best practice to use var in modern JavaScript? Why or why not?



// Bahut achhe sawaal hain Devesh bhai! Chalo ek ek karke simple aur clear explanation dete hain taaki concept crystal clear ho jaaye:

// ---

// ### 🔹 **1. `var`, `let`, aur `const` me se kaunsa variable block ke bahar accessible hota hai?**

// ✅ **`var`** se declare kiya gaya variable **function-scoped** hota hai, aur agar function ke andar na ho, to **globally accessible** ho jaata hai — **block ke andar ho tab bhi block ke bahar accessible hota hai.**

// ```js
// {
//   var x = 10;
// }
// console.log(x); // ✅ Output: 10
// ```

// But agar `let` ya `const` use karte ho:

// ```js
// {
//   let y = 20;
// }
// console.log(y); // ❌ Error: y is not defined
// ```

// ---

// ### 🔹 **2. Agar `let` se declare kiya gaya variable block ke andar hai, to kya usse block ke bahar access kiya ja sakta hai?**

// ❌ **Nahi.** `let` block-scoped hota hai, yani wo sirf usi block ke andar accessible hoga jahan wo declare hua hai.

// ```js
// {
//   let a = 5;
// }
// console.log(a); // ❌ Error: a is not defined
// ```

// ---

// ### 🔹 **3. Agar same variable naam `let` se andar aur bahar dono jagah declare ho to kaunsi value print hogi andar ke block me?**

// ➡️ Block ke andar jo variable declare hai (even if same naam hai), wo **outer variable ko shadow** kar deta hai. To andar wale block me **andar ki value** hi print hogi.

// ```js
// let b = 100;
// {
//   let b = 50;
//   console.log(b); // ✅ Output: 50
// }
// console.log(b);   // ✅ Output: 100
// ```

// ---

// ### 🔹 **4. `const` se declare kiya gaya variable reassign kyu nahi hota?**

// ✅ `const` ka matlab hota hai "constant" — ek baar value assign ho gayi, to usse **reassign** nahi kiya ja sakta.

// ```js
// const pi = 3.14;
// pi = 3.1415; // ❌ Error: Assignment to constant variable
// ```

// Lekin agar const ek object hai, to **uske andar ke properties change** ho sakte hain:

// ```js
// const person = { name: "Devesh" };
// person.name = "Atul"; // ✅ This is allowed
// ```

// ---

// ### 🔹 **5. Kya `var` ka use karna best practice hai? Kyun?**

// ❌ **Nahi, `var` ka use best practice nahi hai.**

// **Reasons:**

// * `var` function-scoped hota hai, isse bugs aate hain jab accidentally block ke bahar access ho jaata hai.
// * `var` hoisting karta hai — iska matlab variable top par chala jaata hai bina value ke.
// * Iski wajah se code ka behavior unpredictable ho sakta hai.

// ✅ Best practice: **`let` and `const` ka use karo.**

// * `const` jab value change nahi karni ho.
// * `let` jab value change ho sakti ho.


