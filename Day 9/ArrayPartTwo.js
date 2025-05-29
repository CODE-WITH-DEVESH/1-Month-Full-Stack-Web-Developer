// const Marvel_Heros =["Thre" , "IronMan" , "SpiderMan"]
// const dc_Hero =["Superman" , "Flash", "batman"]

// Marvel_Heros.push(dc_Hero)
// console.log(Marvel_Heros);
// console.log(Marvel_Heros[3][1]);

// const allhero =Marvel_Heros.concat(dc_Hero)
// console.log(Marvel_Heros)
// console.log(allhero)


// const all_new_hero =[...Marvel_Heros, ...dc_Hero]
// console.log(all_new_hero)

// const another_array =[1,2,3 ,[4,5,6 ] ,7,[6,7,[4,5]]]
// const real_another_arry =another_array.flat(Infinity)
// console.log(real_another_arry);

// console.log(Array.isArray("Devesh"))
// console.log(Array.from("Devesh"))
// console.log(Array.from({name :"Devesh"}))

// let score1 =100
// let score2 =200
// let score3 =300
// console.log(Array.of(score1 , score2, score3));


const Marvel_Heros = ["Thre", "IronMan", "SpiderMan"]
const dc_Hero = ["Superman", "Flash", "batman"]

Marvel_Heros.push(dc_Hero)  // dc_Hero array ko as a single item add kiya
console.log(Marvel_Heros)   // ["Thre", "IronMan", "SpiderMan", ["Superman", "Flash", "batman"]]
console.log(Marvel_Heros[3][1])  // Nested array access => "Flash"

const allhero = Marvel_Heros.concat(dc_Hero)  
// Concatenation karta hai do arrays ko (original Marvel_Heros ke end mein dc_Hero)
console.log(Marvel_Heros)  // Original array change nahi hota
console.log(allhero)       // New merged array

const all_new_hero = [...Marvel_Heros, ...dc_Hero]  
// Spread operator se array merge hoti hai (cleaner syntax)
console.log(all_new_hero)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arry = another_array.flat(Infinity)  
// Nested arrays ko single array mein convert kar diya
console.log(real_another_arry)
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Devesh"))  // false
console.log(Array.from("Devesh"))     // Converts string to array => ['D', 'e', 'v', 'e', 's', 'h']
console.log(Array.from({ name: "Devesh" }))  // Cannot convert, returns empty array (needs length or iterable)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  
// Creates array from individual values => [100, 200, 300]







// ## 🧠 Practice Questions (Topic – Advanced Array Methods)

// ### ❓ Q1.

// Create two arrays:

// ```js
// const fruits = ["Apple", "Mango"];
// const dryFruits = ["Almond", "Cashew"];
// ```

// * Merge them using both `concat()` and spread `[...]`.
// * Print both outputs.

// ---

// ### ❓ Q2.

// Flatten this nested array using `.flat()`

// ```js
// const items = [1, [2, 3], [4, [5, 6]]];
// ```

// * Use depth = 1
// * Use depth = Infinity

// ---

// ### ❓ Q3.

// Check if `"JavaScript"` is an array.
// If not, convert it to an array using `Array.from()`.

// ---

// ### ❓ Q4.

// Use `Array.of()` to create an array with these values:

// * `"React"`, `"Node.js"`, `"MongoDB"`

// ---

// ### ❓ Q5.

// What is the output of:

// ```js
// console.log(Array.from({name: "Dev"}))
// ```

// Explain why this happens.

// ---

// Bhai next topic bhej de, turant explanation + 5 practice question ready kar dunga ✅
// Tere practice ke liye best structure main hi bana ke dunga har baar. Keep learning! 💪📚
