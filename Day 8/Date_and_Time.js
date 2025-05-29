// let mydate =new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toISOString())

// console.log(typeof mydate)
// let myCreateDate = new Date(2023, 0, 23)

// let myCreateDateOne = new Date(2023, 0, 23)
// let myCreateDatetwo = new Date("2024-01-14")
// let myCreateDatethare = new Date("01-14-2023")

// console.log(myCreateDate.toDateString());

// console.log(myCreateDate.toLocaleDateString());
// console.log(myCreateDateOne.toLocaleDateString());
// console.log(myCreateDatetwo.toLocaleDateString());
// console.log(myCreateDatethare.toLocaleDateString());

// let myTimeStamp =Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDatethare.getTime())
// console.log(Math.floor(Date.now()/1000))


// let newdate =new Date()
// console.log(newdate.getMonth())
// console.log(newdate.getDay())


// newdate.toLocaleDateString('default',{
//     weekday: "long",
//     timeZone: ""
// })



let mydate = new Date()

console.log(mydate.toString())            // Full date with time
console.log(mydate.toDateString())        // Only date in readable form
console.log(mydate.toLocaleDateString())  // Local date format (e.g. MM/DD/YYYY)
console.log(mydate.toISOString())         // ISO format: 2024-05-29T10:20:00.000Z

console.log(typeof mydate)                // Object

// 📅 Create custom date (months start from 0 => 0 = January)
let myCreateDate = new Date(2023, 0, 23)  // Jan 23, 2023
let myCreateDateOne = new Date(2023, 0, 23)
let myCreateDatetwo = new Date("2024-01-14")  // YYYY-MM-DD
let myCreateDatethare = new Date("01-14-2023") // MM-DD-YYYY

console.log(myCreateDate.toDateString())          // Mon Jan 23 2023
console.log(myCreateDate.toLocaleDateString())    // 1/23/2023
console.log(myCreateDateOne.toLocaleDateString()) // 1/23/2023
console.log(myCreateDatetwo.toLocaleDateString()) // 1/14/2024
console.log(myCreateDatethare.toLocaleDateString()) // 1/14/2023

// ⏱️ Timestamps (milliseconds since Jan 1, 1970)
let myTimeStamp = Date.now()
console.log(myTimeStamp)                       // Current timestamp in ms
console.log(myCreateDatethare.getTime())       // Timestamp of that date
console.log(Math.floor(Date.now() / 1000))     // Convert to seconds

// 🗓️ Get parts of the date
let newdate = new Date()
console.log(newdate.getMonth())     // Month (0 - 11)
console.log(newdate.getDay())       // Day of the week (0 = Sunday, 6 = Saturday)

// 📌 Format date with options
newdate.toLocaleDateString('default', {
    weekday: "long",
    // Example: You can add timeZone: "Asia/Kolkata"
})

// Practice Questions: (Topic – JavaScript Date Object)
// ❓ Q1.
// Write a function that returns the current time in HH:MM:SS format.

// ❓ Q2.
// Create a date object for your birthday and print:

// The day of the week (e.g. "Monday")

// The full date using toDateString()

// ❓ Q3.
// Given a specific date new Date("2024-12-31"), calculate:

// How many milliseconds have passed since that date.

// ❓ Q4.
// Write code that prints:

// Today's date

// Yesterday's date
// (Both using toLocaleDateString())

// ❓ Q5.
// Create a function getFormattedDate(date) that takes any Date object and returns a string like:
// 👉 "Wednesday, 29 May 2025"

