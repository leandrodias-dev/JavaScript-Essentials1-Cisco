// Questão 4: Tente adicionar dois valores do mesmo tipo e verifique o tipo de resultado. Experimente para todos os tipos primitivos.

let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`) // !!! Number
console.log(`${n} [${typeof n}]`); 
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // number