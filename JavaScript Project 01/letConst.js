// --- O que acontece se declararmos algo usando let ou const dentro de um bloco? Isso criará uma variável ou constante local. Será visível apenas dentro do bloco em que foi declarado e em blocos que podem opcionalmente ser aninhados nele.//



//let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

// ------ A variável height, declarada fora do bloco, é global. A variável de peso é local – seu escopo é limitado pelo bloco em que foi declarada. Isto é claramente visível ao tentar exibir os valores de ambas as variáveis ​​dentro e fora do bloco. Também podemos testar o caso com blocos aninhados: ----- //


//let  height  =  200;
{
         let  weight  =  100;
         {
                 let  info  =  "tall";
                 console.log(height);  //  ->  200
                 console.log(weight);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(height);  //  ->  200
         console.log(weight);  //  ->  100
         console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
   }


   // Como você pode ver, a variável info declarada no bloco mais interno é visível apenas dentro dele. A variável de peso é visível tanto dentro do bloco em que foi declarada quanto dentro do bloco aninhado nela. E a variável global height é visível em todos os lugares. //

   var  height  =  180;
{
         var  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  70
