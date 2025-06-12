// loops 
// for loops 

for (let i = 0; i <10; i++) {
    const element = i;
    if(element ==5){
        console.log(" 5 Is the BEst Number ")
    }
    console.log(element)
}

for (let i = 1; i <= 10 ; i++) {

    console.log(`Outer Loop value : ${i}`)
    
    for (let j = 1; j <=10; j++) {
     console.log(`Inner Loop value : ${i} and inner loops ${i}`)
    console.log(i + '*' + j + '=' +i*j)
  
    
 }
}


// Array 

let myarray = [" Flash " , "atul" ,]
console.log(myarray.length)

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
    
}

// break and continue 

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log('best 5 ')
        break;
        
    }
   
    console.log(`value of index is ${index}`)
    
}



for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log('best 5 ')
        continue
        
    }
   
    console.log(`value of index is ${index}`)
    
}






// ✅ For Loop, Nested Loop, Array Loop, Break & Continue — All In One Compiler

// 🔹 1. Simple for loop
for (let i = 0; i < 10; i++) {
    const element = i;

    // agar element 5 ho to ek special message print karo
    if (element == 5) {
        console.log("🔥 5 is the Best Number");
    }

    console.log(element);
}

// 🔹 2. Nested Loop: Outer & Inner loop
for (let i = 1; i <= 3; i++) {
    console.log(`🔁 Outer Loop Value: ${i}`);

    for (let j = 1; j <= 3; j++) {
        console.log(`   ➤ Inner Loop Value: ${j}`);
        console.log(`${i} * ${j} = ${i * j}`); // Multiplication table format
    }
}

// 🔹 3. Array loop using for loop
let myArray = ["Flash", "Atul", "Ironman"];
console.log("Array Length:", myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(`🟡 Element at index ${index}: ${element}`);
}

// 🔹 4. Using break — stops loop when condition meets
for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        console.log("🚫 Found 5, stopping loop");
        break;
    }
    console.log(`Break Loop index: ${index}`);
}

// 🔹 5. Using continue — skip current loop iteration
for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        console.log("⏭️ Skipping 5");
        continue;
    }
    console.log(`Continue Loop index: ${index}`);
}

// ==============================
// ✅ Practice Questions (for you to solve)
// ==============================

// 1️⃣ Q: Print even numbers from 1 to 20
console.log("\n🧪 Q1: Even numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2️⃣ Q: Print table of 7 (1 to 10)
console.log("\n🧪 Q2: Multiplication table of 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// 3️⃣ Q: Array of fruits, print names starting with 'A'
console.log("\n🧪 Q3: Fruits starting with A:");
let fruits = ["Apple", "Banana", "Avocado", "Orange", "Apricot"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i][0] === 'A') {
        console.log(fruits[i]);
    }
}

// 4️⃣ Q: Print 1 to 10 but skip 3 and 7 using continue
console.log("\n🧪 Q4: Skip 3 and 7:");
for (let i = 1; i <= 10; i++) {
    if (i === 3 || i === 7) {
        continue;
    }
    console.log(i);
}

// 5️⃣ Q: Stop loop when number divisible by both 3 and 5
console.log("\n🧪 Q5: Break when number divisible by 3 & 5:");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`🛑 Stopping at ${i} (divisible by 3 & 5)`);
        break;
    }
    console.log(i);
}



// Print even numbers from 1 to 20 using a for loop.

// Print a multiplication table of 7 using nested loops.

// Create an array of 5 fruits and print only those names that start with 'A'.

// Use a loop to print numbers from 1 to 10, but skip 3 and 7 using continue.

// Break the loop when number is divisible by both 3 and 5.

