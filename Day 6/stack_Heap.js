// Stack (Primitive) , Heap (Non _Primitive)

// let myYTname = "Code With Dev"

// let anotherName =myYTname
// anotherName ="Code With Atul"

// console.log(myYTname);
// console.log(anotherName);

// let userone ={
//     email:"Dev@gmail.com",
//     Upi: "gpay@ybl"


// }
// let usertwo = userone;
// usertwo.email="atul@gmail.com"
// console.log(userone.email);
// console.log(usertwo.email);



// Stack (Primitive), Heap (Non-Primitive)

// Yeh ek primitive type (String) hai
let myYTname = "Code With Dev"

// anotherName ko copy kiya myYTname se
let anotherName = myYTname

// anotherName me change kiya
anotherName = "Code With Atul"

// Ab dono ko print karein
console.log(myYTname);     // Output: Code With Dev
console.log(anotherName);  // Output: Code With Atul
