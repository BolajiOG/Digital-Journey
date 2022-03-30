console.log('\n\n*********** FUNCTIONS *************\n\n');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

// Declare functions with no body, parameters or return values.
function empty1() {}
const empty2 = function empty2() {}
const empty3 = function () {}
const empty4 = () => {}

// Declaring empty functions creates objects who's prototype is the "Function" object. 
console.log('The value of empty1 is'); console.dir(empty1);
console.log('The value of empty2 is'); console.dir(empty2);
console.log('The value of empty3 is'); console.dir(empty3);
console.log('The value of empty4 is'); console.dir(empty4);

// All four functions are using the same "Function" prototype.
console.log('Prototype of "empty1" === prototype of "empty2"', Object.getPrototypeOf(empty1) === Object.getPrototypeOf(empty2));
console.log('Prototype of "empty2" === prototype of "empty3"', Object.getPrototypeOf(empty2) === Object.getPrototypeOf(empty3));
console.log('Prototype of "empty3" === prototype of "empty4"', Object.getPrototypeOf(empty3) === Object.getPrototypeOf(empty4));

// Declare function with body but no parameters or return value.
function plain() {
    const greet = 'Plain Hello';
    console.log(greet);
}
plain();

// Declare function with body and return value but no parameters.
function simple() {
    const greet = 'Simple Hello';
    return greet;
}
console.log('Calling simple() returns', simple());

// Pass arguments to function with no parameters.
function noParams() {
    // All functions in JavaScript have an internal varible called arguments.
    // The variable "param1" only exists within the body of this function.
    let param1 = arguments[0];
    console.log('Value of param1 in "noParams" is', param1);
}

// Pass arguments to function with parameters.
// Declaring a "param1" parameter is equivalant to declaring a "param1" variable in the body of the function.
// The parameter "param1" only exists within the body of this function.
function withParam(param1) {
    console.log('Value of param1 in "withParam" is', param1);
}

// Call the two functions with 2 arguments.
// NOTE: The second argument of each function will be ignored.
noParams('Hello Yomi', 'What\'s up');
withParam('Hello Saka', 'What\'s up');

// Constructor functions allow us to create object is a predictable maner.
function Simple (greeting) { 
    this.greeting = greeting;
    this.wave = function () { console.log('I am waving'); }
}
Simple.prototype.greet = function () { console.log(this.greeting); }

const obj1 = new Simple('Hello Object 1');
const obj2 = new Simple('Hello Object 2');

console.log('Obect 1 is ', obj1);
console.log('Obect 2 is ', obj2);
console.log('obj1.greet === obj2.greet', obj1.greet === obj2.greet);

obj1.greet();
obj2.greet();