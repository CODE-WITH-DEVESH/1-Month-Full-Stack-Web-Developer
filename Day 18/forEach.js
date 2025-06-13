
// const Coding =["JS", "rb", "pY" ,"java","cpp"]


// // Coding.forEach(  function (item) {
// //     console.log(item)
// // })


// // Coding.forEach( (val)=> {
// //     console.log(val)
// // })


// // function prinme(val) {
// //     console.log(val)
// // }
// // Coding.forEach(prinme)

// Coding.forEach( (item , index , arr)=> {

//     console.log( item , index ,arr)
// })


// const myCoding =[
//     {
//         languageName : "JavaScript",
//         languagefileName : "JS",

//     },
//     {
//         languageName : "Java",
//         languagefileName : "Java",

//     },
//     {
//         languageName : "Python",
//         languagefileName : "Py",

//     },
// ]

// myCoding.forEach( (item) =>{
//     console.log(item.languageName)
// })



// Array of strings
const Coding = ["JS", "rb", "pY", "java", "cpp"];

// ✅ Method 1: Anonymous function
// Coding.forEach(function (item) {
//     console.log(item);  // Har item ko print karega
// })

// ✅ Method 2: Arrow function
// Coding.forEach((val) => {
//     console.log(val);
// })

// ✅ Method 3: Function declaration
// function prinme(val) {
//     console.log(val);
// }
// Coding.forEach(prinme);

// ✅ Method 4: Full control with index and array access
Coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    // item: current element
    // index: current index of the element
    // arr: full array reference
    // Output example: "JS" 0 ["JS", "rb", "pY", "java", "cpp"]
});

// ✅ Array of objects
const myCoding = [
    {
        languageName: "JavaScript",
        languagefileName: "JS",
    },
    {
        languageName: "Java",
        languagefileName: "Java",
    },
    {
        languageName: "Python",
        languagefileName: "Py",
    },
];

// forEach loop to access object properties
myCoding.forEach((item) => {
    console.log(item.languageName);  // Har object ka languageName print hoga
});

// 🔍 Hindi + English Explanation:
// forEach() ek array method hai jo array ke har element ke liye ek callback function run karta hai.

// Iske andar teen parameters hotay hain:

// item: current value

// index: uski position (0 se start hoti hai)

// arr: pura array

// Object ke array par bhi forEach() lagta hai aur har object ko access karke uski property read kar sakte ho.



// 🔥 10 Practice Questions (Based on Your Code)
// What are the three parameters that forEach() provides in the callback function?

// Write a function that prints both languageName and languagefileName from myCoding array.

// Can we use break or continue inside forEach()? Why or why not?

// Write a forEach() loop to convert all strings in Coding array to uppercase.

// What is the output of console.log(index) in the forEach() loop?

// How is forEach() different from a traditional for loop?

// Modify the array myCoding to add a new key isPopular: true to each object using forEach().

// Can you return a value from forEach()? Why or why not?

// How do you access the full array inside a forEach() callback?

// Replace the function prinme(val) with an arrow function and get the same result using forEach().


const program = ["JAvaScript" , "Ruby" ,"Java" ,"Python" ]

const value = program.forEach( (item) => {
    console.log(item)
    return item

})
console.log(value)

// | Feature        | forEach()                          | map()                     |
// | -------------- | ---------------------------------- | ------------------------- |
// | Returns value? | ❌ No (returns `undefined`)         | ✅ Yes (returns new array) |
// | Use case       | Side-effects (e.g., print, update) | Data transformation       |
// | Chainable?     | ❌ No                               | ✅ Yes                     |



// ce Questions (forEach & map related)
// Print all elements of ["HTML", "CSS", "JS"] using forEach().

// Count total items in an array using forEach().

// Use map() to convert all elements to uppercase.

// Use forEach() to console.log element + index both.

// Make a new array with all elements ending in 'Lang' (e.g., "JavaLang").

// Compare the return value of map() vs forEach() on [1, 2, 3].

// Make an array of squares using map() (e.g., [1, 4, 9, ...]).

// Try using forEach() with return and check output.

// Chain map() to double, then subtract 1.

// Use forEach() to add all numbers and log the total (use external sum variable).

