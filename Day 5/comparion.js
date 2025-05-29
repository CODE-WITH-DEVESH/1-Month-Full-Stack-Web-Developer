console.log(null > 0);
console.log(null ==0)
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined >  0);
console.log(undefined < 0);


console.log("2" === 2)

console.log(null > 0);      // false ❌
console.log(null == 0);     // false ❌
console.log(null >= 0);     // true ✅
console.log(undefined == 0);   // false ❌
console.log(undefined >  0);   // false ❌
console.log(undefined < 0);   // false ❌
console.log("2" === 2);   // false ❌


// Final Summary in WhatsApp Style:
// Expression	Output	Reason
// null > 0	false	null → 0 hota hai but > me fail
// null == 0	false	null sirf undefined ke barabar hota
// null >= 0	true	null → 0, and 0 >= 0 ✅
// undefined == 0	false	undefined kisi number se equal nahi
// undefined > 0	false	NaN comparison → false
// undefined < 0	false	NaN again → false
// "2" === 2	false	Different type: string vs number
