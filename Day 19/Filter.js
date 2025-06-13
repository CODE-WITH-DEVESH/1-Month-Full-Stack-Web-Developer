// const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const newNumbs = mynumber.map( (num) => num + 10)
// console.log(newNumbs)


// const Channing =mynumber
// .map ( (num) => num *10 ) 
// .map( (num) => num +1)
// .map( (num) => num +1)
// .filter( (num) => num >=40)

// console.log(Channing)


// // Rednce ()

// const MyNumbs = [1,2,3]
// const mytotal =MyNumbs.reduce( function (acc , currval ){
//     console.log(`Acc :${acc} and Currval ${currval}`)
//     return acc + currval

// },0)
// console.log(mytotal)




// const arrowFunction = MyNumbs.reduce( (acc, curr ) => acc +curr ,0)
// console.log(arrowFunction)


// const ShoppingCard =[
//     {
//         itemName: "JS Course",
//         price: 1929

//     },
//     {
//         itemName: "PY Course",
//         price: 1994

//     },
//     {
//         itemName: "JAva Course",
//         price: 1933

//     },
// ]
// const PriceTopay =ShoppingCard.reduce( (acc ,item) => acc +item.price ,0)
// console.log(PriceTopay)



// 👉 Original number array
const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 🔁 map() — Har element ke sath +10 kiya jaa raha hai
const newNumbs = mynumber.map((num) => num + 10);
console.log("newNumbs:", newNumbs);
// Output: [11,12,13,14,15,16,17,18,19,20]

// 🔗 Chaining map() and filter()
const Channing = mynumber
    .map((num) => num * 10) // Step 1: Multiply each by 10
    .map((num) => num + 1)  // Step 2: Add 1
    .map((num) => num + 1)  // Step 3: Add 1 again
    .filter((num) => num >= 40); // Step 4: Keep only values >= 40

console.log("Chaining Result:", Channing);
// Output: [42, 52, 62, 72, 82, 92, 102]

// 🧮 reduce() — Accumulator pattern

const MyNumbs = [1, 2, 3];

// Step-by-step reduce() explanation
const mytotal = MyNumbs.reduce(function (acc, currval) {
    console.log(`Acc: ${acc}, Currval: ${currval}`);
    return acc + currval;
}, 0); // 0 is initial value of accumulator

console.log("Total with reduce:", mytotal);
// Output: 6

// ✅ Arrow function reduce()
const arrowFunction = MyNumbs.reduce((acc, curr) => acc + curr, 0);
console.log("Arrow reduce:", arrowFunction); // Output: 6

// 🛒 Shopping Cart — reduce() on array of objects

const ShoppingCard = [
    {
        itemName: "JS Course",
        price: 1929
    },
    {
        itemName: "PY Course",
        price: 1994
    },
    {
        itemName: "Java Course",
        price: 1933
    }
];

// Calculate total price using reduce()
const PriceTopay = ShoppingCard.reduce((acc, item) => acc + item.price, 0);
console.log("Total Cart Price:", PriceTopay);
// Output: 1929 + 1994 + 1933 = 5856



// | Method     | Use for                                 | Returns                              | Notes             |
// | ---------- | --------------------------------------- | ------------------------------------ | ----------------- |
// | `map()`    | Har element ko transform karna          | New array                            | `return` must     |
// | `filter()` | Condition ke basis pe select karna      | New filtered array                   | true/false return |
// | `reduce()` | Ek single value nikalna (sum, avg, etc) | Single value (number, object, array) | Accumulator logic |


// 🧠 10 Practice Questions (Map, Filter, Reduce)
// Use map() to square all numbers from [1, 2, 3, 4, 5].

// Filter numbers greater than 30 from [10, 20, 30, 40, 50].

// Use reduce() to multiply all elements of [2, 3, 4].

// Create a map() chain to double each number, then subtract 1.

// From an array of strings, use map() to return their lengths.

// Filter out only even numbers using filter() on [1,2,3,4,5,6].

// Use reduce() to count total characters in ["JS", "HTML", "CSS"].

// Create a cart array with 3 items and use reduce() to find total price.

// Write a single chain that maps numbers by 10, filters >50.

// Use map() to add ₹ before prices like [100, 200, 300] → ["₹100", "₹200", "₹300"].