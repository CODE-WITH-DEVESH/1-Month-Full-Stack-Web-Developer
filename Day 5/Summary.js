// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// Non-Primitive Data Types

//  Object Array  Function Date
//  🧠 Important Points:
// Non-primitive types are passed by reference, not by value.

// Their values are mutable (can be changed).

// All non-primitives are objects at their core (even arrays and functions).


// 1. String
let myName = "Devesh";  // double quotes bhi chalega
console.log(typeof myName);  // string

// 2. Number
let age = 22;
console.log(typeof age);  // number

// 3. BigInt
let bigNumber = 123456789123456789123456789123456789n;
console.log(typeof bigNumber);  // bigint

// 4. Boolean
let isStudent = true;
console.log(typeof isStudent);  // boolean

// 5. Undefined
let x;
console.log(typeof x);  // undefined

// 6. Null
let y = null;
console.log(typeof y);  // object ❗ (JS ka bug hai, actual null hi hai)

// 7. Symbol (unique value create karta hai)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);  // false
console.log(typeof sym1);  // symbol

// 8. Object (Primitive list mein aata hai, lekin yeh non-primitive hota hai actually)
let person = { name: "Devesh", age: 22 };
console.log(typeof person);  // object


// 1. Object
let user = {
    username: "Devesh",
    course: "MCA"
};
console.log(user.username);  // Devesh

// 2. Array
let friends = ["Atul", "Dev", "Ravi"];
console.log(friends[0]);  // Atul
console.log(typeof friends);  // object

// 3. Function
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Devesh"));  // Hello, Devesh
console.log(typeof greet);  // function

// 4. Date
let today = new Date();
console.log(today);  // prints current date & time
console.log(typeof today);  // object
