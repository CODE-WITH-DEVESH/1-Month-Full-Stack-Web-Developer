// class User {
//     constructor(username){
//         this.username =username

//     }
//     logme(){
//         console.log(`USSSSSERNAME IS ${this.username}`)
//     }
// }
// class Teacher extends User{
//     constructor(username , email, password){
//         super(username)
//         this.email= email
//         this.password = password
//     }

//     addCouser(){
//         console.log(`A New Course Was Added by ${this.username}`)

//     }
// }

// const chai = new Teacher("Dev" , "dksbaghel@gmail.com", "124")

// const dev = new User ("dev")
// dev.logme()
// chai .addCouser()




// ✅ ES6 Class Inheritance — Teacher Extending User (Compiler Style with Full Explanation)

// 👨‍🏫 Base Class — User
class User {
    constructor(username){
        // 👇 constructor automatically call hota hai jab new object banate hain
        this.username = username;
    }

    // 👇 method logme: user ka username print karega
    logme(){
        console.log(`USSSSSERNAME IS ${this.username}`);
    }
}

// 👨‍🏫 Derived Class — Teacher (inherits from User)
class Teacher extends User {
    constructor(username, email, password){
        // 👇 super() parent class ka constructor call karta hai
        super(username); // NOTE: super ke bina this.username set nahi hoga
        this.email = email;
        this.password = password;
    }

    // 👇 method addCourse: ek course add karne ka simulation
    addCouser(){
        console.log(`A New Course Was Added by ${this.username}`);
    }
}

// ✅ Object 1: Teacher class ka
const chai = new Teacher("Dev", "dksbaghel@gmail.com", "124");

// ✅ Object 2: User class ka
const dev = new User("dev");

// ✅ User class ka method call
dev.logme(); // Output: USSSSSERNAME IS dev

// ✅ Teacher class ka method call
chai.addCouser(); // Output: A New Course Was Added by Dev

// 🔥 BONUS: Teacher ka object chai — User ke method bhi access kar sakta hai
chai.logme(); // Output: USSSSSERNAME IS Dev (inherited from User)


// --------------------------------------------------------------------
// 📘 Viva / Interview Questions:

// 1️⃣ super() ka kya kaam hai?
//    ➤ `super()` parent class ka constructor call karta hai (User class ka).

// 2️⃣ Agar hum `super()` nahi likhte to kya hota?
//    ➤ JavaScript error dega: "Must call super constructor in derived class before accessing 'this'".

// 3️⃣ JavaScript me inheritance kaise hoti hai?
//    ➤ `class Child extends Parent` syntax se inheritance hoti hai.

// 4️⃣ Agar koi method parent aur child dono me ho, kaunsa chalega?
//    ➤ Child class ka — method overriding ho jata hai.

// 5️⃣ Agar koi method sirf parent class me hai to kya child class usko access kar sakti hai?
//    ➤ Haan, child class us method ko directly access kar sakti hai via inheritance.


// --------------------------------------------------------------------
// 💡 BONUS TIPS:

// ✅ `extends` use karte waqt hamesha `super()` use karo constructor ke andar
// ✅ `this` tabhi accessible hota hai jab `super()` call ho chuka ho
// ✅ Parent class ke methods ko directly access kar sakte ho via child class object
// ✅ Ye concept OOP ke "Inheritance" pillar ka real example hai
// ✅ Methods class ke `prototype` chain me store hote hain — efficient memory usage

