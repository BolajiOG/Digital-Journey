/**
 * Focus on the "this" keyword.
 */

// The "this" keyword looks for the immediate/clossest enclosing object and binds to it.
// If "this" does not find an object, it defaults to "globalThis".
console.log(this);
console.log(globalThis);
console.log('this === globalThis = ', this === globalThis);

// Calling this from inside a function gives us a 