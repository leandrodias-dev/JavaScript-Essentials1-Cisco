// A conversão para um número não é tão óbvia quanto a conversão para uma string. Funciona conforme o esperado para strings que representam números reais, como"14","-72.134", ou strings que representam números em notação científica, como"2e3"ou valores numéricos especiais como"NaN"ou"Infinidade".No entanto, a string também pode conter números nos formatos hexadecimal, octal e binário. Eles devem ser precedidos por 0x, 0o ou 0b respectivamente. Para qualquer string que não possa ser convertida em um valor especial,NaN(não um número) é retornado. ABigInttambém pode ser convertido em umNúmero, mas precisamos lembrar que um BigInt pode armazenar valores muito maiores que um Number, portanto, para valores grandes, parte deles pode ficar truncada ou acabar sendo imprecisa. O Booleanoverdadeiroé convertido em1, efalsopara0– isso é comum para muitas linguagens de programação. Uma tentativa de converter um valor indefinido resultará em NaN, enquanto nulo será convertido em0.

console.log(Number(42));

console.log(Number("11")); // - 11
console.log(Number("0x11")); // - 17
console.log(Number("0o11")); // - 9
console.log(Number("0b11")); // - 3
console.log(Number("12e3")); // - 12000
console.log(Number("Infinity")); // - Infinity
console.log(Number("text")); // - NaN

console.log(Number(14n)); // - 14
console.log(Number(123456789123456789123n)); // - 123456789123456780000

console.log(Number(true)); // - 1
console.log(Number(false)); // - 0

console.log(Number(undefined)); // - NaN

console.log(Number(null)); // - 0