// const mysym =Symbol("key1")
// const DSJser ={
//     name: "Devesh",
//     "full name" : "Devesh Kumar Singh Baghel",
//     age:19,
//     email: "dksbaghelGmail.com",
//     [mysym]: "mykey1",
//     location : "jaipur"
// }
// console.log(DSJser.name)
// console.log(DSJser[mysym]) 
// console.log(DSJser["full name"])
// console.log(typeof DSJser[mysym]) 
// DSJser.email ="google@gmail.com"
// console.log(DSJser.email)
// // Object.freeze(DSJser)
// DSJser.email ="googleee@gmail.com"

// console.log(DSJser.email)
// console.log(DSJser)

// DSJser.greeting =function() {
//     console.log("Hello DS USERS HoW ARE YOU TODAY")
// };
// // console.log(DSJser.greeting())
// DSJser.greetingtwo =function(){
//     console.log(`Hello my Name is ${this.name}`)
    
// }
// // console.log(DSJser.greetingtwo())
// DSJser.greeting()
// DSJser.greetingtwo()

// // Important Practice Questions on Object Literals

// Create an object student with properties:

// name: "Ravi"

// rollNo: 101

// marks: [78, 85, 90]
// Add a method getAverage() to calculate and return the average marks.

const student = {
    name: "Ravi",
    rollNo: 101,
    marks: [70, 85, 90],
    
    getAverage: function () {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }
};

console.log("Student Name:", student.name);
console.log("Roll No:", student.rollNo);
console.log("Marks:", student.marks);
console.log("Average Marks:", student.getAverage());
