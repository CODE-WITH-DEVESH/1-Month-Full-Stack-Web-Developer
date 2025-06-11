// This and Arrow Functions 

const user ={
    usernmae : " Devesh",
    Price : 999,
    welcomeMassage : function (){
        console.log(` ${this.usernmae} , welcome to Web Page`)
        console.log(this)
    }

}
// this ki value kya aati ha ?

user.welcomeMassage()
user.usernmae = "atul"
user.welcomeMassage()

console.log(this)



function dev(){
    console.log(this)
}

dev()


const arrow =() =>{
    let username ="devesh"
    console.log(this.username)
}
arrow()

// ()= > {} 

const addone = ( num1 , num2 )=>{
    return num1 + num2 
}

console.log(addone(3 , 4))


const add = ( num1 , num2 )=> num1 + num2 
const addTwo = ( num1 , num2 )=> (num1 + num2 )
const objects = ( num1 , num2 )=> ({username : " Devesh"})


console.log(addTwo(3 , 4))


const myarray = [ 2,3,4,1,3,5]
myarray.forEach ()