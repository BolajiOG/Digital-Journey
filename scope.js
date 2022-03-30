console.log("\n\n************ VARIABLE SCOPE *************");

// Value is stored in variable.
let globalNumber = 100000000;

// Declare a variable in global scope with a string value.
// Reference to string is stored on variable.
let globalVar = 'Global Variable';

// Declare a variable in global scope with an object value.
// Reference to object is stored on variable.
let globalObj = { value: 'Global Object value' };

// Declare a functio in global scope.
const outterFunction = function (param1, param2) {
    // Parameters are like variabled declared inside of a function. They do not exist outside of the function.
    // Declaring the parameters "param1" and "param2" is equivalent to declaring the following variables:
    // let param1 = arguments[0];
    // let param2 = arguments[1];

    // Declare a variable inside the "outterFunction" function scope.
    let outterFuncVar = 'Outter function Variable';

    // Change value of param1. Mutation will not persist outside the function.
    param1 = 'Hello';

    // Uncomment to change the value of param2. Mutation will not persist outside the function.
    // param2 = {};
    
    // Change the value of a property on param2. Mutation will persist on the object outside the function.
    param2.value = globalVar;
    
    console.log('param1 =', param1);
    console.log('param2 =', param2);
}

console.log('globalVar =', globalVar);
console.log('globalObj =', globalObj);

outterFunction(globalVar, globalObj);

console.log('globalVar =', globalVar);
console.log('globalObj =', globalObj);

// console.log(outterFunctionVar, param1, param2); // This fails because these variables only existed in the outterFunction scope.

// TASK1: Create a function called innerFunction inside outterFunction and log outterFuncVar, globalVar and globalObj.
// TASK2: Try to access a variable inside innerFunction from inside outterFunction and global scope.