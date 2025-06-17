// 📌 setName ek simple function hai jo this.username ko set karta hai
function setName(username){
    // this ka matlab jis object ke context me yeh function call hoga
    this.username = username;
}

// 📌 createUser ek constructor function hai jo ek new user object banayega
function createUser(username, email, password){

    // ✅ setName ko call karte waqt uska this humara current object ho — isliye .call(this)
    // Agar .call(this) na use karein to this global ya undefined ho sakta hai
    setName.call(this, username); 

    // ab is object par email aur password bhi set kar rahe hain
    this.email = email;
    this.password = password;
}

// 📌 Ab ek new object banate hain using new keyword
const dev = new createUser("atul", "dksbaghel4@gmail.com" , "124");

// ✅ Output dekhte hain: dev object ke andar username, email, password aayenge
console.log(dev);

// -------------------------------------------
// 🔍 OUTPUT:
/*
createUser {
  username: 'atul',
  email: 'dksbaghel4@gmail.com',
  password: '124'
}
*/

// -------------------------------------------
// 🎯 COMPLETE EXPLANATION INSIDE THIS COMPILER:
// 1. setName function reusable banaya gaya hai
// 2. createUser function mein .call(this) use karke setName ka this context change kiya gaya
// 3. new keyword se ek naya object bana, jo this ke andar sab assign karta hai

// -------------------------------------------
// ❓ INTERVIEW ME POOCHHE JA SAKTE HAIN:
// Q1: .call() ka kya use hai? -> kisi aur function ka context change karne ke liye
// Q2: this kya hota hai JS me? -> jis object ke andar function call hota hai usi ko refer karta hai
// Q3: Agar .call(this) na likhein to kya hoga? -> this undefined ya global ho jayega, username set nahi hoga
// Q4: Constructor function aur regular function me kya difference hai?
// Q5: .call(), .apply(), .bind() me kya farq hai?

// -------------------------------------------
// 💡 BONUS TIPS:
// 👉 setName ko alag function banane se reusability badhti hai
// 👉 .call(this) se kisi bhi function ka this manually control kar sakte hain
// 👉 JavaScript me "new" keyword se ek blank object banta hai, jisme this properties add karta hai
