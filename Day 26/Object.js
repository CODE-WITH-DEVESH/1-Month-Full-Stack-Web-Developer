// function Mutipleby5(num){
//     return num *5
// }
// Mutipleby5.power =2

// console.log(Mutipleby5(5))
// console.log(Mutipleby5.power)
// console.log(Mutipleby5.prototype)


// function crateUser( username, score){
//     this.username =username
//     this.score =score
// }

// crateUser.prototype.increment =function(){
//     this.score++
// }

// crateUser.prototype.printMe =function(){
//     console.log(`score is ${this.score}`)

// }

// const chai = new crateUser("chai" , 20)
// const tea = new crateUser("tea" , 204)


// chai.printMe()




// ✅ Ek simple function banaya jo kisi bhi number ko 5 se multiply karega
function Mutipleby5(num) {
    return num * 5;
}

// ✅ Humne function par ek custom property add ki: power
Mutipleby5.power = 2;

// ✅ Function call kar rahe hain
console.log(Mutipleby5(5)); // Output: 25

// ✅ Access kar rahe hain function ke upar defined property ko
console.log(Mutipleby5.power); // Output: 2

// ✅ Function ka prototype dekha — yeh tab kaam aata hai jab function se object banate hain using `new`
console.log(Mutipleby5.prototype); // Output: {}

// -----------------------------------------------------
// 👇 Ab ek constructor function banate hain for creating user objects

function crateUser(username, score) {
    this.username = username; // har user ke liye unique username
    this.score = score;       // har user ke liye unique score
}

// ✅ Prototype pe ek method add kar rahe hain: increment
// har user ka score +1 karega
crateUser.prototype.increment = function () {
    this.score++;
};

// ✅ Prototype pe dusra method: printMe
// user ka score print karega
crateUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
};

// ✅ Ab do naye users bana rahe hain using new keyword
const chai = new crateUser("chai", 20);
const tea = new crateUser("tea", 204);

// ✅ Method ko call karte hain
chai.printMe(); // Output: Score is 20

// -----------------------------------------------------
// 📘 EXPLANATION / NOTES:

/*
🔸 JavaScript mein function bhi ek object hota hai — isliye hum usme property (power) daal sakte hain.
🔸 Function.prototype tab use hota hai jab hum function ko constructor bana kar `new` keyword se object banate hain.
🔸 crateUser ek constructor function hai — jisme prototype pe common methods define kiye gaye hain (reusability).
🔸 `new crateUser(...)` se har bar ek naya object banta hai jisme `username` aur `score` alag hota hai, par methods shared hote hain.

🧠 ADVANTAGE:
-- Prototype use karne se memory save hoti hai, har object ke liye nayi copy nahi banti methods ki.
-- Ek bar method banado prototype pe, sab objects use kar sakte hain.

👨‍💻 INTERVIEW QUESTIONS:
1. Function ke upar custom property kaise add karte hain?
2. prototype kya hota hai JavaScript mein?
3. Object.create vs new Constructor() me kya difference hai?
4. Prototype chain kaise kaam karti hai?
5. Agar ek object me same naam ka method aur prototype me bhi ho to kaunsa chalega?

*/

// -----------------------------------------------------
// 💡 BONUS TIPS:
/*
👉 Tum apne har constructor function me methods define karne ke bajaye prototype pe likho — best practice hai.
👉 JavaScript me "everything is object" concept deeply samjho — function bhi object hai.
👉 Custom function properties jaise Mutipleby5.power ka use tab hota hai jab tum function ko static property ke jaisa treat karte ho.
👉 "prototype" ke andar tum har aise method daal sakte ho jo baar-baar use hone wale hain multiple objects ke liye.
*/

// ✅ Interview / Viva / Practice Questions:
// super() ka kya kaam hota hai class ke andar?
// ➤ super() parent class ka constructor call karta hai — bina iske this use nahi kar sakte derived class ke andar.

// JavaScript me inheritance kaise achieve karte hain?
// ➤ Class ke andar extends use kar ke ek class doosri class se inherit karti hai.

// Method override kaise karte hain?
// ➤ Derived class (jaise Teacher) me parent ka same method name likh ke override kar sakte hain.

// Difference between constructor, super, and this?

// constructor: object create hone par call hota hai.

// super: parent class ke constructor/methods ko call karta hai.

// this: current object ke properties ko refer karta hai.

// Agar parent class ka method child class me available hai to kaise call karte ho?
// ➤ Directly object ke through call kar sakte ho. Inheritance ke wajah se parent ke methods bhi mil jate hain.