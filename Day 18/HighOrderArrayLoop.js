// // 
// // 
// // 
// // for of 

// ["" ,"" ,"" ,"" ] 
// [{} , {} ,{} ,{}]

// const arr =[1,2,3,4,5,6]


// for (const num of arr) {
//     console.log(num)
    
// }

// const greeting =" Hello World!"
// for (const greet of greeting) {
//     console.log(greet)
    
// }

// // Maps

// const map = new Map()
// map.set('IN' , "India")
// map.set('IN' , "India")
// map.set('USA' , "United states Of America ")
// map.set('fr' , "France")

// console.log(map)

// for (const [key , Value] of map) {
//     console.log(key , Value)
    
// }

// const myobjects={
//     'Gmae1' : 'NFS',
//     ' Game2': 'SpiderMan'
// }

// for (const [key , Value] of myobjects) {
//     console.log(key , Value)
    
// }

// const myobjects1 ={
//     js: 'JavaScript',
//     cpp: 'c++',
//     rb: 'Ruby',

// }
// for (const key in myobjects1) {
//     console.log(`${key} Shortcut is for ${myobjects1[key]}`);
    
// }

// const programming =["JS", "rb", "pY" ,"java","cpp"]

// for (const key in programming) {
//     console.log(key)
   
// }


// const map1 = new Map()
// map.set('IN' , "India")
// map.set('IN' , "India")
// map.set('USA' , "United states Of America ")
// map.set('fr' , "France")


// for (const key in map1) {
//     console.log(key)
   
// }





// for-of loop (arrays aur strings par use hota hai)

const arr = [1, 2, 3, 4, 5, 6];

// Ye loop array ke har element ko ek-ek karke print karega
for (const num of arr) {
    console.log(num);  // Output: 1 2 3 4 5 6
}

// Strings par bhi for-of use hota hai

const greeting = "Hello World!";

// Har character ko alag-alag print karega
for (const greet of greeting) {
    console.log(greet);  // Output: H e l l o   W o r l d !
}

// Maps (unique key-value pair hota hai)

const map = new Map();
map.set('IN', "India");
map.set('IN', "India");  // Duplicate key overwrite ho jata hai
map.set('USA', "United States Of America");
map.set('FR', "France");

console.log(map);

// For-of loop maps par bhi kaam karta hai
// [key, value] pair destructure kar ke milta hai
for (const [key, value] of map) {
    console.log(key, value);  
    // Output: IN India
    //         USA United States Of America
    //         FR France
}

// ❌ For-of loop **objects** par directly nahi chalta, error aata hai
const myobjects = {
    'Game1': 'NFS',
    'Game2': 'SpiderMan'
};

// for-of => ❌ Invalid on plain objects
// isliye ye loop fail karega agar object par lagao directly

// ✅ for-in loop (objects aur arrays dono par kaam karta hai)
const myobjects1 = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby'
};

// key milta hai aur usse value access kar sakte ho
for (const key in myobjects1) {
    console.log(`${key} shortcut is for ${myobjects1[key]}`);
    // Output: js shortcut is for JavaScript ...
}

// for-in loop array par bhi kaam karta hai (lekin index deta hai)
const programming = ["JS", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(key);         // Output: 0 1 2 3 4 (index values)
    console.log(programming[key]);  // Output: array values
}

// ❌ Map par for-in nahi chalta (kyunki map iterable hai, object nahi)
const map1 = new Map();
map1.set('IN', "India");
map1.set('USA', "United States Of America");
map1.set('FR', "France");

for (const key in map1) {
    console.log(key);  // ❌ Kuch bhi print nahi karega
    // For-in doesn't work on Map
}


// | Loop Type | Works On           | Returns       | Notes                              |
// | --------- | ------------------ | ------------- | ---------------------------------- |
// | `for-of`  | Array, String, Map | Values        | Objects par directly nahi chalega  |
// | `for-in`  | Array, Object      | Keys/Indexes  | Map par nahi chalega               |
// | `Map`     | Use `for-of`       | \[key, value] | Duplicate keys overwrite hote hain |


// 🧠 Practice Questions (Based on Above Code)
// What does for-of return when used on a string?

// Why doesn’t for-of work directly on objects?

// What will be the output of for (const key in ["a", "b", "c"])?

// How does Map store duplicate keys?

// Why is for-in not suitable for looping over maps?

// Write code to print only values from a map using for-of.

// How can you loop over an object to print keys and values?

// Explain the output of for (const key in programming) in the code above.

// How to check if a key exists in an object while looping using for-in?

// Which loop would you use to get both index and value from an array?

