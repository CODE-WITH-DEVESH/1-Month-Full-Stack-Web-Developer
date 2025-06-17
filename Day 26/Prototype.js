// let MyHeros =["Thor" , "Spiderman"]

// let heroPower ={
//     thor: "Heammer",
//     spiderman : "Sling",

//     getSpiderPower:function (){
//         console.log(`Spidey Power is ${this.spiderman}`)
//     }
// }

// Object.prototype.devesh =function(){
//     console.log(`Devesh is present All Objects`)

// }

// Array.prototype.HeyDevesh=function(){
//     console.log(`Devesh says Hello`)
// }
// heroPower.devesh()
// // MyHeros.devesh()
// MyHeros.HeyDevesh()


// // Inheritance


// const user ={
//     name :'Atul',
//     email: 'goole@gmail.com'
// }

// const Teacher ={
//     makeVideo : true
// }

// const TeachingSupport={
//     isAvailable : false
// }

// const TASupport ={
//     makeAssighmnet : 'JS ASS',
//     fulTime : true,
//     __prot__ :TeachingSupport
// }

// Teacher.__prot__=user


// // Modern Syntax 
// Object.setPrototypeOf(TeachingSupport,Teacher)



// let anothername = "Devesh          "
// String.prototype.trueLengh = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`True Lenght is :${this.trim().length}`)
    
// }
// anothername.trueLengh()
// "Dvehsbaghe".trueLengh()
// "icetad".trueLengh()














let MyHeros = ["Thor", "Spiderman"]


// ✅ `MyHeros` ek array hai jisme do superheros ke naam store hain.




// let heroPower = {
//     thor: "Heammer",
//     spiderman: "Sling",

//     getSpiderPower: function () {
//         console.log(`Spidey Power is ${this.spiderman}`)
//     }
// }
// ```

// ✅ `heroPower` ek object hai jisme superheroes ke powers diye gaye hain.
// ✅ `getSpiderPower` ek method hai jo `this.spiderman` ka use karke output deta hai.

// ---

// ```js
// Object.prototype.devesh = function () {
//     console.log(`Devesh is present All Objects`)
// }
// ```

// ✅ Ye **prototype chaining ka real magic** hai.

// * Humne `Object.prototype` pe ek function add kiya `devesh()`.
// * Iska matlab hai **sabhi objects** (arrays, functions, strings, etc.) is method ko use kar sakte hain.
// * **Sab kuch JS mein object se inherit hota hai**.

// ---

// ```js
// Array.prototype.HeyDevesh = function () {
//     console.log(`Devesh says Hello`)
// }
// ```

// ✅ Is line mein humne **sirf Array objects** ke liye ek method `HeyDevesh()` banaya hai.
// ✅ Ab **sirf arrays** hi isko call kar paayenge.

// ---

// ```js
// heroPower.devesh()
// // MyHeros.devesh()
// MyHeros.HeyDevesh()
// ```

// ✅ `heroPower.devesh()` chalega kyunki wo ek object hai, aur `devesh()` method sab objects ke paas available hai.

// ✅ `MyHeros.HeyDevesh()` bhi chalega kyunki wo ek array hai, aur `HeyDevesh()` method sirf array ke prototype mein hai.

// ✅ Agar `MyHeros.devesh()` call karoge to bhi chalega (kyunki array bhi object se inherit karta hai).

// ---

// ## 🔥 INHERITANCE Section

// ```js
// const user = {
//     name: 'Atul',
//     email: 'goole@gmail.com'
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssighmnet: 'JS ASS',
//     fulTime: true,
//     __prot__: TeachingSupport
// }

// Teacher.__prot__ = user
// ```

// ### 🔍 Kya ho raha hai yahaan?

// * `TASupport` ka prototype `TeachingSupport` hai.
// * `Teacher` ka prototype `user` hai.
// * Yah **manual inheritance** hai. Lekin `__prot__` galat likha gaya hai — correct hoga `__proto__`.

// ---

// ```js
// // ✅ Modern Inheritance Way
// Object.setPrototypeOf(TeachingSupport, Teacher)
// ```

// ✅ `TeachingSupport` ab `Teacher` ka child ban gaya hai using modern syntax.

// ---

// ## 🔍 String Prototype Pe Method Add Karna

// ```js
// let anothername = "Devesh          "

// String.prototype.trueLengh = function () {
//     console.log(`${this}`);                // string itself
//     console.log(`${this.name}`);           // undefined
//     console.log(`True Length is :${this.trim().length}`) // removes spaces and gives real length
// }
// ```

// ✅ `trueLengh()` ek custom method hai jo **string ka actual length** batata hai (without trailing spaces).


anothername.trueLengh()
"Dvehsbaghe".trueLengh()
"icetad".trueLengh()


// ✅ Ye teen call ab custom string method use kar rahe hain.

// ---

// ## 🧠 INTERVIEW KE 10 MOST IMPORTANT QUESTIONS

// 1. What is prototype in JavaScript?
// 2. Can you modify the prototype of built-in objects? Is it a good practice?
// 3. What is the difference between `__proto__` and `prototype`?
// 4. Explain prototype chaining with an example.
// 5. What does `Object.setPrototypeOf()` do?
// 6. How does inheritance work in JavaScript?
// 7. What is the output of calling a method defined on `Object.prototype` from an array?
// 8. Can we add methods to Array only and not affect Object?
// 9. What is the output of calling `this` inside a method?
// 10. What is the risk of modifying built-in prototypes like `String.prototype`?

// ---

// ## 💡 BONUS TIPS:

// ```js
// // Kabhi bhi production code mein Object.prototype ko direct modify mat karo.
// // Ye sab polyfills ya framework-level pe carefully use hote hain.
// // Interview mein confidently bolna: "Prototype chaining is JavaScript's inheritance model"
// ```

// ---

