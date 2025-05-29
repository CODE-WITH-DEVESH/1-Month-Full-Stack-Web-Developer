// Object Literals

const mysym = Symbol("key1")
const Jsuser ={
    name : "Devesh",
    "full name" : "Devesh Baghel",
    [mysym] :"mykey1",
    age :18,
    location : "Bareilly",
    email:"devesh@google.com",
    isloggedIn :false,
    lastloginDays:["Monday", "Saturday"]

}
console.log(Jsuser.email);
console.log(Jsuser["full name"]);
console.log(Jsuser.mysym);
console.log(typeof Jsuser[mysym]);
console.log(Jsuser[mysym]);

Jsuser.email ="Devesh@gmail.com"
Object.freeze(Jsuser)
Jsuser.email ="Google@gmail.com"
console.log(Jsuser)

Jsuser.greeting =function (){
    console.log("HEllo JS USers");
    
}
Jsuser.greetingtow =function (){
    console.log(`Hello JS USer ${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtow());


// const mysym = Symbol("key1") // Unique symbol banaya
const Jsuser = {
    name: "Devesh",                           // Property using normal key
    "full name": "Devesh Baghel",            // Property with space, must use quotes
    [mysym]: "mykey1",                        // Symbol as a key (use [] for computed key)
    age: 18,
    location: "Bareilly",
    email: "devesh@google.com",
    isloggedIn: false,
    lastloginDays: ["Monday", "Saturday"]
}
console.log(Jsuser.email);              // dot notation
console.log(Jsuser["full name"]);       // bracket notation (used for keys with space)
console.log(Jsuser.mysym);              // ❌ undefined: symbols need brackets
console.log(typeof Jsuser[mysym]);      // ✔️ string
console.log(Jsuser[mysym]);             // ✔️ "mykey1"
Jsuser.email = "Devesh@gmail.com"
Object.freeze(Jsuser)           // Object is now immutable
Jsuser.email = "Google@gmail.com"  // ❌ No effect due to freeze
console.log(Jsuser)

Jsuser.greeting = function () {
    console.log("Hello JS Users");
};

Jsuser.greetingtow = function () {
    console.log(`Hello JS User ${this.name}`); // "this" refers to the object
};

console.log(Jsuser.greeting());      // Calls function and prints message
console.log(Jsuser.greetingtow());   // Prints personalized message
// 5 Important Practice Questions on Object Literals
// ❓ Q1.
// Create an object student with properties:

// name: "Ravi"

// rollNo: 101

// marks: [78, 85, 90]
// Add a method getAverage() to calculate and return the average marks.

// ❓ Q2.
// Use a Symbol as a key in an object called userDetails.
// Assign it a value "secretToken".

// Access and print that value using correct syntax.

// ❓ Q3.
// What will happen if you use Object.freeze() on an object and then try to:

// Change an existing value

// Add a new key

// Delete a key

// Write code and check output.

// ❓ Q4.
// Write an object car with a method start() that prints:
// "The car [brand] is starting..."
// Use this.brand inside the method. Add brand: "Toyota"

// ❓ Q5.
// Create an object library with:

// bookName: "JS Guide"

// author: "John Doe"

// available: true
// Write a method borrowBook() that sets available to false and logs "Book borrowed".