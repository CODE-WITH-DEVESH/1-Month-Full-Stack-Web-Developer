// //ES6

// class User {
//     constructor(username , email, password){
//         this.username= username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password} acb` 
//     }

//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('Dev', 'dev@gmail.com' ,'124')
// console.log(chai.encryptPassword()) 
// console.log(chai.changeUsername()) 

// Inheritance.js


// ✅ ES6 Classes & Inheritance — Full Explanation in Compiler Style (Hindi + English Mix)

// 👨‍💻 Class `User` banayi hai — ek blueprint ya template hai jisse object banta hai
class User {
    constructor(username , email, password){
        // 👇 constructor ke andar hum object ke properties initialize karte hain
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // 👇 Ye ek method hai jo password ko "encrypt" karta hai (yaha sirf dummy logic hai)
    encryptPassword(){
        return `${this.password}acb`;  // e.g. "124acb"
    }

    // 👇 Ye method username ko uppercase mein convert karta hai
    changeUsername(){
        return `${this.username.toUpperCase()}`;  // e.g. "DEV"
    }
}

// ✅ ek object banaya class se
const chai = new User('Dev', 'dev@gmail.com', '124');

// ✅ methods ko call kiya aur output dekha
console.log(chai.encryptPassword());  // Output: 124acb
console.log(chai.changeUsername());   // Output: DEV


// -------------------------------------------------------------
// ✅ Inheritance ka concept: ek class doosri class ke features use kar sakti hai
// 👇 `Admin` naam ki new class bana rahe hain jo `User` class ko extend karti hai

class Admin extends User {
    constructor(username, email, password){
        // 👇 `super()` parent class ka constructor call karta hai
        super(username, email, password);
    }

    // 👇 Admin ke liye ek naya method — sirf admin use kar sakta hai
    deleteUser(){
        return `The user ${this.username} has been deleted.`;
    }
}

// ✅ Admin ka object banaya — inherit hua User se
const admin1 = new Admin('Devesh', 'dev@admin.com', 'super123');

console.log(admin1.encryptPassword());   // Output: super123acb (inherited from User)
console.log(admin1.changeUsername());   // Output: DEVESH (inherited from User)
console.log(admin1.deleteUser());       // Output: The user Devesh has been deleted.


// ------------------------------------------------------------------
// 📚 Viva/Interview Practice Questions:

// 1. `super()` ka kya kaam hai?
//    ➤ `super()` parent class ke constructor ko call karta hai — bina iske derived class ka `this` access nahi kar sakte

// 2. Class ke andar `this` kis cheez ko refer karta hai?
//    ➤ `this` current object ko refer karta hai jo class se create hua hai

// 3. Class ke andar method banane ka syntax kya hai?
//    ➤ methodName() { ... }  // bina function keyword ke

// 4. `extends` ka use kya hai?
//    ➤ ek class ko doosri class se inherit karne ke liye

// 5. Agar koi method parent class me bhi ho aur child class me bhi ho to kaunsa chalega?
//    ➤ Child class ka (Method Overriding hota hai)


// ------------------------------------------------------------------
// 🎯 Bonus Tips:

// ✅ Class ke andar constructor sirf ek hi hota hai
// ✅ Private fields banani ho to '#' lagao (e.g. #password)
// ✅ Inheritance se reusability badhti hai — same code baar baar likhne ki zarurat nahi
// ✅ Methods class ke prototype me store hote hain — memory efficient hota hai
// ✅ Always use `super()` before using `this` in derived class constructor


// 🔥 Object ke andar kisi bhi method ko access karne ke liye dot notation ka use hota hai:
//     objectName.methodName()

