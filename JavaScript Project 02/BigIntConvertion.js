// Para que as conversões para BigInt sejam bem-sucedidas, precisamos de um Número ou String representando um número como um valor a ser convertido. Os valores para conversão podem ser fornecidos na forma decimal padrão, bem como na forma hexadecimal, octal ou binária. Isso se aplica tanto à situação em que fornecemos os literais Number e String como argumentos (ou variáveis ​​contendo dados desses tipos). Também podemos usar notação exponencial, mas apenas para argumentos numéricos. Ao contrário de outras conversões, a conversão para BigInt gerará um erro e interromperá o programa quando não for possível converter um determinado valor.

//Nota: Ao testar o exemplo a seguir, preste atenção ao fato de que o primeiro erro impede a execução adicional do código. Portanto, execute o exemplo várias vezes seguidas, removendo as chamadas erradas uma por uma.

console.log(BigInt(11)); // 11n
console.log(BigInt(0x11)); // 17n
console.log(BigInt(11e2)); // 1100n

console.log(BigInt(true)); // 1n

console.log(BigInt("11")); // 11n
console.log(BigInt("0x11")); // 17n

console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt


console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt

console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

// Apos executar alterando as conversões de BigInt para Boolean

console.log(Boolean(null)); 
console.log(Boolean(undefined)); 
console.log(Boolean(NaN)); 