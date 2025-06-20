// .env file ka use karne ke liye dotenv package ko import kiya
require('dotenv').config()  // ✅ dotenv .env file ke andar ke variables ko process.env mein dalta hai

// express framework ko import kiya
const express = require('express')  // ✅ Express ek Node.js web framework hai jisse routes aur server banana easy hota hai

const app = express()  // ✅ app object ke through routes define karte hain

const port = process.env.PORT || 3000  // ab sahi h
//  Galti: Tumne yaha 3000 likha hai, lekin neeche app.listen mein process.env.port use kiya hai
// To correct hoga: const port = process.env.PORT || 3000  ✅

/*
    ✅ ROUTES — jab koi URL par jata hai to server usko response deta hai
    "/" means home page
*/

app.get('/', (req, res) => {
    res.send('Hello World!')  // ✅ browser pe localhost:3000/ jaane par yeh message dikhega
})

// ✅ /twitter route define kiya
app.get('/twitter', (req, res) => {
    res.send('Hello Twitter User ')  // localhost:3000/twitter
})

// ✅ /login route define kiya
app.get('/Login', (req, res) => {
    res.send('<h1>Please Login at dev aur code ')  // HTML tag bhi bhej sakte ho
})

// ✅ Server ko listen pe lagaya
app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)  // ❌ Galti: yaha bhi process.env.port nahi port hona chahiye
})
