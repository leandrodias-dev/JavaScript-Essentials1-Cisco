//Onuloo valor é bastante específico. O valor em si é primitivo, enquanto o tipo ao qual pertence não é um tipo primitivo, como Número ou indefinido. Esta é uma categoria separada, associada a tipos complexos, como objetos. Onulovalor é usado para indicar que a variável não contém nada e, na maioria das vezes, é uma variável que se destina a conter valores de tipos complexos.Em poucas palavras, podemos supor que oindefinidovalor é atribuído automaticamente a variáveis ​​não inicializadas, mas se quisermos indicar explicitamente que a variável não contém nada, atribuímos a ela um valornulovalor. Uma advertência importante paranuloé que quando verificado com otipo deoperador, ele retornará"objeto", um resultado surpreendente. Isso faz parte de um sistema de objetos muito mais complicado, mas por enquanto, você só precisa saber quetipo de nuloé igual a"objeto".
let someResource;
console.log(someResource); // -> undefined
console.log(typeof someResource); // -> undefined

someResource = null;
console.log(someResource); // -> null
console.log(typeof someResource); // -> object