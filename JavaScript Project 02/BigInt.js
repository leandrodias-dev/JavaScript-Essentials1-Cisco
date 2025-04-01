// BigIntO tipo BigInt não é usado com muita frequência. Ele nos permite escrever números inteiros de praticamente qualquer comprimento. Para quase todas as operações numéricas normais, o tipo Number é suficiente, mas de vez em quando precisamos de um tipo que possa lidar com números inteiros muito maiores.Podemos usar operações matemáticas no BigInts da mesma forma que no Numbers, mas há uma diferença na hora de dividir. Como BigInt é um tipo inteiro, o resultado da divisão será sempre arredondado para o número inteiro mais próximo.Literais BigInt são números com o sufixo ...n .-----------------//

let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big); // -> 1234567890000000000000n
console.log(typeof big); // -> bigint

console.log(big2); // -> 1n
console.log(7n / 4n); // -> 1n

// Você não pode usar outros tipos em operações aritméticas no BigInts, ou seja, não pode adicionar um BigInt e um Number entre si (isso gerará um erro).
let  big3  =  1000n  +  20;  
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions


// O BigInt não possui equivalente próprio deInfinidadeouNaNvalores. No caso do tipo Número, tais valores aparecem ao dividir por 0 (resultado Infinito) ou ao tentar realizar uma ação aritmética sobre um valor que não é um número (resultado NaN). No caso do tipo BigInt, tais ações gerarão um erro.
let  big4  =  1000n  /  0n;  //  ->  Uncaught  RangeError:  Division  by  zero
