// O tipo String representa uma sequência de caracteres formando um trecho de texto. As operações comuns em textos incluem concatenação, extração da substring e verificação do comprimento da string. Strings são amplamente utilizadas em programação e ainda mais em desenvolvimento web, já que tanto o HTML quanto grande parte do conteúdo da Internet são textos.O uso mais comum de texto no desenvolvimento web inclui:
//links e caminhos para recursos;fichas;verificar formulários e entradas preenchidos pelo usuário;geração de conteúdo dinâmico
//Strings , como outras primitivas, são imutáveis, então quando queremos alterar pelo menos uma letra em uma string, na realidade, criamos uma nova string.
//Nos exemplos anteriores, já usamos cadeias de caracteres. Usamos aspas para indicar que um determinado texto deve ser tratado como uma string (ou seja, tipo String). Literais de string podem ser criados usando aspas simples ou duplas, desde que os caracteres de aspas iniciais e finais correspondam.//

let country = "Malawi";
let continent = 'Africa';

console.log(country); // -> Malawi
console.log(typeof country); // -> string
console.log(continent); // -> Africa
console.log(typeof continent); // -> String

// Se você usar aspas duplas para marcar uma string, poderá colocar aspas simples dentro da string e elas serão tratadas como caracteres comuns. Isto também funcionará na situação oposta (ou seja, colocando aspas duplas entre aspas simples).

let message1 = "The vessel 'Mars' called at the port";
let message2 = 'Cyclone "Cilida" to pass close to Mauritius';

console.log(message1); // "The vessel 'Mars' called at the port"
console.log(message2); // 'Cyclone "Cilida" to pass close to Mauritius'

let path = "C:\\Windows";
console.log(path); // -> C:\\Windows

// Tentar realizar operações aritméticas em valores do tipo String, como subtração, multiplicação ou divisão, geralmente terminará em erro. Mais precisamente, o valor NaN será retornado como resultado da ação.Por que isso está acontecendo? Vendo os operadores aritméticos-,*, ou\, o interpretador JavaScript tenta interpretar os valores fornecidos como números ou convertê-los em números. Portanto, se a sequência de caracteres consistir em dígitos, a conversão automática será bem-sucedida e obteremos o resultado da ação aritmética como um valor do tipo Número. Se a sequência de caracteres não puder ser interpretada como um número (e convertida), obteremos o resultado NaN. Falaremos mais sobre conversão em um momento.-
//------------------------------------------------------------------
let path1 = "C:\\Windows" - "Windows";
console.log(path); // -> NaN

let test1 = "100" - "10";
console.log(test); // -> 90
console.log(typeof test); // -> number
//-----------------------------------------------------------------
//A exceção é a operação de adição, que não será tratada como aritmética, mas como uma tentativa de criar uma nova string combinando duas strings de entrada.
let  path2  =  "C:\\"  +  "Windows";
console.log(path);  //  ->  C:\Windows
   
let  test2  =  "100"  +  "10";
console.log(test);  //  ->  10010
console.log(typeof  test);  //  ->  string

// Um mecanismo muito conveniente introduzido no JavaScript em 2015 é a interpolação de strings . Ele permite tratar uma sequência de caracteres como um modelo, no qual você pode colocar valores em locais selecionados, como aqueles retirados de variáveis. Esse literal é criado usando crases (ou acentos graves) em vez de aspas. Os locais onde os valores são inseridos são marcados com chaves precedidas de um$sinal.

let country2 = "Malawi";
let continent2 = "Africa";

let sentence = `${country} is located in ${continent}.`;
console.log(sentence); // -> Malawi is located in Africa.