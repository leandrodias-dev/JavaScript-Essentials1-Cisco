// Como podemos adicionar um novo elemento a um array existente, por exemplo, um vazio?

//A maneira mais fácil seria atribuir um novo valor a uma posição específica usando a notação de colchetes. Para o intérprete, não importa se já existe algo neste índice ou não. Isso apenas coloca um novo valor ali. O interessante é que não precisamos preencher o array com elementos um por um – você pode deixar espaços vazios nele.

let animals = [];
console.log(animals[0]);

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // dog
console.log(animals[1]); // undefined
console.log(animals[2]); // cat

//============ No exemplo, declaramos um array de animais vazio. Colocamos então dois elementos, “cachorro” e “gato”, nas posições 0 e 2, deixando a posição 1 vazia. Esta, porém, não é a única forma de adicionar novos elementos ao array, e apresentaremos outras em breve, bem como formas de removê-los.
