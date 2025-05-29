// const myarr =[0,1,2,3,4,5,6]
// console.log(myarr[2]);

// const myHeors =["Dev" , " Atul"]

// const myarr2 =new Array (1,2,3,4)
// console.log(myarr2[1]);


// // Array Methods
// myarr.push(7)
// myarr.push(8)
// myarr.pop()


// myarr.unshift(0)
// myarr.shift(0)

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

// const newArr =myarr.join()
// console.log(typeof newArr);


// console.log(myarr);


// // Slice ,Splice

// console.log("A",myarr)
// const myn1 =myarr.slice(1 ,3)

// console.log(myn1);
// console.log("B", myarr);

// const myn2 =myarr.splice(1 , 3)
// console.log("C", myarr);
// console.log(myn2);



const myarr = [0, 1, 2, 3, 4, 5, 6]
console.log(myarr[2])  // Index 2 => output: 2

const myHeors = ["Dev", "Atul"]  // String array

const myarr2 = new Array(1, 2, 3, 4)  
console.log(myarr2[1])  // Index 1 => 2

// ✅ Array Methods
myarr.push(7)        // Add 7 to end
myarr.push(8)        // Add 8 to end
myarr.pop()          // Remove last element (8)

myarr.unshift(0)     // Add 0 to beginning
myarr.shift(0)       // Remove first element

console.log(myarr.includes(9))     // false => 9 not present
console.log(myarr.indexOf(3))      // Index of 3 => 3

const newArr = myarr.join()        // Join all elements as comma string
console.log(typeof newArr)         // string

console.log(myarr)                 // Final array after push/pop/unshift/shift

// ✅ Slice & Splice

console.log("A", myarr)            // Original array before slice/splice

const myn1 = myarr.slice(1, 3)     // Slice from index 1 to 2 (3 not included)
console.log(myn1)                  // New array [1, 2]
console.log("B", myarr)            // Original array not changed

const myn2 = myarr.splice(1, 3)    // Remove 3 elements from index 1
console.log("C", myarr)            // Original array changed (elements removed)
console.log(myn2)                  // Removed elements



//  Practice Questions (Topic – JavaScript Arrays & Methods)
// ❓ Q1.
// Create an array of 5 fruits.

// Add a fruit at the end

// Remove the first fruit

// Print the final array.

// ❓ Q2.
// Given arr = [10, 20, 30, 40, 50],

// Use slice to get [20, 30]

// Use splice to remove [30, 40]

// ❓ Q3.
// Create an array of names.

// Check if "Ravi" exists using .includes()

// If yes, print its index.

// ❓ Q4.
// Write a function that takes an array of numbers and returns them as a string separated by - using .join().

// ❓ Q5.
// Explain the difference between slice() and splice() using an example array [100, 200, 300, 400, 500].



