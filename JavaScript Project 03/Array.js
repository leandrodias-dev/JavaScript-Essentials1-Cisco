// A maneira mais fácil de criar arrays em JavaScript é usar colchetes (é um array literal). Desta forma, podemos criar tanto um array vazio, no qual os elementos serão inseridos posteriormente, quanto um array contendo alguns elementos iniciais (que serão separados por vírgulas). Referindo-nos a um determinado elemento do array, usamos a notação de colchetes – após o nome da variável do array, escrevemos um parêntese quadrado, no qual colocamos o índice do elemento que nos interessa.
//Vejamos um exemplo simples:

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]);
console.log(days[2]);
console.log(days[5]);

days[0] = "Sunday";
console.log(days[0]);

let emptyArray = [];
console.log(emptyArray[0]);
