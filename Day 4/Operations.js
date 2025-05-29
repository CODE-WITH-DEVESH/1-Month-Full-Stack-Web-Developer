let str ="Devesh"
let str1 =" Baghel"
let str3 = str + str1
console.log(str3);


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
let gameCounter = 100
gameCounter++
console.log(gameCounter);


let str2 = "Devesh"
let str11 = " Baghel"
let str32 = str + str1  // Dono strings ko + se jod rahe hain
console.log(str3);     // Output: Devesh Baghel

console.log("1" + 2)       // "12" → string + number → number string ban gaya
console.log(1 + "2")       // "12" → number + string → number string ban gaya
console.log("1" + 2 + 2)   // "122" → "1" + 2 = "12", "12" + 2 = "122"
console.log(1 + 2 + "2")   // "32" → 1+2 = 3, then 3 + "2" = "32"
let gameCounterr = 100
gameCounter++              // Post-increment: pehle use hoga, fir +1 hoga
console.log(gameCounterr);  // Output: 101
