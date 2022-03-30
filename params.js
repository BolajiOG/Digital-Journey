console.log("\n\n************ PARAMETERS *************");

// Declare a function with one parameter that receives an argument to mutate and print.
function editMe(text) { 
    const prefix = 'Mr. ';
    // Edit/change the value of "text" to pass it the reference/memory address of a new string value.
    text = prefix + text.toUpperCase(); 
    console.log('The value of text =', text);
}

// Create a variable "myName" and assign a string litral to it. 
// The reference/memory address of the string litral is what is stored in the variable.
let myName = 'Omobolaji';

// Call the "editMe" function and pass it "myName" as argument.
// The reference/memory address of the value of "myName" is copied.
// The copy is passed as argument to the "text" parameter of function "editMe".
// This is called passing by reference.
editMe(myName);

// The value of myName remains unchanged.
console.log('The value of myName =', myName);

// Declare a function that adds 10 to a number. 
function add10(num) {
    // Change the value 
    num = num + 10; 
    return num; 
}

// Create a variable with value 5.
let five = 5;

// The value of five is copied as argument of the value parameter.
// This is called passing by value.
let result = add10(five);

// The value of five remains unchanged.
console.log(`Five = ${five} and result = ${result}`);




// QUIZ: What will be the value of "person1" after running the following code?
function alter1(param1) { param1.lastName = 'Ogunnaike'; }

function alter2(param2) { param2 = { firstName: 'Bobby', lastName: 'Brown' }; }

let person1 = { firstName: 'Omobolaji', lastName: 'Omosola' };

const x = alter1(person1);
console.log('Person1 = ', person1);

const y = alter2(person1);
console.log('Person1 = ', person1);
