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