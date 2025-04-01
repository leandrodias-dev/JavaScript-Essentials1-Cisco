// Questão 3: Realize uma cadeia de conversões: crie uma Boolean partir de um BigInt criado a partir de um Number que foi criado a partir de um String. Comece com o valor"1234". É possível?

let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`); // or

let s = "1234";
let n = Number(s); 
let bi = BigInt(n);
let b2 = Boolean(bi);

console.log(`${b} [${typeof b}]`);
