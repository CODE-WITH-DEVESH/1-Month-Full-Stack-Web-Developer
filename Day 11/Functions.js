// function saymyname(){
//     console.log("Helllo")


// }
// saymyname()

// function addoneNumber (numbers1 , numbers2 ){
//     console.log( numbers1 + numbers1) 
// }
// addoneNumber(3,"4")


// function addTwoNumber (numbers1 , numbers2 ){
//     let result = numbers1 + numbers2
//     return result

// }
// const result = addTwoNumber(3, 5) 
// console.log("Result:" ,result)


// function logingUserMAssage (username){
//     if(username === undefined){
//         console.log("Please Enter a username")
//         result

//     }
//     return `${username} just logged in`

// }
// console.log(logingUserMAssage("Devesh"))
// console.log(logingUserMAssage())


// ✅ Function Definition
function saymyname(){
    console.log("Helllo")  // Jab function call hoga, yeh print karega
}
saymyname()  // Function ko call kiya gaya

// ✅ Function with parameters
function addoneNumber(numbers1, numbers2){
    console.log(numbers1 + numbers1)  // Bas pehla number ko hi double kar diya
}
addoneNumber(3, "4")  // Output: 34 (string ke saath + use hua toh concat ho gaya)

// ✅ Function with return value
function addTwoNumber(numbers1, numbers2){
    let result = numbers1 + numbers2
    return result  // Yeh result return karega function se
}
const result = addTwoNumber(3, 5)  // Function call karke result store kiya
console.log("Result:", result)  // Output: Result: 8

// ✅ Function with condition (undefined check)
function logingUserMAssage(username){
    if(username === undefined){
        console.log("Please Enter a username")  // Agar koi username nahi diya toh warning
        return  // Return likhna bhool gaye the, ab daal diya
    }
    return `${username} just logged in`  // Naam diya toh message return hoga
}

console.log(logingUserMAssage("Devesh"))  // Output: Devesh just logged in
console.log(logingUserMAssage())          // Output: Please Enter a username


//  Practice Ke Liye 5 Questions (Without Answers):
// What will be the output of addoneNumber(3, "4") and why?

// What happens if you forget to return a value from a function?

// How can you set a default value for a parameter in JavaScript?

// What is the difference between console.log() and return inside a function?

// How can you check if a parameter is passed or not in a function?

