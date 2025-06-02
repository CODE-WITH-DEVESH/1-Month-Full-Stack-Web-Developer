console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(null > 0)

let myname = "Devesh"
console.log(typeof myname)

let age = 22
console.log(typeof age)

let bigint = 23445566778n
console.log(typeof bigint)

let isStudent = true
console.log(typeof isStudent)

let x;
console.log(typeof x)

let sym1 = Symbol("id")
let sym2 = Symbol("id")
console.log(sym1 === sym2)
console.log(typeof sym1)

let parson ={name : "Devesh" , age : 19}
console.log(typeof parson)

let user={
    username : "Devesh",
    age : 19


}
console.log(user.username)

let friends =[ " atul" , "Dev", " ravi"]
console.log([0])
console.log(typeof friends)

function greet(name){
    return `HEllo,${name}`

}
console.log(greet("Devehs"))
console.log(typeof greet)

let today = new Date()
console.log(today)
console.log(typeof today)
