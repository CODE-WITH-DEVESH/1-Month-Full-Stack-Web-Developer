// function one (){
//     const username =" Devesh"

//     function two (){
//         const website ="youtube"
//         console.log(username)

//     }
//     // console.log(website)
//     two()
// }
// one()

// if(true){
//     const username = "Devesh"

//     if(username === "Devesh"){

//         const website = " Youtube" 
//         // console.log( username + website) 
//     }
// }

// // Interesting 

// function addone(numb){
//  return numb +1
// }

// console.log(addone(5))


// const addTwo =function(num){
//     return num +2 
// }

// addone (5)


// Function One ke andar ek local variable hai: username
function one (){
    const username = "Devesh"

    // Nested function two, jo parent function ka variable use kar sakta hai
    function two (){
        const website = "youtube"
        console.log(username)  // "Devesh" print hoga kyunki inner function outer scope ko access kar sakta hai
    }

    // console.log(website)  // ❌ Error aayegi kyunki website sirf two() ke andar defined hai
    two()  // two function call kiya
}
one()  // one function call kiya


// 🔒 Block Scope Example
if(true){
    const username = "Devesh"

    if(username === "Devesh"){
        const website = "Youtube" 
        // console.log(username + website)  // Output hoga: DeveshYoutube
    }

    // console.log(website)  // ❌ Error: website is not accessible outside inner if block
}

// 💡 Function Declaration: Hoisting hota hai
function addone(numb){
    return numb + 1
}
console.log(addone(5))  // Output: 6


// 💡 Function Expression: Hoisting nahi hota
const addTwo = function(num){
    return num + 2 
}

console.log(addTwo(5))  // Output: 7


// 🧠 Concepts Covered:
// Lexical Scope: Inner function can access outer function's variables.

// Block Scope: const and let are block scoped.

// Function Declaration vs Expression: Declaration is hoisted, expression is not.

// ✅ Practice Questions (in English)
// Can a nested function access variables declared in its parent function? Why?

// What happens if you try to access a block-scoped variable (let or const) outside its block?

// What is the difference between a function declaration and a function expression?

// What will happen if you call a function expression before it is defined?

// In which situations is hoisting applicable for functions in JavaScript?



