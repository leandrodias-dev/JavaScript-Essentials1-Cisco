//var  height  =  180;
console.log(height) //  ->  180
console.log(weight) //  ->  Uncaught  ReferenceError:  weight  is  not  defined

// No exemplo acima, esquecemos de declarar a variável peso. O resultado é óbvio: estamos nos referindo a uma variável (ou seja, estamos tentando ler seu conteúdo) que não existe. Algo assim deve terminar em erro. //

var height = 180
comsole.log(height)
console.log(weight)
var weight = 70
console.log(weight)

// --- Porém, a tentativa de exibir o conteúdo da variável peso dá dois resultados diferentes. Por que? O içamento diz respeito apenas à declaração, não à inicialização. Portanto o valor 70, que atribuímos à variável peso, permanece na linha onde está a declaração original. O exemplo acima é interpretado pelo mecanismo JavaScript mais ou menos da seguinte maneira: //

var weight
var height = 180
console.log(height) // -> 180
console.log(weight) // -> undefined
weight = 70
console.log(weight) // -> 70
