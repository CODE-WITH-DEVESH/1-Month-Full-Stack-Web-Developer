// console.log("Let's talk about var , let , const")


// const accountID = 13467
// let accountEmail ="dev@gmail.com";

// var accountPassword ="1234567"
// accountcity ="bareilly"

//  Prefer not to use var because of issue in bloack scope and functional scope

console.log(accountEmail)
console.table([accountID , accountEmail,accountPassword ,accountcity])
accountEmail ="first@gmail.com"
accountPassword ="23424"
accountcity="jaipur"
console.table([accountID , accountEmail,accountPassword ,accountcity])


console.log("Let's talk about var , let , const")  
// Simple console message to explain topic

const accountID = 13467           
// const means constant value, can't be changed later

let accountEmail = "dev@gmail.com";  
// let is block scoped, value can change later

var accountPassword = "1234567"  
// var is function scoped, avoid using var because it causes problems with scope

accountcity = "bareilly"         
// No var/let/const keyword = global variable (not recommended)

console.log(accountEmail)         
// Prints current email: dev@gmail.com

console.table([accountID, accountEmail, accountPassword, accountcity])  
// Table format to show all variables' current values

accountEmail = "first@gmail.com"  
// Changing email because let allows reassignment

accountPassword = "23424"         
// Changing password, var also allows reassignment

accountcity = "jaipur"            
// Changing global variable's value

console.table([accountID, accountEmail, accountPassword, accountcity])  
// Print updated values in table format




// Practice with Explanation

