// Most of these functions can be called without any arguments. In such a situation:

//the function String will by default create and return an empty string – primitive "";
//the function Number will by default create and return the value 0;
//the function Boolean will by default create and return the value of false.
//The function BigInt, unlike other constructor functions, requires you to pass some initial value to it. This can be an integer number that will be converted to a BigInt (see examples).

const str = String();
const num = Number();
const Bool = Boolean();

console.log(str); // -> 
console.log(num); // -> 0
console.log(Bool); // -> false

const big1 = BigInt(42);
console.log(big1); // -> 42n

const big2 = BigInt(); // -> Uncaught TypeError: Cannot convert undefined to a BigInt