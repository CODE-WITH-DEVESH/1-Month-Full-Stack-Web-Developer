// // This and Arrow Functions 

// const user ={
//     usernmae : " Devesh",
//     Price : 999,
//     welcomeMassage : function (){
//         console.log(` ${this.usernmae} , welcome to Web Page`)
//         console.log(this)
//     }

// }
// // this ki value kya aati ha ?

// user.welcomeMassage()
// user.usernmae = "atul"
// user.welcomeMassage()

// console.log(this)



// function dev(){
//     console.log(this)
// }

// dev()


// const arrow =() =>{
//     let username ="devesh"
//     console.log(this.username)
// }
// arrow()

// // ()= > {} 

// const addone = ( num1 , num2 )=>{
//     return num1 + num2 
// }

// console.log(addone(3 , 4))


// const add = ( num1 , num2 )=> num1 + num2 
// const addTwo = ( num1 , num2 )=> (num1 + num2 )
// const objects = ( num1 , num2 )=> ({username : " Devesh"})


// console.log(addTwo(3 , 4))


// const myarray = [ 2,3,4,1,3,5]
// myarray.forEach ()



// This Keyword & Arrow Functions in JavaScript (Explained in Hindi)

// Ek object banaya jiska naam hai user
const user = {
    usernmae: "Devesh",
    Price: 999,

    // welcomeMassage ek method hai jisme 'this' use ho raha hai
    welcomeMassage: function () {
        console.log(`${this.usernmae}, welcome to Web Page`)
        console.log(this)  // Yeh 'this' poore object ko refer karega (user object)
    }
}

user.welcomeMassage()  // Output: Devesh, welcome to Web Page

user.usernmae = "Atul"
user.welcomeMassage()  // Output: Atul, welcome to Web Page

// 'this' keyword global scope mein kya return karega?
console.log(this)
// Browser mein: window object (global object)
// Node.js mein: empty object {}

// ❓ Normal Function vs Arrow Function mein this

function dev() {
    console.log(this)  
}
// Normal function mein 'this' global object ko refer karta hai
dev()


const arrow = () => {
    let username = "devesh"
    console.log(this.username)  
}
// Arrow function mein 'this' lexical scope (parent) se aata hai, khud ka 'this' nahi hota
arrow()  // Output: undefined


// Arrow Function Syntax Variants

// Regular arrow function with return
const addone = (num1, num2) => {
    return num1 + num2
}
console.log(addone(3, 4))  // Output: 7

// Implicit return - no need to write return or braces
const add = (num1, num2) => num1 + num2

// Also works with parentheses
const addTwo = (num1, num2) => (num1 + num2)

// Returning object from arrow function - wrap it in ( )
const objects = (num1, num2) => ({ username: "Devesh" })

console.log(addTwo(3, 4))       // Output: 7
console.log(objects(3, 4))      // Output: { username: 'Devesh' }


//  Arrow Function with forEach

const myarray = [2, 3, 4, 1, 3, 5]

// forEach ke andar arrow function
myarray.forEach((value) => {
    console.log(value)  // Output: sabhi elements ek-ek karke
})


// ✅ Practice Questions (Write code for these)
// Create an object student with a method greet that uses this.name to greet the student.

// What will this refer to inside an arrow function used in a setTimeout callback?

// Write an arrow function multiply that takes two numbers and returns their product.

// Use forEach with an arrow function to print only the even numbers from an array.

// Explain the difference between the value of this in a normal function and an arrow function with an example.