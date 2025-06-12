// let index = 0
// while (index <=10) {
//     console.log(`Value of Index is ${index}`)
//     index = index + 2
// }



// let myArray = ["flash" , "batman" ,"Superman"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(` Value is ${myArray[arr]}`)
//     arr= arr +1
    
// }


// let score = 1

// do{
//     console.log(`Score is ${score}`)
//     score++
// } while(score <=10)


// ✅ WHILE LOOP, DO WHILE LOOP — Full Explanation & Practice

// 🔹 1. WHILE LOOP with numbers
// Jab tak condition true hai, tab tak loop chalega
let index = 0;

while (index <= 10) {
    console.log(`🔁 Value of index is: ${index}`);
    index = index + 2; // 2-2 karke badh raha hai
}

// 🔹 2. WHILE LOOP with array
let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
    // har index ka element print hoga
    console.log(`🦸 Value is: ${myArray[arr]}`);
    arr = arr + 1;
}

// 🔹 3. DO WHILE LOOP
// Pehle ek baar code chalega, uske baad condition check hoti hai

let score = 1;

do {
    console.log(`🏁 Score is: ${score}`);
    score++; // score mein 1 add karo
} while (score <= 10);


// ✅ Practice Questions – Try Karna:
// 1️⃣ Q: While loop se 1 se 20 ke beech ke odd numbers print karo.
// 2️⃣ Q: Ek array lo – ["Apple", "Mango", "Banana", "Grapes"]. While loop se saare elements print karo.
// 3️⃣ Q: Do while loop ka use karke number 10 se 1 tak reverse print karo.
// 4️⃣ Q: While loop ka use karke table of 4 print karo.
// 5️⃣ Q: Do while loop se user ke input ke through score 100 tak badhao (hardcoded input for now).


// ✅ Notes:
// while loop mein condition pehle check hoti hai.

// do while loop mein pehle ek baar code chalega, phir condition check hogi.

// Array ke sath loop chalana ho toh array.length ka use hota hai.

