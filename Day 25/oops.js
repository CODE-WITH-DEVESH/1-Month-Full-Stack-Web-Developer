// const user ={
//     username : "Devesh",
//     loginCount: 8,
//     singendIN: true,

//     getUserDetalis : function(){
//         console.log('Get User Detalis from database')
//         console.log(`UserName : ${this.username}`)
//         console.log(this)

//     }
    
// }
// console.log(user.getUserDetalis())
// console.log(this)




// const PromsieONe = new Promise()
// const date = new Date ()


// function User ( usernmae ,loginCount, isLoggedIN){
//     this.username =usernmae
//     this.loginCount =loginCount
//     this.isLoggedIN= isLoggedIN

//     return this
// }

// const userOne = new User("ATul", 12, true)
// const usertow = new User("Dev", 16, false)
// console.log(userOne.constructor);

// console.log(userOne)
// console.log(usertow)












// // ✅ Step 1: Simple Object with Method
// const user = {
//     username: "Devesh",         // property 1
//     loginCount: 8,              // property 2
//     singendIN: true,            // property 3

//     // ✅ Method using this
//     getUserDetalis: function () {
//         console.log('Get User Details from database');
//         console.log(`UserName : ${this.username}`); // this.username => user object ka username
//         console.log(this); // current object ko show karega
//     }
// };

// console.log(user.getUserDetalis());  // function ko call kiya
// console.log(this);  // top-level 'this' → browser mein window object hota hai


// ---

// ### 🔍 Explanation (Step 1):

// * `user` ek normal JS object hai jisme 3 properties hai: username, loginCount, signedIn.
// * `getUserDetalis()` ek method hai jo `this.username` se usi object ka `username` print karta hai.
// * `this` ka matlab hai "jis object ne function call kiya hai".
// * Jab `user.getUserDetalis()` call hota hai, `this = user` hota hai.
// * `console.log(this)` agar function ke bahar likha hai toh ye global object (browser mein `window`) ko point karega.

// ---

// ```js
// // ✅ Step 2: Extra examples (but ye code invalid hai):
// const PromsieONe = new Promise()  // ❌ Error dega - Promise constructor ko callback function chahiye
// const date = new Date()           // ✅ This is valid - creates current date-time
// ```


// ### 🔍 Explanation (Step 2):

// * `new Promise()` ka syntax galat hai. Isko ek function dena padta hai:
//   Example: `new Promise((resolve, reject) => {})`
// * `new Date()` correct hai — ye JS ka built-in object hai current date-time ke liye.

// ---

```js
// ✅ Step 3: Constructor Function Banate hain
function User(username, loginCount, isLoggedIN) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

    return this; // ❗Optional — JS default return karta hai 'this'
}

// ✅ Creating Objects using new keyword
const userOne = new User("Atul", 12, true);
const usertow = new User("Dev", 16, false);
```



// ### 🔍 Explanation (Step 3):

// * **User()** ek constructor function hai — iska kaam new user banana hai.
// * **this** har object ke liye alag value set karta hai.
// * Jab hum `new User(...)` likhte hain:

//   * `new` ek empty object banata hai
//   * `this` us object ko point karta hai
//   * properties assign hoti hain
//   * object return hota hai



console.log(userOne.constructor);  // 👇

// Output: [Function: User]
// iska matlab hai userOne ka constructor function User hai.

console.log(userOne);
console.log(usertow);


// ### 🧠 BONUS NOTES:

```js
// ✅ Object Literals se limited users bante hain
// ✅ new + Constructor se multiple users bana sakte ho

// ✅ this => jis object ke through function call hota hai usko point karta hai

// ✅ new Date() => JS ka built-in object hota hai
// ✅ constructor property => object kis se bana uska proof
```

// ---

// ### 📚 10 INTERVIEW QUESTIONS (on this code):

// 1. What is `this` in JavaScript?
// 2. Difference between object literal and constructor function?
// 3. What does `new` keyword do?
// 4. Can we create multiple users using object literals?
// 5. Why do we use constructor functions?
// 6. What is `userOne.constructor` returning?
// 7. What happens if we forget to use `new` keyword?
// 8. How does `this` behave inside an object method vs global scope?
// 9. What is the use of `return this` in constructor?
// 10. What are built-in constructors in JavaScript?

// ---












