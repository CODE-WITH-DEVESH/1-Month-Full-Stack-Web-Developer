console.log("Let's talk about var , let , const")


const accountID = 13467
let accountEmail ="dev@gmail.com";

var accountPassword ="1234567"
accountcity ="bareilly"

//  Prefer not to use var because of issue in bloack scope and functional scope

console.log(accountEmail)
console.table([accountID , accountEmail,accountPassword ,accountcity])
accountEmail ="first@gmail.com"
accountPassword ="23424"
accountcity="jaipur"
console.table([accountID , accountEmail,accountPassword ,accountcity])
