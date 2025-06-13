// // const program = ["JAvaScript" , "Ruby" ,"Java" ,"Python" ]

// // const value = program.forEach( (item) => {
// //     console.log(item)
// //     return item

// // })
// // console.log(value)



// const myNumber =[1,2,3,4,5,6,7,8,9,10]

// const newnumb1 = myNumber.filter( (num) => num >4)
// // console.log(newnumb1)



// const newnumb = myNumber.filter( (num) => {
//     return num >4
// })


// // console.log(newnumb)

// const newNumbs = []
// newNumbs.forEach( (num) =>{
//     if(num > 4){
//         newNumbs.push(num)
//     }
// })


// const books = [
//     {
//         title: "The Alchemist",
//         author: "Paulo Coelho",
//         publishDate: "1988",
//         history: "A young shepherd named Santiago travels in search of a treasure and discovers his personal legend.",
//         genre: "Fiction"
//     },
//     {
//         title: "Wings of Fire",
//         author: "A. P. J. Abdul Kalam",
//         publishDate: "1999",
//         history: "Autobiography of India's missile man and former president A.P.J. Abdul Kalam.",
//         genre: "Autobiography"
//     },
//     {
//         title: "Harry Potter and the Sorcerer's Stone",
//         author: "J.K. Rowling",
//         publishDate: "1997",
//         history: "The story of a young wizard, Harry Potter, as he discovers his magical heritage.",
//         genre: "Fantasy"
//     }
// ];


// let userbooks = books.filter ( (bk) => bk.author === 'J.K. Rowling' )

// userbooks = books.filter ( (bk) => { return bk.publishDate >= 1999})

// console.log(userbooks)




// ❌ forEach() kuch return nahi karta
// Iska kaam sirf side-effect (like console.log) ke liye hota hai

const program = ["JavaScript", "Ruby", "Java", "Python"];

const value = program.forEach((item) => {
    console.log(item);
    return item; // Yeh return ignore ho jata hai
});

console.log(value); // Output: undefined

// ✅ filter() ek naya array return karta hai 
// filter() sirf un elements ko rakhta hai jinke liye condition true hoti hai

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Short form (implicit return)
const newnumb1 = myNumber.filter((num) => num > 4);
console.log("newnumb1:", newnumb1); // [5,6,7,8,9,10]

// Long form (explicit return)
const newnumb = myNumber.filter((num) => {
    return num > 4;
});
console.log("newnumb:", newnumb); // [5,6,7,8,9,10]

// ❌ Galat: forEach() ko use karke filter jaisa kaam karne ki koshish
const newNumbs = [];
myNumber.forEach((num) => {
    if (num > 4) {
        newNumbs.push(num); // Yeh manually karna pad raha hai
    }
});
console.log("newNumbs (from forEach):", newNumbs); // [5,6,7,8,9,10]

// ✅ Real-Life Example: Books Filter

const books = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        publishDate: "1988",
        history: "A young shepherd named Santiago travels in search of a treasure and discovers his personal legend.",
        genre: "Fiction"
    },
    {
        title: "Wings of Fire",
        author: "A. P. J. Abdul Kalam",
        publishDate: "1999",
        history: "Autobiography of India's missile man and former president A.P.J. Abdul Kalam.",
        genre: "Autobiography"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        publishDate: "1997",
        history: "The story of a young wizard, Harry Potter, as he discovers his magical heritage.",
        genre: "Fantasy"
    }
];

// ✅ Filter by author
let userbooks = books.filter((bk) => bk.author === 'J.K. Rowling');
console.log("Books by J.K. Rowling:", userbooks);

// ✅ Filter by publish year >= 1999
userbooks = books.filter((bk) => {
    return bk.publishDate >= 1999;
});
console.log("Books published after 1999:", userbooks);


// | Method      | Use Case                                      | Return Type | Notes                                                    |
// | ----------- | --------------------------------------------- | ----------- | -------------------------------------------------------- |
// | `forEach()` | Har element pe kaam karna (log, side effects) | `undefined` | Return value ignore hota hai                             |
// | `filter()`  | Condition-based filtering                     | New Array   | Sirf wahi elements return karta hai jinke liye `true` ho |


// 🧠 10 Practice Questions (Based on Above Code)
// What will forEach() return if we use return item inside its callback?

// How is filter() different from forEach() in terms of return value?

// Can you use break or continue inside a forEach() or filter()?

// Write a filter() to get numbers divisible by 3 from myNumber.

// Filter books whose genre is "Fantasy".

// What happens if your filter() callback doesn’t return anything?

// How to manually achieve the result of filter() using forEach()?

// Write code to filter books written by Paulo Coelho.

// Why is filter() more suitable for extracting data than forEach()?

// Create a filter() to get books published before the year 1990.

