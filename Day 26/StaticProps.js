// class User {
//     constructor(UserName){
//         this.UserName = UserName

//     }
//     logMe(){
//         console.log(`Usernmae : ${this.UserName}`)
//     }
//     CreateID(){
//         return '123'
//     }
// }

// const dev = new User("Devehs")
// console.log(dev.CreateID())

// class Teacher extends User {
//     constructor(username,email){
//         super(username)
//         this.email=email
//         // this.username =username
//     }
// }

// const ip = new Teacher("Dveesh" , "Deves@gmail.com")
// console.log(ip)


// ✅ Ye ek class hai jiska naam hai `User` — ye ek blueprint hai object banane ke liye
class User {
    // 🔹 constructor: jab bhi new object banega, ye function automatically call hoga
    constructor(UserName){
        this.UserName = UserName; // object ka property set kar rahe hain
    }

    // 🔹 logMe: ek method hai jo user ka naam print karega
    logMe(){
        console.log(`UserName : ${this.UserName}`);
    }

    // 🔹 CreateID: ye bhi ek method hai — har user ka ek ID generate karta hai
    // NOTE: sab users ke liye ye same ID de raha hai abhi
    CreateID(){
        return '123';
    }
}

// ✅ Ab ek object bana rahe hain class se — using `new` keyword
const dev = new User("Devehs");

// ✅ dev ka method call kar rahe hain
console.log(dev.CreateID()); // Output: 123

// --------------------------------------------------------------
// 👇 Ab ek new class banayi: `Teacher` jo `User` class se inherit kar rahi hai

class Teacher extends User {
    // 🔹 constructor: jab bhi Teacher ka object banega, ye chalega
    constructor(username, email){
        // 🔹 super(): parent class (User) ka constructor call karta hai
        super(username); // ye this.UserName = username ka kaam karta hai
        this.email = email; // Teacher class ka extra property
    }
}

// ✅ Teacher ka object banaya
const ip = new Teacher("Dveesh", "Deves@gmail.com");

// ✅ Object print kar rahe hain
console.log(ip); // Output: Teacher { UserName: 'Dveesh', email: 'Deves@gmail.com' }


// 1️⃣ agar kisi method ko sabhi inherited classes me alag alag define karna hai, use override karo.
// 2️⃣ super() hamesha constructor ke andar sabse pehle likhna hota hai.
// 3️⃣ Class-based inheritance modern JS me clean aur readable code ke liye best hota hai.
// 4️⃣ Always use `class` with `extends` instead of messing with prototype chains manually.
// 5️⃣ Object creation ke liye `new` lagana zaruri hai, warna constructor properly execute nahi hoga.
