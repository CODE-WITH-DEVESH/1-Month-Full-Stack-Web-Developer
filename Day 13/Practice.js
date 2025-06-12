// let a =300

// if(true){
//     let a =100
//     const b = 40;
//     console.log("INNER BODY" , a)
// }

// console.log("outer value",a);



function one (){
    const username ="Devesh"


    function two (){
        const websie = "Youtube"
        console.log(username)
    }
    two()
}
one()


if(true){
    const usernmae ="devesh"

    if(usernmae === "devesh"){

        const websie = " Youtube"
        console.log(usernmae + websie)

    }
}

function addone(numb){
    return numb +2
}
console.log(addone(5))