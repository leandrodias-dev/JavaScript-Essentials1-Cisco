// slice(beginIndex, [opcional] endIndex): método, retorna uma nova string que é criada a partir dos caracteres entrecomeçarIndex(incluído) eendIndex(excluído); seendIndexé omitido, então a nova string é decomeçarIndexaté o final da string;

let str = "Java Script Language";

console.log(str.length); // -> 20
console.log('test'.length); // -> 4

console.log(str.charAt(0)); // -> 'J'
console.log('abc'.charAt(1)); // -> 'b'

console.log(str.slice(0,4)); // -> "Java"
console.log('test'.slice(1,3)); // -> 'es'

console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.')); // ['192', '168', '1', '1']
