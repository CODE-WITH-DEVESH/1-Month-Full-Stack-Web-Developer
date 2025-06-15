const promiseone = new Promise( function (resole ,reject){
    // Do An ASync Task
    // DB Calls , Crypto , newtwork

    setTimeout(function(){
        console.log('task IS compelete')
        resole()

    },1000)
})

promiseone.then(function(){
    console.log('Proise Consumed');

    
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async Task two")
        resolve()
    }, 1000);

}).then(function(){
    console.log("Async 2 Reolveed")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username : "Devesh",email:"dksgoogle.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user)
})


const promisefour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:'atul',password:123})
        } else{
            reject('Error : Something Went Wrong')
        }
    }, 1000);
})

promisefour.then((user) =>{
console.log(user)
return user.username
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error)

}).finally(()=>{
    console.log("The Promise is either resolved or rejected")
})
   
    

const promisefive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:'JavaScript',password:123})
        } else{
            reject('Error : JS Went Wrong')
        }
    }, 1000);
})
// promisefive
async function ConsumedPromise() {
    const response = await promisefive
    console.log(response)
    
}
