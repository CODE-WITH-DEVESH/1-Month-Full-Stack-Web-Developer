function Mutipleby5(num){
    return num *5
}
Mutipleby5.power =2

console.log(Mutipleby5(5))
console.log(Mutipleby5.power)
console.log(Mutipleby5.prototype)


function crateUser( username, score){
    this.username =username
    this.score =score
}

crateUser.prototype.increment =function(){
    this.score++
}

crateUser.prototype.printMe =function(){
    console.log(`score is ${this.score}`)

}

const chai = new crateUser("chai" , 20)
const tea = new crateUser("tea" , 204)


chai.printMe()