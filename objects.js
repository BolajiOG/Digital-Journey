console.log("\n************ OBJECTS *************\n\n");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

// Create a "greet" function that logs a message to console and returns "undefined".
function greet () {
    console.log('Hello I am', this.title);
};

// Create an empty object using "Object"."create" method and manually create its properties.
let obj0 = Object.create(null);
obj0.title = 'Object 0';
obj0.greet = greet;
obj0.id = 0;

// Log "obj0" to console and call the "greet" function.
// Notice that "obj0" has no prototype.
console.log('obj0 =', obj0);
obj0.greet();

// Create an empty object using curly braces notation and manually create its properties.
let obj1 = {};
obj1.title = 'Object 1';
obj1.greet = greet;
obj1.id = 1;

// Log "obj1" to console and call the "greet" function.
// Notice that the prototype of "obj1" is an object of type "Object". See line 2 for link.
// The "Object" object is the base prototype for all JavaScript builtin objects.
// The "Object" object has no prototype of its own and only one instance exists.
console.log('obj1 =', obj1);
obj1.greet();

// Create an object with properties using curly braces notation.
// Notice the use of colons ":" instead of dots "." for the properties.
let obj2 = {
    title: 'Object 2',
    greet: greet,
    id: 2
}

// Log "obj2" to console and call the "greet" function.
// Notice that the prototype of "obj2" is the "Object" object same as "obj1".
console.log('obj2 =', obj2);
obj2.greet();

// Create a constructor function for constructing objects similar to the ones previously created.
function ObjX(title, greet, id) {
    this.title = title;
    this.greet = greet;
    this.id = id;
}

// Call the constructor function with the "new" keyword to create an object and pass in the arguments that make up the properties.
// Step 1: The "new" keyword will create a new empty object.
// Step 2: This empty object will be bound to the "this" keywords in the "ObjX" constructor function.
// Step 3: The "ObjX" constructor function body will create properties on the object and assign values.
// Step 4: The newly created object is passed by reference to "obj3".
let obj3 = new ObjX('Object 3', greet, 3);

// Log "obj3" to console and call the "greet" function.
// Notice that the display of "obj3" in console is prefixed with the type "ObjX".
// Notice that the prototype of "obj3" is a plain object with a constructor and a prototype.
console.log('obj3 =', obj3);
obj3.greet();

// A class in JavaScript is just synthactic sugar for a constructor function.
// Create a class for constructing objects similar to the ones previously created.
class ObjZ {
    // Notice that this constructor function is similar to "ObjX".
    constructor(title, greet, id) {
        this.title = title;
        this.greet = greet;
        this.id = id;
    }
}

// Create a new object using class "ObjZ".
let obj4 = new ObjZ('Object 4', greet, 4);

// Log "obj4" to console and call the "greet" function.
// Notice that the prototype of "obj4" is similar in structure to the prototype of "obj3".
console.log('obj4 =', obj4);
obj4.greet();


// Note that all 5 objects use the same "greet" function because the same "greet" was passed in to all of them.
console.log('obj0.greet === obj1.greet is', obj0.greet === obj1.greet);
console.log('obj1.greet === obj2.greet is', obj1.greet === obj2.greet);
console.log('obj2.greet === obj3.greet is', obj2.greet === obj3.greet);
console.log('obj3.greet === obj4.greet is', obj3.greet === obj4.greet);

console.log("\n************ OBJECTS *************\n\n");

// Create a constructor function.
function ObjCon(id, title) {
    this.id = id;
    this.title = title;
    // A new "greet" function will be created as a direct property of the object that "this" binds to.
    // Every object created with the constructor function "ObjCon" will get a distinct "greet" function.
    this.greet = function () { console.log('Hello I am', this.title); };
}
// "ObjCon" will create a brand new prototype when called as a constructor function.
// All objects constructed with "ObjCon" will share the same brand new prototype.
// The brand new prototype is for the objects created with "ObjCon".
// The brand new prototype is not for "ObjCon".
// "ObjCon" already has its own "Function" prototype. See line 3 for link.
// The "intro" function is created as a property of the brand new prototype.
ObjCon.prototype.intro = function () { console.log('My title is', this.title, 'and my id is', this.id); };
// The "shout" function is created as a property of the object representing the "ObjCon" function.
ObjCon.shout = function () { console.log('I am grout'); }

// Create new objects using class "ObjCon".
let obj5 = new ObjCon(5, 'Object 5');
let obj6 = new ObjCon(6, 'Object 6');

// Objects "obj5" and "obj6" have distinct "greet" functions.
console.log('obj5.greet === obj6.greet is', obj5.greet === obj6.greet);

// Objects "obj5" and "obj6" share the same prototype with the same "intro" function.
console.log('obj5.intro === obj6.intro is', obj5.intro === obj6.intro);

// Log the object representing the "ObjCon" function.
// Notice that the object representing "ObjCon" has a "Function" prototype. See line 3 for link.
// Notice that the object representing "ObjCon" has a "shout" function/property.
console.dir(ObjCon);

// Log "obj5" to console.
console.log(obj5);

// Call the "greet" and "intro" functions from "obj5".
obj5.greet();
obj5.intro();
// Call the "shout" function from "ObjCon".
ObjCon.shout();
