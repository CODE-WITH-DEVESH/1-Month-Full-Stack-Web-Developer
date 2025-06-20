import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-white'>Welcome </h1>
    <Card>

    </Card>
    <Card></Card>

    
    </>
  )
}

export default App




// // 📁 App.jsx (Main Component)
// import React from 'react'
// import Student from './Student'

// function App() {
//   return (
//     <div>
//       <h1>👨‍🏫 Welcome to Props in React</h1>

//       {/* 🔥 Props bhej rahe hain child component ko */}
//       <Student name="Devesh" course="React.js" />
//       <Student name="Atul" course="JavaScript" />
//       <Student name="Ravi" course="Node.js" />
//     </div>
//   )
// }

// export default App


// // 📁 Student.jsx (Child Component)
// import React from 'react'

// // 🧠 Props means data from parent to child
// function Student(props) {
//   return (
//     <div style={{ background: "#333", color: "white", margin: "10px", padding: "10px", borderRadius: "10px" }}>
//       <h2>Student Name: {props.name}</h2>
//       <p>Course Enrolled: {props.course}</p>
//     </div>
//   )
// }

// export default Student


// Props kya hote hain?
// Props ka matlab hota hai "properties" — jo parent component child component ko data ke form mein bhejta hai.

// Props are read-only — matlab unhe change nahi kar sakte child component mein.

// Props help karte hain reusability mein. Same component ko alag-alag data ke sath use kar sakte hain.


// 📚 Practice Questions:
// Ek component Book.jsx banao jo props ke zariye title aur author receive kare.

// Parent component Library.jsx banao jismein 3 <Book /> components ho.

// Student component mein ek aur prop age bhejo aur display karo.

// Props ko destructure karke use karo (e.g. function Student({ name, course })).

// Ek button bhejo as prop aur child component mein us button ko render karo.