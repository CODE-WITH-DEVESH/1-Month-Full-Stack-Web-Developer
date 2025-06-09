// const mysym =Symbol("key1")
// const DSJser ={
//     name: "Devesh",
//     "full name" : "Devesh Kumar Singh Baghel",
//     age:19,
//     email: "dksbaghelGmail.com",
//     [mysym]: "mykey1",
//     location : "jaipur"
// }
// console.log(DSJser.name)
// console.log(DSJser[mysym]) 
// console.log(DSJser["full name"])
// console.log(typeof DSJser[mysym]) 
// DSJser.email ="google@gmail.com"
// console.log(DSJser.email)
// // Object.freeze(DSJser)
// DSJser.email ="googleee@gmail.com"

// console.log(DSJser.email)
// console.log(DSJser)

// DSJser.greeting =function() {
//     console.log("Hello DS USERS HoW ARE YOU TODAY")
// };
// // console.log(DSJser.greeting())
// DSJser.greetingtwo =function(){
//     console.log(`Hello my Name is ${this.name}`)
    
// }
// // console.log(DSJser.greetingtwo())
// DSJser.greeting()
// DSJser.greetingtwo()

// // Important Practice Questions on Object Literals

// Create an object student with properties:

// name: "Ravi"

// rollNo: 101

// marks: [78, 85, 90]
// Add a method getAverage() to calculate and return the average marks.

// const student = {
//     name: "Ravi",
//     rollNo: 101,
//     marks: [70, 85, 90],
    
//     getAverage: function () {
//         let total = this.marks.reduce((sum, mark) => sum + mark, 0);
//         return total / this.marks.length;
//     }
// };

// console.log("Student Name:", student.name);
// console.log("Roll No:", student.rollNo);
// console.log("Marks:", student.marks);
// console.log("Average Marks:", student.getAverage());
// const navbar = (company) => {
//     console.log(`Navbar called by ${company}`);
// }
// navbar("Devesh")


//  object literal 

const tinderUser ={}

tinderUser.id = "124cd"
tinderUser.name = "Devehs"
tinderUser.isLoggedIN = false
console.log(" Tinder User :" , tinderUser)

const regularUser ={
    email: "google.com",
    fullName:{
        username:{
            firstname : "Dvesh",
            lastName: " BAghel"

        }
    }
}

console.log(regularUser.fullName.username.firstname)

const obje1 ={ 1: "a" , 2: "b" , 3: "c"}
const obje2 ={ 2: "e" , 2: "f" , 3: "g"}
const obje3 ={ 3: "h" , 2: "m" , 3: "l"}
const margedOBj = Object.assign({} , obje1 ,obje2 , obje3)
console.log(margedOBj)
const margedOBj2 = {...obje1 , ...obje2,... obje3}
console.log(margedOBj2)


const user =[
    {id : 1, email: "Dev1@gmail.com"},
    {id : 2, email: "Dev2@gmail.com"},
    {id : 3, email: "Dev3@gmail.com"}
]
console.log(user[0].email)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIN'))


const course ={
    courseName : " JS IN HINDI",
    price : 999,
    courseInstructor : "DEv"


}
const { courseInstructor : instructor} =course
console.log(instructor)

const navbar =(company)=>{
 console.log(`Navbar called by ${company}`)
}
navbar("Atul")


// What is the difference between object literals {} and Object.create(null) in JavaScript?

// The difference between `object literals {}` and `Object.create(null)` in JavaScript lies in the **prototype chain and inherited properties**.

// ---

// ### 🔹 1. **`{}` (Object Literal)**

// When you create an object like this:

// ```javascript
// const obj = {};
// ```

// It is the same as:

// ```javascript
// const obj = Object.create(Object.prototype);
// ```

// So it **inherits from `Object.prototype`**, which means it comes with built-in methods like:

// ```javascript
// obj.toString();
// obj.hasOwnProperty();
// obj.valueOf();
// ```




// // ✅ **Good for general use**, where you want those default methods.

// // ---

// // ### 🔹 2. **`Object.create(null)`**

// // When you create an object like this:

// // ```javascript
// // const obj = Object.create(null);
// // ```

// // This object has **no prototype**, meaning:

// // * It **does not inherit** anything from `Object.prototype`.
// // * No default methods like `toString()`, `hasOwnProperty()` exist on it.
// // * It's a **pure object** — very clean.

// // ✅ **Best for:**

// // * Creating a **dictionary/map-like structure**.
// // * Avoiding name collisions with inherited properties.

// // ---

// // ### 🔍 Example Comparison:

// // ```javascript
// // const objLiteral = {};
// // const objNull = Object.create(null);

// // console.log(objLiteral.toString);  // [Function: toString]
// // console.log(objNull.toString);     // undefined

// // console.log(objLiteral.hasOwnProperty);  // [Function: hasOwnProperty]
// // console.log(objNull.hasOwnProperty);     // undefined
// // ```

// // ---

// // ### 📌 Summary:

// // | Feature                     | `{}` (Object Literal)    | `Object.create(null)` |
// // | --------------------------- | ------------------------ | --------------------- |
// // | Inherits from Object        | ✅ Yes                    | ❌ No                  |
// // | Has built-in methods        | ✅ Yes (`toString`, etc.) | ❌ No                  |
// // | Risk of key conflicts       | ⚠️ Yes (like `toString`) | ✅ No                  |
// // | Ideal for dictionaries/maps | ❌ Not ideal              | ✅ Perfect fit         |

// // Let me know if you want a visual diagram or want me to demonstrate a use-case with code.







// ✅ Question:
// How can you check if a specific property exists in an object?

// 👇 Practice it using any of these approaches:
// Using the in operator
// (e.g. "key" in object)

// Using .hasOwnProperty() method
// (e.g. object.hasOwnProperty("key"))

// Checking if property is not undefined
// (e.g. object.key !== undefined)

// Using Object.keys() + .includes()
// (e.g. Object.keys(object).includes("key"))







// Question:
// What is the difference between Object.assign() and the spread operator {...} when copying or merging objects?

// 🧠 Explore these points in code to find the differences:
// Syntax and readability:

// One is a function call, the other is syntactic sugar.

// Which one looks cleaner for shallow merges?

// Shallow Copy:

// Both do shallow copies.

// What happens if the object has nested properties?

// Merging behavior:

// Try merging obj1 and obj2 where both have the same key.

// Which one takes precedence?

// Copying into an existing target:

// One allows defining the target object explicitly.

// The other creates a new object.

// Prototype handling:

// Try copying an object with a prototype chain.

// Which one preserves only own enumerable properties?

// 🧪 Try this as a small experiment:
// js
// Copy
// Edit
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// // Try both methods here:
// // const result1 = Object.assign(...)
// // const result2 = {...}










// What does Object.freeze() do in JavaScript, and how is it different from Object.seal()?

// 🔍 Think about and test these key concepts in code:
// Mutability:

// Try changing properties after applying both methods.

// What happens if you try: object.name = "new"?

// Adding New Properties:

// Try adding a new key like object.newKey = 123 after sealing or freezing.

// Does it work?

// Deleting Existing Properties:

// Try delete object.name after freezing or sealing.

// Observe the difference.

// Writable vs Configurable:

// Use Object.getOwnPropertyDescriptors(object) to check property attributes.

// Which one makes properties non-writable and non-configurable?

// Strict Mode Behavior:

// Try modifying sealed/frozen objects in strict mode.

// Does JavaScript throw an error?


// const user = {
//   name: "Devesh",
//   age: 22
// };

// Object.freeze(user);
// // Object.seal(user); // Try this instead and compare

// user.name = "Atul";
// user.city = "Bareilly";
// delete user.age;

// console.log(user);













// To **iterate over all the properties of an object in JavaScript**, you can use several methods depending on whether you want:

// * Only **own properties**
// * Both **enumerable** and **non-enumerable**
// * **Symbols** included or not

// Here are the **most common ways** to iterate:

// ---

// ### ✅ 1. `for...in` loop

// Iterates over **enumerable** properties (including inherited ones).

// ```javascript
// const user = {
//   name: "Devesh",
//   age: 22
// };

// for (let key in user) {
//   console.log(`${key} : ${user[key]}`);
// }
// ```

// ---

// ### ✅ 2. `Object.keys()` + `forEach`

// Iterates over **own enumerable string properties only**.

// ```javascript
// Object.keys(user).forEach(key => {
//   console.log(`${key} : ${user[key]}`);
// });
// ```

// ---

// ### ✅ 3. `Object.entries()`

// Gets both key and value as an array of `[key, value]` pairs.

// ```javascript
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key} : ${value}`);
// }
// ```

// ---

// ### ✅ 4. `Object.getOwnPropertyNames()`

// Includes **non-enumerable** string-keyed own properties.

// ```javascript
// Object.getOwnPropertyNames(user).forEach(key => {
//   console.log(`${key} : ${user[key]}`);
// });
// ```

// ---

// ### ✅ 5. `Reflect.ownKeys()`

// Returns all keys (including **Symbols** and **non-enumerables**).

// ```javascript
// Reflect.ownKeys(user).forEach(key => {
//   console.log(`${key.toString()} : ${user[key]}`);
// });
// ```

// ---

// ### 📝 Practice Questions

// 1. How do you loop through both keys and values in an object?
// 2. Which method includes symbol properties too?
// 3. How can you iterate only through own (not inherited) properties?
// 4. What’s the difference between `for...in` and `Object.keys()`?
// 5. How do you access non-enumerable properties in iteration?

// Let me know if you want the **answers or a quiz format**!
