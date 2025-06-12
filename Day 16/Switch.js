// switch 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const moth = 3

switch (moth) {
    case 1:
        console.log("Jan")
        
        break;
    case 2:
        console.log("feb")
        
        break;
    case 3:
        console.log("March")
        
        break;
    case 4:
        console.log("april")
        
        break;

    default:
        console.log("Defalut")
        break;
}


const moths = "March"

switch (moths) {
    case "jan":
        console.log("Jan")
        
        break;
    case "fab":
        console.log("feb")
        
        break;
    case "March":
        console.log("March")
        
        break;
    case "april":
        console.log("april")
        
        break;

    default:
        console.log("Defalut")
        break;
}



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


// 🧠 Hindi + English Explanation:
// switch ek control structure hai jisme case values check ki jaati hain switch(key) ke against.

// Jaise hi koi case match karta hai, uska block run hota hai.

// break likhna ज़रूरी hai warna neeche ke sabhi cases bhi execute ho jate hain (fall-through issue).

// default tab chalta hai jab koi bhi case match nahi karta.

// ✅ Practice Questions:
// Write a switch statement to print days of the week based on numbers (1 = Monday, ..., 7 = Sunday).

// Write a switch that checks string values: "red", "green", "blue" and prints a related message.

// What happens if we remove break in a switch block? Try it and see!

// Can we use expressions like case 1 + 2: in a switch block? Try and explain the result.

// Replace a chain of if-else (checking grades like A, B, C...) with a switch.

