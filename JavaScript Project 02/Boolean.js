// O Boolean é um tipo de dados lógico. Só pode assumir um de dois valores:verdadeirooufalso. É usado principalmente como uma expressão condicional necessária para decidir qual parte do código deve ser executada ou por quanto tempo algo deve ser repetido (isso é chamado de instrução de fluxo de controle e veremos isso mais detalhadamente no Módulo 4).
//Booleanos também são usados ​​como o que é comumente chamado de sinalizador , uma variável que sinaliza algo que pode estar presente ou ausente, ativado ou desativado, etc. Como qualquer outra variável, os booleanos devem ter nomes claros e informativos. Não é obrigatório, mas muitas vezes podemos ver que os nomes dos sinalizadores booleanos são prefixados com "is", para mostrar a intenção de verificar valores verdadeiros/falso.
let isDataValid = true
let isStringTooLong = false
let isGameOver = false
continueLoop = true

console.log(false) // -> false
console.log(typeof false) // -> boolean
console.log(isDataValid) // -> true
console.log(typeof isDataValid) // -> boolean
