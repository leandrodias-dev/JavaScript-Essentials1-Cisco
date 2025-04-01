let declareVar;
console.log(typeof declareVar);

declareVar = 5;
console.log(typeof declareVar); // -> number

declareVar = undefined;
console.log(typeof declareVar); // -> Undefined

//The undefined valuew can also be returned by the typeof operator when a non-existent variable is used as an argument.

console.log(typeof notDeclaredVar); // -> Undefined
console.log(notDeclaredVar); //-> Uncaught ReferenceError: notDeclared is not defined