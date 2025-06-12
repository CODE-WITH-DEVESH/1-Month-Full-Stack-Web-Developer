// // Control Flow In JS 
// // 2<=2
// // 2==="2"
// // < , > , < =, >=, ==,!=,===


// if(condition){
    
// }
// if(true){

// }
// if(false){

// }

// const isuserLoggedIn = true

// const temperature = 41
// if(temperature <50){

//     console.log("Less Than 50")
// }
// console.log(" more than 50")



// if(temperature <40){

//     console.log("Less Than 50")
// } else{

//     console.log(" more than 50")
// }


// const score = 200
// if(score > 100){
//     const power ="fly"
//     console.log(`User is ${power}`)

// }


// const balance =1000

// if(balance > 500) console.log("test");



// const balance2 = 1000


// if(balance2 < 500){
//     console.log("less Than 500")
// } else if(balance2 < 740){
//     console.log("less Than 750")
    
// } else if(balance2< 950){
//     console.log("less Than 950")
    
// } else{
//     console.log("less Than 1200")

// }


// // Real life USe 

// const userLoggedIN = true
// const debitcard = true
// const loggedFromEmail = true

// if(userLoggedIN && debitcard ){
//     console.log("allow to Buy courese")
// }
// if(userLoggedIN ||  debitcard || loggedFromEmail){
//     console.log("user LoggendIN")
// }




// ✅ Control Flow in JavaScript (नियंत्रण प्रवाह)

// 👉 Comparison Operators: < , > , <= , >= , == , != , ===
// == checks only value (not type), === checks value + type

// Example - using if condition
const isUserLoggedIn = true;

const temperature = 41;

// 🔸 Condition check with if
if (temperature < 50) {
    console.log("Temperature is less than 50"); // यह block चलेगा अगर condition true है
}

console.log("This always runs: Temperature checked");

// 🔸 Using if-else
if (temperature < 40) {
    console.log("Temperature is below 40");
} else {
    console.log("Temperature is 40 or more");
}

// 🔸 Score-based condition
const score = 200;
if (score > 100) {
    const power = "fly";
    console.log(`User has the power to ${power}`);
    // block scoped variable 'power' is only available inside this if
}

// 🔸 Shortcut single-line if (not recommended for multiple lines)
const balance = 1000;
if (balance > 500) console.log("Balance is greater than 500");

// 🔸 Multiple else-if conditions (Ladder)
const balance2 = 1000;
if (balance2 < 500) {
    console.log("Balance is less than 500");
} else if (balance2 < 740) {
    console.log("Balance is less than 740");
} else if (balance2 < 950) {
    console.log("Balance is less than 950");
} else {
    console.log("Balance is less than 1200"); // ✅ This will print
}

// 🔸 Real-life example using logical operators
const userLoggedIn = true;
const hasDebitCard = true;
const loggedInFromEmail = true;

// && = AND (सभी condition true होनी चाहिए)
if (userLoggedIn && hasDebitCard) {
    console.log("User is allowed to buy a course");
}

// || = OR (कम से कम एक condition true होनी चाहिए)
if (userLoggedIn || hasDebitCard || loggedInFromEmail) {
    console.log("User is logged in from some source");
}


// ✅ Practice Questions:
// Write an if-else condition to check if a person is eligible to vote (age >= 18).

// Create a condition that checks if a user is logged in and has a valid membership card.

// Use else if to print "Fail", "Pass", "Good", "Excellent" based on marks.

// What is the difference between == and === in JavaScript?

// How do && and || operators behave inside if conditions?