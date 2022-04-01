console.log("\n\n************ VARIABLES *************");

// Variables declared with the "var" keyword can be re-declared and re-assigned.
var one;            // declaration
var one;            // re-declaration
var one = 1;        // re-declaration + assignment
one = 1;            // re-assignment
var one = "one";    // re-declaration + re-assignment
one = "one";        // re-assignment

let two;            // declaration
two = 2;            // re-assignment
two = "two";        // re-assignment
// let two;         // re-declaration fails with let
// let one;
// var two;

// const three;     // Cannot declare const without assignment.
const three = 3;    // Initialization = declaration + assignment
// const three = 3; // Re-initialization of const fails
// three = 3;       // Re-assignment of const fails
// const one = 1;   // Re-assignment fails

/*
 * QUIZ 1; What will be the console log outputs and why?
 */
console.log("\n\n************ VARIABLES QUIZ 1*************");

let var1 = 'one';
let var2 = 'one';
console.log('var1 === var2 is', var1 === var2);

let var3 = 1;
let var4 = 1;
console.log('var3 === var4 is', var3 === var4);

let var5 = {};
let var6 = {};
console.log('var5 === var6 is', var5 === var6);

let var7 = function () {};
let var8 = function () {};
console.log('var7 === var8 is', var7 === var8);

/*
 * QUIZ 2; What will be the console log outputs and why?
 */
console.log("\n\n************ VARIABLES QUIZ 2*************");

function Num(name, value) {
    this.name = name;
    this.value = value;
    this.empty = {};
    this.print = function () { return console.log(`${name} = ${value}`)};
}

let num1 = new Num('one', 1);
let num2 = new Num('one', 1);

console.log('num1.name === num2.name is', num1.name === num2.name);
console.log('num1.value === num2.value is', num1.value === num2.value);
console.log('num1.empty === num2.empty is', num1.empty === num2.empty);
console.log('num1.print === num2.print is', num1.print === num2.print);

/*
 * REVIEW: Variables with function values.
 */