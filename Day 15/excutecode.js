// Bhai tu puchh raha hai — **JavaScript Code Execution + Call Stack** kaise kaam karta hai, toh chaliye mai tujhe **real-world example ke saath** aur **clear Hindi explanation** deta hoon jisse concepts ekdum crystal clear ho jayein.

// ---

// ## ✅ JavaScript Code Execution + Call Stack (Hindi Explanation)

// ### 🔥 JavaScript Code Execution Kaise Hota Hai?

// Jab bhi JavaScript ka code run hota hai, **do phases** mein hota hai:

// ### 1️⃣ Memory Creation Phase (a.k.a **Creation Phase**)

// * JavaScript sabse pehle variables aur functions ko memory mein allocate karta hai.
// * Sabhi **variables ko `undefined`** se initialize karta hai.
// * **Functions ka pura definition** memory mein store hota hai (not undefined).

// ### 2️⃣ Execution Phase

// * Ab JavaScript actual code run karta hai line by line.
// * Variables ko real values milti hain.
// * Functions ko call karne pe **naya Execution Context** banta hai.

// ---

// ## 📦 Execution Context Kya Hai?

// Jab bhi JavaScript code chalata hai, wo uske liye ek **Execution Context (EC)** banata hai.

// ### 3 Types of Execution Context:

// 1. **Global Execution Context (GEC)** – automatically create hota hai jab JS file start hoti hai
// 2. **Function Execution Context (FEC)** – har function ke liye naya context
// 3. **Eval Execution Context** – kabhi-kabhi `eval()` se ban sakta hai, mostly use nahi hota

// ---

// ## 📚 Example:

// ```js
// let val1 = 10;
// let val2 = 5;

// function addNum(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }

// let result1 = addNum(val1, val2);
// let result2 = addNum(20, 30);
// ```

// ### ➤ Is example ke liye kya hoga?

// #### 💡 Phase 1: Memory Creation

// * `val1 → undefined`
// * `val2 → undefined`
// * `addNum → function definition`
// * `result1 → undefined`
// * `result2 → undefined`

// #### 💡 Phase 2: Execution

// * `val1 = 10`
// * `val2 = 5`
// * `addNum(val1, val2)` call hoga → New Function Execution Context banega
// * Function mein `num1 = 10`, `num2 = 5` → `total = 15`
// * `return 15` → `result1 = 15`
// * Fir `addNum(20, 30)` call hoga → new context → `result2 = 50`

// ---

// ## 🧠 Call Stack

// Call Stack JavaScript ka ek **data structure** hai jo track karta hai ki **kaunsa function kab call hua aur kab complete hua**.

// ```js
// function one() {
//     console.log("One");
//     two();
// }
// function two() {
//     console.log("Two");
// }
// one();
// ```

// ### Call Stack Working:

// 1. `one()` goes in stack
// 2. Inside `one()`, `two()` is called → goes in stack
// 3. `two()` completes → removed from stack
// 4. `one()` completes → removed

// ```
// 📦 Call Stack at runtime:
// → one()
// → two()
// ← two() finished
// ← one() finished
// ```

// ---

// ## 🧪 Practice Questions (English):

// 1. What are the two main phases of JavaScript code execution?
// 2. What is an Execution Context in JavaScript?
// 3. What happens during the Memory Creation Phase?
// 4. How does the Call Stack manage function calls?
// 5. Create a code example where 3 nested function calls are made and explain how Call Stack behaves.

