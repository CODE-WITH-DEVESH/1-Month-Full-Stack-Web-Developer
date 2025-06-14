

//  🔥 PART 1: DOM INTRODUCTION, WINDOW, DOCUMENT, & SELECTORS

// ---

// ```js
// // 👀 WINDOW Object
// // window object browser ka top-level object hota hai
// // Iske andar hi sab kuch aata hai: document, alert, setTimeout, etc.

// console.log(window)
// alert("Hello Devesh!") // window.alert bhi likh sakte ho

// // Sab global objects (setTimeout, console, etc.) window ke andar hote hain

// // ===========================

// // 📄 DOCUMENT Object
// // document object HTML page ko represent karta hai
// // Yahi se hum HTML elements ko access aur manipulate karte hain

// console.log(document)
// console.log(document.title) // Page ka title
// console.log(document.body)  // Body part
// console.log(document.head)  // Head part
// ```

// ---

// ## 🔍 PART 2: SELECTING ELEMENTS IN DOM

// ---

// ```html
// <!-- 👇 Sample HTML Structure -->
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>DOM Tutorial</title>
// </head>
// <body>
//   <h1 id="main-heading">Hello DOM</h1>
//   <p class="info">Devesh is learning DOM</p>
//   <button>Click Me</button>
// </body>
// </html>
// ```

// ```js
// // 🧲 1. getElementById()
// const heading = document.getElementById("main-heading")
// console.log(heading)

// // 🧲 2. getElementsByClassName() → HTMLCollection (not array)
// const para = document.getElementsByClassName("info")
// console.log(para)

// // 🧲 3. getElementsByTagName()
// const btns = document.getElementsByTagName("button")
// console.log(btns)

// // 🧲 4. querySelector() → Returns First Match
// const h1 = document.querySelector("h1")
// console.log(h1)

// // 🧲 5. querySelectorAll() → Returns NodeList (like array)
// const allPara = document.querySelectorAll("p")
// console.log(allPara)
// ```

// ---

// ## ✨ PART 3: INNER HTML, TEXT & VALUE ACCESS

// ---

// ```js
// const heading = document.getElementById("main-heading")

// // 🔡 innerText → Jo screen pe visible hai (user ke liye)
// console.log(heading.innerText)

// // 🧠 textContent → Jo HTML mein likha hai (including hidden)
// console.log(heading.textContent)

// // 🔤 innerHTML → Poora HTML content return karta hai
// console.log(heading.innerHTML)
// ```

// ---

// ## 🎯 PART 4: CHANGING ELEMENT CONTENT OR STYLE

// ---

// ```js
// const heading = document.querySelector("h1")

// // 🧠 Change Text
// heading.innerText = "DOM is Powerful!"

// // 🎨 Change Style
// heading.style.color = "blue"
// heading.style.backgroundColor = "yellow"
// heading.style.textAlign = "center"
// ```

// ---

// ## 🧱 PART 5: ATTRIBUTES & CUSTOM DATA

// ---

// ```html
// <img id="hero" src="flash.png" alt="Flash Hero" width="200">
// ```

// ```js
// const image = document.getElementById("hero")

// // 🔁 Get Attribute
// console.log(image.getAttribute("src"))  // flash.png

// // 🆕 Set Attribute
// image.setAttribute("alt", "Devesh Superhero")
// image.setAttribute("title", "Image of Flash")

// // 🧳 Custom Data Attributes (data-*)
// image.dataset.name = "flash"
// console.log(image.dataset.name) // flash
// ```

// ---

// ## ⚒️ PART 6: ADDING, REMOVING, AND TOGGLING CLASSES

// ---

// ```html
// <h2 id="title" class="big-text">DOM Class Demo</h2>
// ```

// ```js
// const title = document.getElementById("title")

// // ➕ Add class
// title.classList.add("highlight")

// // ➖ Remove class
// title.classList.remove("big-text")

// // 🔁 Toggle class
// title.classList.toggle("active")

// // ✅ Check if class exists
// console.log(title.classList.contains("highlight"))
// ```

// ---

// ## 🛠️ PART 7: CREATING AND APPENDING ELEMENTS



```js
// 🧪 Create new element
const newPara = document.createElement("p")
newPara.innerText = "This is a new paragraph"

// ➕ Append to body
document.body.appendChild(newPara)

// 🧽 Remove element
// document.body.removeChild(newPara)
```



// ## 📍 PART 8: EVENTS IN DOM



```html
<button id="clickBtn">Click Me</button>
```

```js
const btn = document.getElementById("clickBtn")

btn.addEventListener("click", function(){
    alert("Button Clicked! 🎯")
})
```


// ## 📘 Bonus: DOM Traversal

// ```js
// const body = document.body
// console.log(body.children)       // HTMLCollection
// console.log(body.firstElementChild) // First child in body
// console.log(body.lastElementChild)  // Last child in body
// ```

// ---

// ## ✅ Homework Practice Questions (10)

// 1. DOM ka full form kya hota hai?
// 2. `window` aur `document` mein kya difference hai?
// 3. `querySelector()` aur `getElementById()` mein kya farak hai?
// 4. `innerText` aur `textContent` mein kya antar hai?
// 5. Kisi tag ka background color kaise change karte hain JS se?
// 6. `classList.add()` ka use kya hota hai?
// 7. Naya `p` tag JS se kaise create karte hain?
// 8. Event listener ka syntax kya hota hai?
// 9. `setAttribute()` aur `getAttribute()` kaise kaam karte hain?
// 10. `firstElementChild` kis liye use hota hai?

// ---



// ===========================
// 🌐 DOM COMPLETE TUTORIAL SERIES
// ===========================

// ---------------------------------
// ✅ PART 1: WINDOW & DOCUMENT
// ---------------------------------
console.log(window); // Global object
console.log(document); // Represents the DOM tree
console.log(document.title); // Page title
console.log(document.body); // Body of document


// ---------------------------------
// ✅ PART 2: SELECTORS
// ---------------------------------
const idEl = document.getElementById("main-heading");
const classEls = document.getElementsByClassName("info");
const tagEls = document.getElementsByTagName("p");
const qsEl = document.querySelector(".info");
const qsAll = document.querySelectorAll("p");


// ---------------------------------
// ✅ PART 3: INNER CONTENT
// ---------------------------------
const heading = document.getElementById("main-heading");
console.log(heading.innerText); // Visible text
console.log(heading.textContent); // All text (even hidden)
console.log(heading.innerHTML); // HTML content


// ---------------------------------
// ✅ PART 4: STYLING
// ---------------------------------
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "30px";


// ---------------------------------
// ✅ PART 5: ATTRIBUTES
// ---------------------------------
const image = document.querySelector("img");
image.getAttribute("src");
image.setAttribute("alt", "Hero image");
image.dataset.name = "flash";


// ---------------------------------
// ✅ PART 6: CLASSES
// ---------------------------------
heading.classList.add("highlight");
heading.classList.remove("info");
heading.classList.toggle("active");
console.log(heading.classList.contains("highlight"));


// ---------------------------------
// ✅ PART 7: CREATE & APPEND ELEMENT
// ---------------------------------
const newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);

// Remove
// document.body.removeChild(newPara);


// ---------------------------------
// ✅ PART 8: EVENTS
// ---------------------------------
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("Button Clicked!");
});


// ---------------------------------
// ✅ PART 9: DOM TRAVERSAL
// ---------------------------------
console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);


// ---------------------------------
// ✅ PART 10: EVENT OBJECTS
// ---------------------------------
btn.addEventListener("click", function(e) {
  console.log("Event Type:", e.type);
  console.log("Target:", e.target);
// });


// // ---------------------------------
// // ✅ PART 11: FORM EVENTS
// // ---------------------------------
// const form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//   e.preventDefault();
//   console.log("Form Submitted");
// });


// // ---------------------------------
// // ✅ PART 12: KEYBOARD EVENTS
// // ---------------------------------
// document.addEventListener("keydown", (e) => {
//   console.log("Key Pressed:", e.key);
// });


// // ---------------------------------
// // ✅ PART 13: MOUSE EVENTS
// // ---------------------------------
// btn.addEventListener("mouseover", () => {
//   console.log("Mouse Over");
// });
// btn.addEventListener("mouseout", () => {
//   console.log("Mouse Out");
// });


// // ---------------------------------
// // ✅ PART 14: BUBBLING vs CAPTURING
// // ---------------------------------
// const outer = document.getElementById("outer");
// // const inner = document.getElementById("inner");

// // outer.addEventListener("click", () => console.log("Outer Clicked"), true);
// // inner.addEventListener("click", () => console.log("Inner Clicked"));


// // // ---------------------------------
// // // ✅ PART 15: DELEGATION
// // // ---------------------------------
// // document.querySelector("ul").addEventListener("click", function(e) {
// //   if (e.target.tagName === "LI") {
// //     console.log("You clicked:", e.target.innerText);
// //   }
// // });


// // // ---------------------------------
// // // ✅ PART 16: DOMContentLoaded
// // // ---------------------------------
// // document.addEventListener("DOMContentLoaded", () => {
// //   console.log("HTML DOM Loaded and Parsed");
// // });




// // Bilkul bhai! Ab chalte hain **"How to Create a New Element in the DOM"** par — jaise tu code bhejta hai waise hi style mein, with Hindi-English explanation, comment ke saath step by step.

// // ---

// // ### 🔧 **How to Create a New Element in DOM**

// // ```js
// // // Step 1: Create an Element
// // const div = document.createElement('div')  
// // // 👉 Yahaan ek div element banaya, but abhi yeh DOM mein add nahi hua hai

// // // Step 2: Add class, id, or attribute
// // div.className = "main-box"
// // div.id = "uniqueDiv"
// // div.setAttribute("title", "Generated by JS")
// // // 👉 Humne class, id aur title attribute assign kiya

// // // Step 3: Add content inside element
// // div.innerText = "Hello Devesh, this is a new div from JS!"  
// // // 👉 Inner text set kiya — ismein hum HTML bhi daal sakte hain agar innerHTML use karein

// // // Step 4: Append it to the DOM
// // document.body.appendChild(div)  
// // // 👉 Final step: document ke body mein add kar diya
// // ```

// // ---

// // ### ✅ Output Explanation (In Browser):

// // Ek `div` element page ke bottom mein dikhai dega, jismeh likha hoga:

// // > Hello Devesh, this is a new div from JS!

// // ---

// // ### 🧠 Bonus: Inner HTML bhi use kar sakte ho

// // ```js
// // div.innerHTML = "<strong>Devesh is Coding!</strong>"
// // ```

// // ---

// // ### 📘 Practice Questions (DOM Element Creation se related):

// // 1. Create a `<p>` tag and add it to the body with some text.
// // 2. Add a button with id `"clickMe"` and text `"Click Me"` using JavaScript.
// // 3. Create a `<ul>` element with 3 `<li>` items using `createElement`.
// // 4. Create a `div` with class `"card"` and add an image + title inside it using `innerHTML`.
// // 5. Append a new paragraph inside an existing div with id `"container"`.
// // 6. Add an input field with type text and placeholder `"Enter your name"` using JS.
// // 7. Create an element and add multiple classes to it.
// // 8. Remove an element you just created.
// // 9. Dynamically create a list of 5 names using a loop and add it to DOM.
// // 10. Create a modal popup structure using only JavaScript.

// // ---



// Bhai Devesh, ab chalte hain **DOM Mastery** ke next level pe — jaise tu chahta hai **sab ek saath**:
// ✅ **Remove, Replace, Clone Elements**
// ✅ **DOM Events (click, keyup, mouseover etc.)**
// ✅ **Event Delegation & DOM Traversing**
// Full explanation Hindi-English mein + real code + 10 practice questions!

// ---

// ## 🔥 1. ✅ How to **Remove, Replace, Clone** DOM Elements

// ```js
// // Step 1: Create two elements
// const newHeading = document.createElement('h1')
// newHeading.textContent = "I am the NEW heading"

// const oldHeading = document.getElementById("oldHeading")  
// // 👉 Assume ek h1 jiska id = oldHeading hai already

// // Step 2: Replace old with new
// const parent = document.getElementById("container")
// parent.replaceChild(newHeading, oldHeading)

// // Step 3: Remove an element
// const para = document.getElementById("removeMe")
// para.remove()

// // Step 4: Clone an element
// const card = document.querySelector(".card")
// const cardCopy = card.cloneNode(true)  // true = deep clone
// document.body.appendChild(cardCopy)
// ```

// ---

// ## 🔥 2. ✅ **DOM Events** (click, keyup, mouseover...)

// ```html
// <button id="clickBtn">Click Me</button>
// <input type="text" id="nameInput" placeholder="Type Something" />
// ```

// ```js
// // Click Event
// document.getElementById("clickBtn").addEventListener("click", () => {
//   alert("Button Clicked!")
// })

// // Keyup Event
// document.getElementById("nameInput").addEventListener("keyup", (e) => {
//   console.log("User typed:", e.target.value)
// })

// // Mouseover Event
// document.getElementById("clickBtn").addEventListener("mouseover", () => {
//   console.log("Mouse is over the button")
// })
// ```

// ---

// ## 🔥 3. ✅ **Event Delegation** & **Traversing DOM**

// ### Event Delegation

// ```html
// <ul id="items">
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Mango</li>
// </ul>
// ```

// ```js
// // Event Delegation: Parent pe listener, child pe action
// document.getElementById("items").addEventListener("click", function(e) {
//   if (e.target.tagName === 'LI') {
//     alert("You clicked on " + e.target.textContent)
//   }
// })
// ```

// ### Traversing DOM

// ```js
// const child = document.querySelector("li")
// console.log(child.parentElement)     // 👈 Parent mil gaya
// console.log(child.nextElementSibling)  // 👈 Next sibling
// console.log(child.previousElementSibling) // 👈 Previous sibling
// ```

// ---

// ## 🔁 Practice Questions (10 Important DOM Tasks)

// 1. Remove a `<p>` tag when a button is clicked.
// 2. Replace a heading when user clicks a replace button.
// 3. Clone a card component and add it to the DOM.
// 4. Add a keyup event on input and log its value live.
// 5. Add a click event to every list item using event delegation.
// 6. On mouseover, change button background color.
// 7. Traverse from child to parent and log tag names.
// 8. Create a dynamic form and remove input fields with a button.
// 9. Make a simple todo app where clicking “X” removes the item.
// 10. Add an event listener that works even if new elements are added later.


// Bhai Devesh, ab chalte hain **DOM Mastery** ke next level pe — jaise tu chahta hai **sab ek saath**:
// ✅ **Remove, Replace, Clone Elements**
// ✅ **DOM Events (click, keyup, mouseover etc.)**
// ✅ **Event Delegation & DOM Traversing**
// Full explanation Hindi-English mein + real code + 10 practice questions!

// ---

// ## 🔥 1. ✅ How to **Remove, Replace, Clone** DOM Elements

// ```js
// // Step 1: Create two elements
// const newHeading = document.createElement('h1')
// newHeading.textContent = "I am the NEW heading"

// const oldHeading = document.getElementById("oldHeading")  
// // 👉 Assume ek h1 jiska id = oldHeading hai already

// // Step 2: Replace old with new
// const parent = document.getElementById("container")
// parent.replaceChild(newHeading, oldHeading)

// // Step 3: Remove an element
// const para = document.getElementById("removeMe")
// para.remove()

// // Step 4: Clone an element
// const card = document.querySelector(".card")
// const cardCopy = card.cloneNode(true)  // true = deep clone
// document.body.appendChild(cardCopy)
// ```

// ---

// ## 🔥 2. ✅ **DOM Events** (click, keyup, mouseover...)

// ```html
// <button id="clickBtn">Click Me</button>
// <input type="text" id="nameInput" placeholder="Type Something" />
// ```

// ```js
// // Click Event
// document.getElementById("clickBtn").addEventListener("click", () => {
//   alert("Button Clicked!")
// })

// // Keyup Event
// document.getElementById("nameInput").addEventListener("keyup", (e) => {
//   console.log("User typed:", e.target.value)
// })

// // Mouseover Event
// document.getElementById("clickBtn").addEventListener("mouseover", () => {
//   console.log("Mouse is over the button")
// })
// ```

// ---

// ## 🔥 3. ✅ **Event Delegation** & **Traversing DOM**

// ### Event Delegation

// ```html
// <ul id="items">
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Mango</li>
// </ul>
// ```

// ```js
// // Event Delegation: Parent pe listener, child pe action
// document.getElementById("items").addEventListener("click", function(e) {
//   if (e.target.tagName === 'LI') {
//     alert("You clicked on " + e.target.textContent)
//   }
// })
// ```

// ### Traversing DOM

// ```js
// const child = document.querySelector("li")
// console.log(child.parentElement)     // 👈 Parent mil gaya
// console.log(child.nextElementSibling)  // 👈 Next sibling
// console.log(child.previousElementSibling) // 👈 Previous sibling
// ```

// ---

// ## 🔁 Practice Questions (10 Important DOM Tasks)

// 1. Remove a `<p>` tag when a button is clicked.
// 2. Replace a heading when user clicks a replace button.
// 3. Clone a card component and add it to the DOM.
// 4. Add a keyup event on input and log its value live.
// 5. Add a click event to every list item using event delegation.
// 6. On mouseover, change button background color.
// 7. Traverse from child to parent and log tag names.
// 8. Create a dynamic form and remove input fields with a button.
// 9. Make a simple todo app where clicking “X” removes the item.
// 10. Add an event listener that works even if new elements are added later.

// ---

// Agle topics mein chalayin:

// ✅ DOM Styling & setAttribute/getAttribute
// ✅ CreateElement with Templates
// ✅ MutationObserver / IntersectionObserver
// ✅ Browser Events: Load, Scroll, Resize

// Bata bhai, next kya rahe?


// Bhai Devesh, chalte hain DOM mastery ke **🔥 Pro Level** part pe:

// ✅ `createElement()` with Templates
// ✅ `MutationObserver` / `IntersectionObserver`
// ✅ Browser Events: `load`, `scroll`, `resize`

// ---

// ## ✅ 1. `createElement()` with Templates (Easy & Powerful Way)

// > Ye tareeka dynamic content banane ke liye best hai — cards, lists, modals etc.

// ### ✅ HTML Template

// ```html
// <template id="cardTemplate">
//   <div class="card">
//     <h2 class="title"></h2>
//     <p class="desc"></p>
//   </div>
// </template>

// <div id="container"></div>
// ```

// ### ✅ JS Code

// ```js
// const data = [
//   { title: "JS Mastery", desc: "Learn DOM like a pro!" },
//   { title: "React Magic", desc: "Component-based dev." }
// ]

// data.forEach(item => {
//   const template = document.getElementById("cardTemplate")
//   const clone = template.content.cloneNode(true)

//   clone.querySelector(".title").textContent = item.title
//   clone.querySelector(".desc").textContent = item.desc

//   document.getElementById("container").appendChild(clone)
// })
// ```

// 📝 **Yeh kya kiya?**

// * Template ko clone kiya
// * Data daala
// * Container mein inject kar diya

// ---

// ## ✅ 2. `MutationObserver` & `IntersectionObserver`

// ### ✅ MutationObserver – Changes watch karo

// ```js
// const target = document.getElementById("container")

// const observer = new MutationObserver((mutations) => {
//   mutations.forEach(mutation => {
//     console.log("Something changed in DOM!", mutation)
//   })
// })

// observer.observe(target, { childList: true, subtree: true })
// ```

// 🔍 Ye use hota hai jab DOM update hone par kuch karna ho — like new message aaye toh notification dikhana.

// ---

// ### ✅ IntersectionObserver – Jab Element View Mein Aaye

// ```js
// const box = document.querySelector('.box')

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log("Box is visible!")
//     }
//   })
// })

// observer.observe(box)
// ```

// 📌 Ye use hota hai lazy loading, scroll animation ya ad display ke liye.

// ---

// ## ✅ 3. Browser Events: `load`, `scroll`, `resize`

// ### ✅ Page Load Event

// ```js
// window.addEventListener("load", () => {
//   console.log("Page fully loaded!")
// })
// ```

// ### ✅ Scroll Event

// ```js
// window.addEventListener("scroll", () => {
//   console.log("User is scrolling...")
// })
// ```

// ### ✅ Resize Event

// ```js
// window.addEventListener("resize", () => {
//   console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`)
// })
// ```

// ---

// ## 🔁 Practice Questions (10 Tasks)

// 1. Use template to render 5 products dynamically.
// 2. Create a button that adds new `<li>` and log it via `MutationObserver`.
// 3. Show alert when a `div` comes into view using `IntersectionObserver`.
// 4. Count how many times user resized the browser.
// 5. Log scroll position on every scroll.
// 6. After full load of the page, auto-scroll to bottom.
// 7. Use template to show chat messages on button click.
// 8. Detect when a new child is added to `#container` using MutationObserver.
// 9. Track visibility of multiple `.card` elements while scrolling.
// 10. Create infinite scroll with `IntersectionObserver` and templates 
