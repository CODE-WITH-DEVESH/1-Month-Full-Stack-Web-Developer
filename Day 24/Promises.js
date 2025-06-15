// const promiseone = new Promise( function (resole ,reject){
//     // Do An ASync Task
//     // DB Calls , Crypto , newtwork

//     setTimeout(function(){
//         console.log('task IS compelete')
//         resole()

//     },1000)
// })

// promiseone.then(function(){
//     console.log('Proise Consumed');

    
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async Task two")
//         resolve()
//     }, 1000);

// }).then(function(){
//     console.log("Async 2 Reolveed")
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({username : "Devesh",email:"dksgoogle.com"})
//     }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user)
// })


// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username:'atul',password:123})
//         } else{
//             reject('Error : Something Went Wrong')
//         }
//     }, 1000);
// })

// promisefour.then((user) =>{
// console.log(user)
// return user.username
// }).then((username)=>{
//     console.log(username)

// }).catch(function(error){
//     console.log(error)

// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected")
// })
   
    

// const promisefive = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username:'JavaScript',password:123})
//         } else{
//             reject('Error : JS Went Wrong')
//         }
//     }, 1000);
// })
// // promisefive
// async function ConsumedPromise() {
//     const response = await promisefive
//     console.log(response)
    
// }
// ConsumedPromise()


// // async function gateAllUser() {
// //      try {
// //         const response =await fetch('https://randomuser.me/api/')
// //         const data = await response.json()
// //         console.log(data)

// //      } catch (error) {
// //         console.log("E:",error)
        
// //      }
    
// // }
// // gateAllUser()


// fetch('https://randomuser.me/api/')
// .then((response)=>{
//     return response.json();

// })
// .then((data)=>{
//     console.log(data)

// })
// .catch((error)=> console.log(error))






    // ✅ Promise One: Simple Promise with manual resolve
    const promiseone = new Promise(function (resolve, reject) {
        // Async task - like DB call, file download, etc.
        setTimeout(function () {
            console.log('✅ Task 1 Complete (Promise One)');
            resolve(); // Promise complete kar diya
        }, 1000);
    });

    // .then() chalta hai jab promise resolve ho jata hai
    promiseone.then(function () {
        console.log('👉 Promise One Consumed');
    });


    // ✅ Promise Two: Directly created & consumed
    new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("✅ Async Task 2 complete");
            resolve();
        }, 1000);
    }).then(function () {
        console.log("👉 Async Task 2 resolved");
    });


    // ✅ Promise Three: resolve with object data
    const promiseThree = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({ username: "Devesh", email: "dksgoogle.com" }); // data bhej diya
        }, 1000);
    });

    promiseThree.then(function (user) {
        console.log("✅ Promise Three Data:", user);
    });


    // ✅ Promise Four: Handling errors with if-else, and using .catch() and .finally()
    const promisefour = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let error = false; // isko true karoge to error aayega
            if (!error) {
                resolve({ username: 'atul', password: 123 });
            } else {
                reject('❌ Error: Something went wrong');
            }
        }, 1000);
    });

    promisefour
        .then((user) => {
            console.log("✅ Promise Four User:", user);
            return user.username;
        })
        .then((username) => {
            console.log("👉 Extracted Username:", username);
        })
        .catch(function (error) {
            console.log(error); // agar error hoga to ye chalega
        })
        .finally(() => {
            console.log("🔁 Promise is either resolved or rejected (finally)");
        });


    // ✅ Promise Five: Consume using async/await
    const promisefive = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let error = false;
            if (!error) {
                resolve({ username: 'JavaScript', password: 123 });
            } else {
                reject('❌ Error: JS Went Wrong');
            }
        }, 1000);
    });

    // ✅ async/await way to handle Promises
    async function ConsumedPromise() {
        try {
            const response = await promisefive;
            console.log("✅ Async/Await Response:", response);
        } catch (error) {
            console.log("❌ Error in Async Function:", error);
        }
    }
    ConsumedPromise();


    // ✅ fetch() API with .then()
    fetch('https://randomuser.me/api/')
        .then((response) => {
            return response.json(); // data ko json format mein convert kiya
        })
        .then((data) => {
            console.log("🌍 Random User API Response:", data); // pura object
            console.log("🧑 Name:", data.results[0].name.first, data.results[0].name.last);
        })
        .catch((error) => console.log("❌ Fetch Error:", error));


    // ✅ fetch() API with async/await
    async function getAllUsers() {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            console.log("🌍 Random User (Async/Await):", data);
        } catch (error) {
            console.log("❌ Error fetching user:", error);
        }
    }
    getAllUsers();

    
    // 🧠 KEY CONCEPTS (IMPORTANT):

    // 🔸 What is a Promise?
    //   ➤ JS ka ek object jo future mein complete ho sakta hai ya fail bhi ho sakta hai.
    //   ➤ Uske 3 states hote hain:
    //      1. Pending
    //      2. Fulfilled (resolve)
    //      3. Rejected

    // 🔸 .then() => jab Promise resolve hota hai to ye run hota hai.
    // 🔸 .catch() => agar koi error hota hai to ye use handle karta hai.
    // 🔸 .finally() => har case mein run hota hai (resolve ho ya reject ho).

    // 🔸 async/await kya karta hai?
    //    ➤ Await Promise ka result aane ka intezaar karta hai bina next line run kiye.
    //    ➤ try...catch use karte hain error handle karne ke liye.

    // 🔸 fetch() kya karta hai?
    //    ➤ Network call karta hai kisi bhi API se data lene ke liye.
    //    ➤ Ye Promise return karta hai isliye hum .then() ya async/await se handle karte hain.

//     // */

//   📚 10 Interview/Practice Questions:
// What is a JavaScript Promise?

// What are the three states of a Promise?

// How do you handle errors in Promises?

// What is the difference between .then() and async/await?

// When would you use .finally() in a Promise?

// What is fetch() and how does it work?

// Why do we use JSON.parse() with APIs?

// What happens if fetch() fails?

// How is XMLHttpRequest different from fetch()?

// How do you chain .then() calls to handle nested data?

