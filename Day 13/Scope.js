
// if(true){
    
//     let a =20
//     const b= 20
//     var c= 30
// }

// console.log(a)
// console.log(b)
// console.log(c)


// let a =300
// if(true){
//     let a =100
//     const b=20
//     console.log("INNER Value:" , a)
// }
// console.log("Outer Value:" , a)

// Pehla Example: Block Scope vs Global Scope

if (true) {
    let a = 20;      // 'let' ka scope sirf is block tak hai
    const b = 20;    // 'const' ka scope bhi sirf block tak hai
    var c = 30;      // 'var' ka scope poore function ya global tak chala jata hai
}

// console.log(a); // ❌ Error: 'a' is not defined (kyunki a block ke bahar access ho raha hai)
// console.log(b); // ❌ Error: 'b' is not defined (same reason)
// console.log(c); // ✅ Output: 30 (kyunki var block ke bahar bhi accessible hai)


// Doosra Example: Scope Shadowing

let a = 300; // Yeh global 'a' hai

if (true) {
    let a = 100; // Yeh block ka 'a' hai, jo outer 'a' ko shadow karta hai
    const b = 20;
    console.log("INNER Value:", a); // Output: 100 (andar wala a)
}

console.log("OUTER Value:", a); // Output: 300 (bahar wala a)

// var, let aur const me se kaunsa variable block ke bahar accessible hota hai?

// Agar let se declare kiya gaya variable block ke andar hai, to kya usse block ke bahar access kiya ja sakta hai?

// Agar same variable naam let se andar aur bahar dono jagah declare ho to kaunsa value print hogi andar ke block me?

// const se declare kiya gaya variable reassign kyu nahi hota?

// Kya var ka use karna best practice hai? Kyu?

// Which variable among var, let, and const is accessible outside a block even if declared inside it?

// If a variable is declared using let inside a block, can it be accessed outside the block?

// If a variable with the same name is declared using let both inside and outside a block, which value will be printed inside the block?

// Why can't a variable declared with const be reassigned in JavaScript?

// Is it considered best practice to use var in modern JavaScript? Why or why not?



