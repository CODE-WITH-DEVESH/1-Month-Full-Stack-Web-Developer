// class User {
//     constructor (email , password){
//         this.email = email
//         this.password =password
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         return this._email = value
//     }
    
//     get password(){
//      return this._password.toUpperCase()

//     }

//     set password(value){
//         this._password = value
//     }
// }

// const devesh = new User("Dev@gmaol.com" , "kbhikfbhhik")
// console.log(devesh.password)
// console.log(devesh.email)

// // Objects se 

// const Students ={
//     _email: "h@gmail.com",
//     _password: "afj",


// get email(){
//     return this._email.toUpperCase()

// },

// set email(value){
//     this._email =value
// }

// }
// // console.log(Students.email)

// const tea = Object.create(Students)
// console.log(tea.email);



// 📘 JavaScript: Getters and Setters (Class & Object) Explained Clearly

// ✅ CLASS Example Using Getter and Setter
class User {
    constructor(email, password) {
        this.email = email           // ✅ uses setter → sets this._email
        this.password = password     // ✅ uses setter → sets this._password
    }

    // 🧠 Getter for email
    get email() {
        return this._email.toUpperCase()   // returns email in uppercase
    }

    // 🛠 Setter for email
    set email(value) {
        this._email = value
    }

    // 🧠 Getter for password
    get password() {
        return this._password.toUpperCase() // returns password in uppercase
    }

    // 🛠 Setter for password
    set password(value) {
        this._password = value
    }
}

// ✅ Creating a new instance of User
const devesh = new User("Dev@gmaol.com", "kbhikfbhhik")

console.log(devesh.password)  // Output: KBHIKFBHHIK
console.log(devesh.email)     // Output: DEV@GMAOL.COM

// 🔍 Explanation:
// ➤ this.email = value ➜ uses setter and sets `this._email`
// ➤ this.password = value ➜ sets `this._password`
// ➤ When accessed (devesh.email), getter returns uppercase version


// ✅ OBJECT Literal Example Using Getter and Setter
const Students = {
    _email: "h@gmail.com",
    _password: "afj",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

// 🧪 Creating a new object `tea` using prototype inheritance
const tea = Object.create(Students)

console.log(tea.email)  // Output: H@GMAIL.COM

// 🔍 Why it works?
// ➤ `tea` inherits from `Students`, so even if it has no own properties,
//    JS looks up in the prototype chain and finds the getter for `email`.

// 🧠 INTERVIEW TIPS / QUESTIONS:

// 1️⃣ Why use getters and setters?
//    ➤ To control access to properties, add logic (e.g., validation, transformation).

// 2️⃣ Why is underscore _ used?
//    ➤ To differentiate between the actual data (_email) and the getter/setter (email).

// 3️⃣ What does `Object.create()` do?
//    ➤ Creates a new object and links it to the prototype of the given object.


// ✅ BONUS:
// Try this 👇
// tea.email = "newemail@pro.com"
// console.log(tea.email) ➜ Should print: NEWEMAIL@PRO.COM



// 📘 GETTER & SETTER in JavaScript — Devesh Style Explainer with Practice

// 🧠 Pehle yeh samajh le: 
// Jab hum kisi property ko directly access karte hain ya set karte hain,
// hum chahte hain kuch logic bhi uske saath chale, jaise validation ya uppercase banana.
// Tabhi hum getter aur setter use karte hain.

// -------------------------------------
// ✅ 1. CLASS ke through Getter & Setter
// -------------------------------------
class User {
    constructor(email, password) {
        this.email = email         // yeh setter call karega (line 18)
        this.password = password   // yeh bhi setter call karega (line 23)
    }

    // 📩 Get email → jab bhi devesh.email likhenge, yeh chalega
    get email() {
        return this._email.toUpperCase(); // Capital mein return karega
    }

    // ✉️ Set email → jab email assign karenge, yeh chalega
    set email(value) {
        this._email = value;  // andar internally _email naam se store kar liya
    }

    // 🔐 Get password
    get password() {
        return this._password.toUpperCase(); // Capital mein
    }

    // 🔑 Set password
    set password(value) {
        this._password = value;  // normal store kar liya
    }
}

// 🧪 Create User
const devesh = new User("Dev@gmaol.com", "mypassword");

// ✅ Dekho output
console.log(devesh.email);     // DEV@GMAOL.COM
console.log(devesh.password);  // MYPASSWORD


// -------------------------------------
// ✅ 2. OBJECT ke through Getter & Setter
// -------------------------------------
const Students = {
    _email: "h@gmail.com",
    _password: "afj",

    get email() {
        return this._email.toUpperCase();  // Capitalized version return
    },

    set email(value) {
        this._email = value; // internally store
    }
}

// 🔍 Inheritance ke through ek naya object banaya
const tea = Object.create(Students);

// ✅ Dekho result
console.log(tea.email); // Output: H@GMAIL.COM


// -------------------------------------
// ✅ PRACTICE QUESTIONS 🧠
// -------------------------------------

// ❓ Q1. `get` aur `set` kis cheez ke liye use hote hain?
// ✅ Ans: Jab hume kisi property ko access ya set karte waqt kuch extra kaam karna ho 
// (jaise uppercase karna, validation, etc.)

// ❓ Q2. `this._email` aur `this.email` mein kya fark hai?
// ✅ Ans: `this.email` setter ko call karta hai, `this._email` actual data ko represent karta hai.

// ❓ Q3. kya hum class ke bahar getter use kar sakte hain?
// ✅ Ans: Haan, object literal mein bhi getter/setter use hota hai (jaise Students object).

// ❓ Q4. `Object.create()` kya karta hai?
// ✅ Ans: Naya object banata hai jo kisi dusre object ko inherit karta hai (prototyping).

// ❓ Q5. agar hum `console.log(Object.keys(Students))` likhen to kya email dikhega?
// ✅ Nahi, kyunki getter/setter enumerable nahi hote by default.


// -------------------------------------
// ✅ BONUS PRACTICE 👇
// -------------------------------------

// 👇 Try this:
devesh.email = "baghel@gmail.com"  // setter chalega
console.log(devesh.email);         // getter chalega → BAGHEL@GMAIL.COM

tea.email = "newemail@gmail.com"   // Students ke setter chalega
console.log(tea.email);            // → NEWEMAIL@GMAIL.COM

// 🧠 Yeh kaafi useful hota hai real world mein jab data format ya validation control karna ho

// -------------------------------------
