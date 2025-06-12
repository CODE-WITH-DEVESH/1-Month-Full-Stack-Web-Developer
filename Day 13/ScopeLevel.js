// function one (){
//     const username =" Devesh"

//     function two (){
//         const website ="youtube"
//         console.log(username)

//     }
//     // console.log(website)
//     two()
// }
// one()

// if(true){
//     const username = "Devesh"

//     if(username === "Devesh"){

//         const website = " Youtube" 
//         // console.log( username + website) 
//     }
// }

// // Interesting 

// function addone(numb){
//  return numb +1
// }

// console.log(addone(5))


// const addTwo =function(num){
//     return num +2 
// }

// addone (5)


// Function One ke andar ek local variable hai: username
function one (){
    const username = "Devesh"

    // Nested function two, jo parent function ka variable use kar sakta hai
    function two (){
        const website = "youtube"
        console.log(username)  // "Devesh" print hoga kyunki inner function outer scope ko access kar sakta hai
    }

    // console.log(website)  // ❌ Error aayegi kyunki website sirf two() ke andar defined hai
    two()  // two function call kiya
}
one()  // one function call kiya


// 🔒 Block Scope Example
if(true){
    const username = "Devesh"

    if(username === "Devesh"){
        const website = "Youtube" 
        // console.log(username + website)  // Output hoga: DeveshYoutube
    }

    // console.log(website)  // ❌ Error: website is not accessible outside inner if block
}

// 💡 Function Declaration: Hoisting hota hai
function addone(numb){
    return numb + 1
}
console.log(addone(5))  // Output: 6


// 💡 Function Expression: Hoisting nahi hota
const addTwo = function(num){
    return num + 2 
}

console.log(addTwo(5))  // Output: 7


// 🧠 Concepts Covered:
// Lexical Scope: Inner function can access outer function's variables.

// Block Scope: const and let are block scoped.

// Function Declaration vs Expression: Declaration is hoisted, expression is not.

// ✅ Practice Questions (in English)
// Can a nested function access variables declared in its parent function? Why?

// What happens if you try to access a block-scoped variable (let or const) outside its block?

// What is the difference between a function declaration and a function expression?

// What will happen if you call a function expression before it is defined?

// In which situations is hoisting applicable for functions in JavaScript?




// ### 🔹 **1. Can a nested function access variables declared in its parent function? Why?**

// ✅ **Yes**, a nested function **can access** variables declared in its parent function.

// 📌 **Why?**
// Because of **JavaScript's lexical scoping** — jab function define hota hai (not when it runs), tabhi wo yaad kar leta hai apna surrounding scope.

// ```js
// function outer() {
//   let name = "Devesh";

//   function inner() {
//     console.log(name); // ✅ Output: Devesh
//   }

//   inner();
// }
// outer();
// ```

// ---

// ### 🔹 **2. What happens if you try to access a block-scoped variable (`let` or `const`) outside its block?**

// ❌ **You get a ReferenceError.**

// 📌 Because `let` and `const` are **block-scoped**, yani sirf `{}` ke andar accessible hote hain.

// ```js
// {
//   let x = 10;
// }
// console.log(x); // ❌ ReferenceError: x is not defined
// ```

// ---

// ### 🔹 **3. What is the difference between a function declaration and a function expression?**

// ✅ **Function Declaration:**

// ```js
// function greet() {
//   console.log("Hello!");
// }
// ```

// * Named function
// * **Hoisted** (can be called before it's defined)

// ✅ **Function Expression:**

// ```js
// const greet = function () {
//   console.log("Hello!");
// };
// ```

// * Anonymous (usually)
// * **Not hoisted** like declarations
// * Stored in a variable

// ---

// ### 🔹 **4. What will happen if you call a function expression before it is defined?**

// ❌ **It will throw an error: `TypeError: greet is not a function`**

// ```js
// greet(); // ❌ Error
// const greet = function () {
//   console.log("Hello!");
// };
// ```

// 📌 Because variable `greet` is hoisted as `undefined`, but not the function itself.

// ---

// ### 🔹 **5. In which situations is hoisting applicable for functions in JavaScript?**

// ✅ **Function Declarations** are hoisted **completely**, so you can call them even **before their definition**.

// ```js
// sayHi(); // ✅ Works
// function sayHi() {
//   console.log("Hi!");
// }
// ```

// ❌ **Function Expressions** and **Arrow Functions** are not fully hoisted. Only their variable declaration is hoisted (as `undefined`), not the function body.

// ```js
// sayHi(); // ❌ TypeError
// const sayHi = function () {
//   console.log("Hi!");
// };
// ```

// ---

// ### 🔚 Summary:

// | Concept                       | Behavior                                                             |
// | ----------------------------- | -------------------------------------------------------------------- |
// | Nested functions              | ✅ Can access parent variables (lexical scoping)                      |
// | Block-scoped vars outside use | ❌ ReferenceError                                                     |
// | Function Declaration          | ✅ Hoisted completely                                                 |
// | Function Expression           | ❌ Not hoisted fully (variable only, value undefined)                 |
// | Call function expr early      | ❌ TypeError: not a function                                          |
// | Hoisting works for            | ✅ Only function **declarations**, not expressions or arrow functions |

// ---


