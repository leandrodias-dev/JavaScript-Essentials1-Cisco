//É uma situação bastante comum ter um valor de um tipo, mas precisar de um valor de outro tipo. O exemplo mais simples é quando temos um número, mas precisamos adicioná-lo a algum texto. As conversões em JavaScript acontecem automaticamente em situações específicas, mas também podem ser usadas explicitamente por meio de funções como String() ou Number(). Anteriormente vimos como essas funções poderiam ser usadas para criar valores padrão desses tipos, mas isso não é tudo que elas podem fazer. Essas funções também aceitam argumentos entre parênteses e (se possível) irão convertê-los para um determinado tipo.

const num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr  = Number("312");
const boolFromNumber = Boolean(0);