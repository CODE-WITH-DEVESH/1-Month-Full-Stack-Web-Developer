function calculatecardPrice(...num1){
    return num1
}
console.log(calculatecardPrice(200, 300, 400))


function calculatecardPricetow(val1 , val2 , ...num2){
    return num2
}
console.log(calculatecardPricetow (500, 600, 700))


const user ={
    usernmae : "Devesh",
    price : 199

}
function passobj (anyobjects){
    console.log(`User name is ${anyobjects.usernmae} and price is ${anyobjects.price}`)
}
passobj(user)

const newArr = [23,45,67,89]
function returnSecondValue (getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArr))