// As conversões também podem acontecer automaticamente e acontecem o tempo todo. Este exemplo simples irá demonstrar isso (testamos um exemplo semelhante ao discutir o tipo String):

const str1 = 42 + "1";
console.log(str1); // 421
console.log(typeof str1); // string

const str2 = 42 = "1";
console.log(str2); // 42 
console.log(typeof str2); // number 



// Então o que está acontecendo? Os detalhes serão mostrados no capítulo sobre operadores, mas a resposta curta é que quando tentamos realizar uma adição quando um dos argumentos é uma string, o JavaScript também converterá o restante dos argumentos em uma string. Isto é o que está acontecendo comstr1no exemplo. A subtração com uma string, entretanto, não faz muito sentido, então nesse caso o JavaScript converte tudo para Numbers.