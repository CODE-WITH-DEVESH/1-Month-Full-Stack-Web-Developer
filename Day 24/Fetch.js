
    // 🔸 fetch() ek modern JavaScript method hai HTTP requests karne ke liye
    // 🔸 Ye Promises ke through data return karta hai (success/failure dono)

    // ✅ SYNTAX:
    // fetch(URL, [options]) → returns a Promise

    // 🔰 BASIC FETCH EXAMPLE
    fetch('https://jsonplaceholder.typicode.com/posts/1')  // URL to fetch from
      .then(response => {
        // response object aata hai → isko JSON mein convert karna hota hai
        return response.json(); // ye bhi ek Promise return karta hai
      })
      .then(data => {
        console.log("✅ Data from API:", data); // yahan actual data milta hai
      })
      .catch(error => {
        console.log("❌ Error occurred:", error); // agar koi error aata hai
      });


    // 🔰 POST REQUEST Example (data bhejna API pe)
    const postData = {
      title: 'Devesh',
      body: 'MCA Student Learning Fetch',
      userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', // kyunki POST kar rahe hain
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(postData) // object ko JSON string mein convert karte hain
    })
    .then(response => response.json())
    .then(data => {
      console.log("📝 Data posted successfully:", data);
    })
    .catch(error => {
      console.log("❌ POST Error:", error);
    });


    // 🔰 Using async/await with fetch
    async function getUser() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log("🌍 Random User:", data.results[0].name.first, data.results[0].email);
      } catch (error) {
        console.log("❌ Async Error:", error);
      }
    }

    getUser();






      /*
    📘 BHAI AB THEORY DEKH —

    🔹 fetch() ka kaam:
        - kisi bhi API se data lana ya bhejna.
        - HTML → JS → fetch → server se baat karta hai.
    
    🔹 fetch() ek Promise return karta hai:
        - .then() se success handle karo
        - .catch() se error handle karo

    🔹 response.json():
        - response ko actual data mein convert karta hai.
        - bina iske tum raw stream hi dekhoge, data nahi.

    🔹 fetch ka default method = GET

    🔹 POST, PUT, DELETE jaise methods use karne ho to fetch mein 2nd parameter pass karna padta hai.

    🔹 headers:
        - browser ko batate hain ki kis format mein data bhej rahe ho (e.g. application/json)

    🔹 body:
        - jab bhi tum POST/PUT karte ho to body mein data jaata hai.
        - wo data string format mein hona chahiye (JSON.stringify)

    */



//         📚 10 Important fetch() Interview Questions:
// What is fetch() in JavaScript?

// What type of value does fetch() return?

// Why do we use response.json() after fetch()?

// How do you handle errors in fetch()?

// What is the default HTTP method used by fetch()?

// How do you make a POST request using fetch()?

// What are headers in a fetch request?

// What is the difference between fetch() and XMLHttpRequest?

// How do you use async/await with fetch()?

// Can you cancel a fetch request once it's started? (Bonus: Use AbortController)



// ✅ Always use try...catch with async/await
// ✅ Always convert response using response.json()
// ✅ Check response.ok for error handling

fetch("https://jsonplaceholder.typicode.com/posts/100000")
  .then((response) => {
    if (!response.ok) {
      throw new Error("404 Not Found");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("❌ Error Handled Gracefully:", error.message));
