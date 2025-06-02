let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())

// Create custom Date 

let MyCustomDate =new Date(2023,0,23)
console.log(MyCustomDate.toString())
let MyCustomDateone= new Date("2025-01-23")
let MyCustomDatetwo= new Date("01-23-2034")

console.log(MyCustomDateone.toLocaleDateString())
console.log(MyCustomDatetwo.toLocaleDateString())

let mytimeStamp = Date.now()
console.log(mytimeStamp)
console.log(mytimeStamp.toString())
console.log(Math.floor(Date.now()/ 1000))

// function currentTime ={

// }

let specificdate = new Date("2024-12-31")
console.log(specificdate.toDateString())


// Write code that prints:

// Today's date

// Yesterday's date
// (Both using toLocaleDateString())

let TodayDate =new Date()
console.log(TodayDate.toLocaleDateString())

let YesterdayDate = new Date();
YesterdayDate.setDate(YesterdayDate.getDate() - 1); // Subtract 1 day
console.log(YesterdayDate.toLocaleDateString())