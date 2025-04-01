// Questão 1: Escreva um código que irá criar variáveis ​​e inicializá-las com valores de boolean, Number, BigInt, String tipos undefined usando (quando possível) literais e funções construtoras.
let b1 = true
let b2 = Boolean(true)

let n1 = 100
let n2 = Number(200)

let bi1 = 100n
let bi2 = BigInt(200)

let s1 = 'Hello'
let s2 = String('Hello')

let u1 = undefined

// Pergunta 2: Imprima todos os valores e todos os tipos desses valores usando console.log. Tente usar a interpolação de string para exibir o valor e o tipo ao mesmo tempo com um único console.log chamada, por exemplo, no seguinte formato:1000 [number].

console.log(`${b1} [${typeof b1}]`)
console.log(`${b2} [${typeof b2}]`)

console.log(`${n1} [${typeof n1}]`)
console.log(`${n2} [${typeof n2}]`)

console.log(`${bi1} [${typeof bi1}]`)
console.log(`${bi2} [${typeof bi2}]`)

console.log(`${s1} [${typeof s1}]`)
console.log(`${s2} [${typeof s2}]`)

console.log(`${u1} [${typeof u1}]`)




