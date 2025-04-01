//let counter = 100;
console.log(counter); // _>100
{
    counter = 200;
    console.log(counter); // ->200
}
console.log(counter); // -> 200


// let  counter  =  100;
console.log(counter);  //  ->  100
{
     let  counter  =  200;
     console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  100


// O sombreamento também está presente em declarações de variáveis ​​usando a palavravar, e desta vez o escopo local é limitado não pelo bloco de programa, mas pelo bloco de função. //

var counter = 100;

function testFunction() {
    var counter = 200;
    console.log(counter);
}

console.log(counter); // -> 100
testFunction(); // -> 200
console.log(counter); // -> 100

// Na maioria dos casos, isso não é desejável, portanto tente evitar dar os mesmos nomes de variáveis ​​a múltiplas variáveis, independentemente de onde você as declara. //