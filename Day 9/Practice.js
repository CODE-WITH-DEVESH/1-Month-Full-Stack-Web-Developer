// Array Practice by Devesh Babu
// const myarrr = [0, 1, 2, 3, 4, 5, 6]
// console.log(myarrr[0])

// const stringarr =["Dev" , "Atul"]
// const myaarr2 = new Array(0, 1, 2, 3, 4, 5, 6)

// console.log(myaarr2[4])


// myarrr.push(7)
// console.log(myarrr)
// myarrr.pop(7)
// console.log(myarrr)
// myarrr.unshift(0)
// console.log(myarrr)
// myarrr.shift(0)
// console.log(myarrr)

// console.log(myarrr.includes(8))
// console.log(myarrr.indexOf(5))
// const newArr =myarrr.join()
// console.log(typeof newArr)

// const myarrr = [0, 1, 2, 3, 4, 5, 6]

// console.log("This is my Original Array" , myarrr)

// const myn2 =myarrr.slice(1,3)
// console.log(myn2)

// const myn3 =myarrr.splice(1,3)
// console.log(myn3)


// Practice 


// Create an array of 5 fruits.

// Add a fruit at the end

// Remove the first fruit

// Print the final array.
// const fruit =["apple", "banana", "orange", "grapes", "strawberry"]
// console.log(fruit)

// fruit.push("Lemon")
// console.log(fruit)

// fruit.shift(0)
// console.log(fruit)

//  Qus 2
//  Given arr = [10, 20, 30, 40, 50],

// Use slice to get [20, 30]

// Use splice to remove [30, 40]

// const arr = [10, 20, 30, 40, 50];
// console.log("Original array:", arr);

// Slice to get [20] → index 1 se start, 2 se pehle tak
// const sliced = arr.slice(1, 2);
// console.log("After slice (1,2):", sliced);

// Splice to remove [30, 40] → index 2 se 2 elements remove
// arr.splice(2, 2);
// console.log("After splice (2,2):", arr);


// const nameArr =["Dev" , "Atul"]
// console.log(nameArr.includes("Ravi"))

// const Marvel_Hero =["Thor" , "Inroman" , "SpiderMan"]
// const dc_Hero = ["Superman" , "Flash" , "Batman"]
// Marvel_Hero.push(dc_Hero)
// console.log(Marvel_Hero)

// console.log(Marvel_Hero[3] [1])

// const allHero = Marvel_Hero.concat(dc_Hero)
// console.log(allHero)
// const all_new_heros =[...Marvel_Hero, ...dc_Hero]
// console.log(all_new_heros)
// console.log(Array.isArray("Devesh"))
// console.log(Array.from("Devesh"))

// let score1 =1200
// let score2=1201
// let score3 =1203
// console.log(Array.of(score1,score2,score3))

// Practice Questions

// QUS 1 
// Create two arrays:


// const fruits = ["Apple", "Mango"];
// const dryFruits = ["Almond", "Cashew"];
// ```

// * Merge them using both `concat()` and spread `[...]`.
// * Print both outputs.
// const fruits = ["Apple", "Mango"];
// const dryFruits = ["Almond", "Cashew"];

// const all_fruts= fruits.concat(dryFruits)
// console.log(all_fruts)

// const new_all_frutis =[...fruits,...dryFruits]
// console.log(new_all_frutis)

// console.log(Array.from({name: "Dev"}))


// Flatten this nested array using `.flat()`

// ```js
// const items = [1, [2, 3], [4, [5, 6]]];
// ```

// * Use depth = 1
// * Use depth = Infinity

// const items = [1, [2, 3], [4, [5, 6]]];
// const real_item = items.flat(Infinity)
// const real_item_flat = items.flat(-1)
// console.log(real_item)
// console.log(real_item_flat)


// Check if `"JavaScript"` is an array.
// If not, convert it to an array using `Array.from()`.


// Use `Array.of()` to create an array with these values:

// * `"React"`, `"Node.js"`, `"MongoDB"`

// ---
// const item1 = "React";
// const item2 = "Node.js";
// const item3 = "MongoDB";  // Also corrected spelling here

// const techStack = Array.of(item1, item2, item3);
// console.log(techStack);

const item1 ="React"
const item2 ="Node.js"
const item3 ="MongoDB"


const all_item =Array.of(item1 , item2 ,item3)
console.log(all_item)