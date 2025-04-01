// Este é o principal tipo numérico em JavaScript que representa números reais (por exemplo, frações) e inteiros. O formato em que os dados deste tipo são armazenados na memória faz com que os valores deste tipo sejam por vezes aproximados (especialmente, mas não apenas, valores muito grandes ou algumas frações). Supõe-se, entre outras coisas, que para garantir a exatidão dos cálculos, os valores inteiros devem ser limitados em JavaScript ao intervalo de-(253-1)para(253-1).
// Os números permitem todas as operações aritméticas típicas, como adição, subtração, multiplicação e divisão.

const year = 1991;
let deplayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year); // -> 1991;
console.log(typeof year); // -> number;

//Os números em JavaScript geralmente são apresentados na forma decimal, com a qual estamos acostumados na vida cotidiana. Contudo, se um literal que descreve um número for precedido por um prefixo apropriado, podemos apresentá-lo em hexadecimal(0x…), octal(0o...)ou binário(0b...)forma. Também podemos escrever números na forma exponencial, por exemplo, em vez de9.000, nós podemos escrever9e3, e em vez de0,00123, nós podemos escrever123e-5. Você provavelmente já está familiarizado com os termos que usamos agora, como representação decimal, hexadecimal ou exponencial.

//let a = 10; // decimal - deafault
//let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary

console.log(a); // ->  10
console.log(b); // ->  16
console.log(c); // ->  8
console.log(d); // ->  2

let x = 9e3;
let y = 123e-5;
console.log(x); // -> 9000
console.log(y); // -> 0.00123

// Além dos números regulares em JavaScript, usamos três valores especiais adicionais, que são:Infinidade,-InfinidadeeNaN(não é um número). Os dois primeiros não requerem explicações adicionais – são exatamente o que sabemos da matemática. O último,NaN, não é tanto um valor numérico, mas uma notificação de que alguma ação aritmética (ou função matemática) não pôde ser executada porque o argumento não é um número ou não pode ser convertido em um número. //

let a = 1 / 0;
let b = -Infinity;

console.log(a); // -> Infinity
console.log(b); // -> Infinity
console.log(typeof a); // -> number
console.log(typeof b); // -> number

let s = "It's definitely not a number";
let n = s * 10;
console.log(n); // -. NaN
console.log(typeof n); // -> number
