// As conversões para Booleano seguem regras simples, pois só podemos ter um de dois valores:verdadeirooufalso. O valor quefalsoé sempre retornado para:

//0,
//NaN,
//cadeia vazia,
//indefinido,
//nulo
//Qualquer outro valor resultará emverdadeirosendo devolvido.

console.log(Boolean(42)); // true

console.log(Boolean(42)); // true
console.log(Boolean(0)); //  false
console.log(Boolean(NaN)); // false

console.log(Boolean("text")); // true
console.log(Boolean("")); //     false

console.log(Boolean(undefined)); // false

console.log(Boolean(null)); // false