// const name ="Devesh"
// const RepoConut =60

// console.log(`Hello My Name is ${name} and my github Repo ${RepoConut}`);

// const gameName = new String('ATulDEV')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('l'));
// console.log(gameName.__prot__);

// const newString =gameName.substring(0 , 2)
// console.log(newString);

// const anotherString =gameName.slice(-4 ,1)
// console.log(anotherString);


// const newStringOne = "      DEVESH"
// console.log(newStringOne)
// console.log(newStringOne.trim())


// const url = "https://www.linkedin.com/%20in/devesh-kumar-singh-baghel/"
// console.log(url.replace('-' , '%20'));

// console.log(url.includes('FC'))

// const arrayscont = new String('devesh-baghel-atul')
// console.log(arrayscont.split('-'))


const name = "Devesh"
const RepoConut = 60

// Naam aur GitHub repo count ko style mein print kiya
console.log(`Hello My Name is ${name} and my github Repo ${RepoConut}`);

// Ek string object banaya
const gameName = new String('ATulDEV')

// 0th index ka letter (first letter) print
console.log(gameName[0]); // A

// Total length
console.log(gameName.length); // 7

// Uppercase me convert
console.log(gameName.toUpperCase()); // ATULDEV

// 2nd index pe kaunsa letter hai
console.log(gameName.charAt(2)); // u

// 'l' kis position pe aaya pehli baar
console.log(gameName.indexOf('l')); // 3

// galat likha gaya hai, sahi hota: gameName.__proto__
console.log(gameName.__proto__);  // ✅ sahi hai
 // undefined

// substring: 0 se 2 ke beech ka part (2 include nahi hota)
const newString = gameName.substring(0 , 2)
console.log(newString); // AT

// slice: -4 se 1 tak, lekin yeh galat hai to output empty hoga
const anotherString = gameName.slice(-4 ,1)
console.log(anotherString); // ""

// extra spaces wale string
const newStringOne = "      DEVESH"
console.log(newStringOne); // with spaces

// trim se spaces hata diye
console.log(newStringOne.trim()); // DEVESH

// URL me '-' ko '%20' se replace kiya
const url = "https://www.linkedin.com/%20in/devesh-kumar-singh-baghel/"
console.log(url.replace('-', '%20')); // sirf pehla '-' replace hoga

// check kiya 'FC' word hai ya nahi URL me
console.log(url.includes('FC')); // false

// split use karke string ko array me tod diya '-'
const arrayscont = new String('devesh-baghel-atul')
console.log(arrayscont.split('-')); // ['devesh', 'baghel', 'atul']
