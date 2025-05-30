// const tinderUser =new Object()


// const tinderUser ={}

// tinderUser.id ="1245cd"
// tinderUser.name ="Atul"
// tinderUser.isloggendIN = false

// console.log(tinderUser);


// const regularUser ={
//     email:"Google@.com",
//     fullname:{
//         userfullname:{

//             firstName : "Devesh",
//             lastname : "Baghel"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstName);

// const obj1 ={1: "a", 2: "b"}
// const obj2 ={3: "a", 4: "b"}

// const obj3 =Object.assign( {} ,obj1 , obj2)

// const obj3 ={...obj1 , ...obj2}

// console.log(obj3);


// const user=[
//     {
//         id: 1,
//         email:"dev@gmail.com"
//     },
//     {
//         id: 1,
//         email:"dev@gmail.com"
//     },
//     {
//         id: 1,
//         email:"dev@gmail.com"
//     },
//     {
//         id: 1,
//         email:"dev@gmail.com"
//     },
// ]
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIN'));



// Creating an object using new Object() constructor
// const tinderUser = new Object(); // empty object

// OR simply using object literal
const tinderUser = {};

// Adding properties to the object
tinderUser.id = "1245cd";
tinderUser.name = "Atul";
tinderUser.isLoggedIN = false;

console.log("✅ Tinder User:", tinderUser); 


// ✅ Object Creation using Object Constructor
const tinderUser = new Object(); // creates an empty object

// ✅ Or Object Literal way
const tinderUser2 = {}; // also an empty object

// 🔧 Adding properties to object
tinderUser.id = "1245cd";
tinderUser.name = "Atul";
tinderUser.isLoggedIN = false;

console.log("Tinder User:", tinderUser);


// ✅ Nested Object Example
const regularUser = {
    email: "google@.com",
    fullname: {
        userfullname: {
            firstName: "Devesh",
            lastname: "Baghel"
        }
    }
};

// Accessing nested object values
console.log("User's First Name:", regularUser.fullname.userfullname.firstName);


// ✅ Merging Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Method 1: Using Object.assign()
const mergedObj1 = Object.assign({}, obj1, obj2);

// Method 2: Using Spread Operator
const mergedObj2 = { ...obj1, ...obj2 };

console.log("Merged Object with assign:", mergedObj1);
console.log("Merged Object with spread:", mergedObj2);


// ✅ Array of Objects (like database records)
const users = [
    { id: 1, email: "dev1@gmail.com" },
    { id: 2, email: "dev2@gmail.com" },
    { id: 3, email: "dev3@gmail.com" },
    { id: 4, email: "dev4@gmail.com" }
];

// Access specific user's email
console.log("First user's email:", users[0].email);


// ✅ Object Utility Methods

console.log("Object Keys:", Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIN']
console.log("Object Values:", Object.values(tinderUser)); // ['1245cd', 'Atul', false]
console.log("Object Entries:", Object.entries(tinderUser)); // [['id', '1245cd'], ...]

console.log("Has 'isLoggedIN'?", tinderUser.hasOwnProperty('isLoggedIN')); // true
console.log("Has 'password'?", tinderUser.hasOwnProperty('password')); // false


// What is the difference between object literals {} and Object.create(null) in JavaScript?

// How can you check if a specific property exists in an object?

// What is the difference between Object.assign() and the spread operator {...} when copying or merging objects?

// What does Object.freeze() do in JavaScript, and how is it different from Object.seal()?

// How can you iterate over all the properties of an object in JavaScript?

