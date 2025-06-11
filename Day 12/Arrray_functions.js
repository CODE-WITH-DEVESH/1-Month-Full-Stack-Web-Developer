// function calculatecardPrice (...num1){
//     return num1

// }
// console.log(calculatecardPrice(200, 400, 500))


// function calculatecardPricetwo (val1 , val2 , ...num1){
//     return num1

// }
// console.log(calculatecardPricetwo(200, 400, 500))

// const user ={
//     username : " Devesh",
//     price :199


// }

// function handleObjects(anyobjects){
//     console.log(`User Is ${anyobjects.username} and price is ${anyobjects.price} `)
// }
// handleObjects(user)

// handleObjects({
//     username : "Atul",
//     price:489
// })

// const mynewAray = [200, 400, 100, 600]
// function returnSecondValue (getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(mynewAray))
// console.log(returnSecondValue([234,684, 567]))




// 🔹 Rest Operator (...) ka use - multiple values ek array me lene ke liye hota hai
function calculatecardPrice(...num1) {
    // ...num1 matlab jitne bhi arguments aayenge unhe ek array me convert kar dega
    return num1;
}
console.log(calculatecardPrice(200, 400, 500));
// Output: [200, 400, 500]

// 🔹 Jab function me pehle se kuch parameters hote hain, to baad wale hi rest me jaate hain
function calculatecardPricetwo(val1, val2, ...num1) {
    // val1 = 200, val2 = 400, baaki sab ...num1 me jayega
    return num1;
}
console.log(calculatecardPricetwo(200, 400, 500));
// Output: [500]

// 🔹 Object ko function ke andar pass karna
const user = {
    username: "Devesh",
    price: 199
};

function handleObjects(anyobjects) {
    // Object ke andar ke values ko access karke print kar rahe hain
    console.log(`User is ${anyobjects.username} and price is ${anyobjects.price}`);
}

handleObjects(user); // Object variable ko pass kar rahe hain

handleObjects({
    username: "Atul",
    price: 489
});
// Yahaan hum directly object bana kar function me pass kar rahe hain

// 🔹 Array ko function me pass karna aur specific index ki value nikalna
const mynewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    // Array ka second element (index 1) return kar rahe hain
    return getArray[1];
}

console.log(returnSecondValue(mynewArray));         
// Output: 400

console.log(returnSecondValue([234, 684, 567]));    
// Output: 684


//  Practice Ke Liye 5 Questions (Without Answers):

// What will be the output of calculatecardPrice(100, 200, 300, 400) and why?

// How is the ...rest operator different from the ...spread operator?

// What happens if you pass fewer arguments than parameters in a function?

// How can you directly pass an object literal to a function?

// How can you access the last value of an array passed to a function?


// calculatecardPrice(100, 200, 300, 400) ka output kya hoga aur kyu?

// ...rest operator aur ...spread operator me kya difference hai?

// Agar function ko kam parameters diye jaayein to kya hoga?

// Ek function me bina variable banaye direct object kaise pass karte hain?


// Function me pass ki gayi array ka last value kaise access karoge?


