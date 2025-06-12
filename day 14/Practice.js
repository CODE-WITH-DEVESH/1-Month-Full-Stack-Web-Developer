const user ={
    usernmae : "Devesh",
    price:199,

    welcometo:function (){
        console.log(`${this.usernmae}, welcome to pagwe`)
        // console.log(this)
    }
}

// user.welcometo()
user.usernmae= "Atul"
user.welcometo()


// console.log(this)
// Browser mein: window object (global object)
// Node.js mein: empty object {}

