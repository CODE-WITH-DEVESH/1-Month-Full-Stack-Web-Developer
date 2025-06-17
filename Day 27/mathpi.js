// const desccripter = Object .getOwnPropertyDescriptor(Math , "PI")
// console.log(desccripter)


// // console.log(Math.PI)

// const chai = {
//     name : "Ginger Chai",
//     price : 240,
//     isAvailable : true
// }
// console.log(chai)
// console.log(Object .getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai , 'name',{
//     writable: false,
//     enumerable: false,


// })

// for (const [key, value] of Object.entries(chai)) {
//     console.log(`${key} :${value}`)
    
// }















// 🔍 JavaScript - Property Descriptors Explained with Compiler

// ✅ PART 1: Get Property Descriptor of Built-in Property
const desccripter = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(desccripter)
// OUTPUT:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// 🔎 Explanation:
// ➤ Math.PI ek built-in constant hai
// ➤ Iska value fix hai (writable: false)
// ➤ Yeh loop mein show nahi hota (enumerable: false)
// ➤ Isko delete ya modify nahi kar sakte (configurable: false)


// ✅ PART 2: User Defined Object
const chai = {
    name : "Ginger Chai",
    price : 240,
    isAvailable : true
}

console.log(chai) // Prints full object
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
// OUTPUT:
// {
//   value: 'Ginger Chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// 🔎 Explanation:
// ➤ `name` property user-defined hai
// ➤ Iske saare descriptors default: true hote hain
//     → writable: true → value badal sakte hain
//     → enumerable: true → loop mein aayega
//     → configurable: true → delete ya change kar sakte hain


// ✅ PART 3: Modify Property Descriptor
Object.defineProperty(chai , 'name',{
    writable: false,      // ❌ ab value change nahi hogi
    enumerable: false,    // ❌ ab loop mein nahi aayegi
})

// ✅ Loop through properties
for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`)
}
// OUTPUT:
// price : 240
// isAvailable : true
// ⛔ name property print nahi hui kyunki enumerable: false hai


// 🧠 Summary / Interview Questions:

// 1️⃣ What is Object.getOwnPropertyDescriptor()?
//    ➤ It tells us about `value`, `writable`, `enumerable`, and `configurable` properties of any object's key.

// 2️⃣ What does Object.defineProperty() do?
//    ➤ It allows us to *control behavior* of a property (make it read-only, hidden from loops, or non-configurable).

// 3️⃣ What is writable: false?
//    ➤ You cannot change the value of that property now.

// 4️⃣ What is enumerable: false?
//    ➤ Property will NOT show in `for..in`, `Object.entries`, or `JSON.stringify()`.

// 5️⃣ Where is it used in real life?
//    ➤ Used in defining secure properties like `Math.PI`, hidden internal object keys, or creating constants.

// 🔥 BONUS TIP:
// ➤ Try editing `chai.name = "Masala Chai"` after making it non-writable. It won’t change!
// ➤ You can use `Object.freeze()` to lock the whole object (all props non-writable & non-configurable).

