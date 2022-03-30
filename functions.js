/**
 * All functions return a value.
 * The return value defaults to "undefined" if not specified.
 */
function plain() {
    const text = 'Plain function with no parameters or return type';
    console.log(text);
}

function plainWithReturn() {
    const text = "Plain function with a return type but no parameters";
    console.log(text);
    return text;
}

const returnValue = plain();
console.log("The return value of plain =", returnValue);

const returnValue2 = plainWithReturn();
console.log("The return value of plainWithReturn =", returnValue2);

/**
 * Functions have scope.
 */
const globalVar = 'Global Variable';
function outterFunc() {
    let outterVar = 'Outter Function Variable';
    let name = 'outterFunc';
    let description = 'outter description';
    function innerFunc() {
        let innerVar = 'Inner Function Variable';
        let name = 'innerFunc';
        description = 'inner description';

        console.log(`innerFunc: Value of name = ${name}`);
        console.log(`innerFunc: Value of innerVar = ${innerVar}`);
        console.log(`innerFunc: Value of outterVar = ${outterVar}`);
        console.log(`innerFunc: Value of globalVar = ${globalVar}`);
    }
    innerFunc();
    console.log(`outterFunc: Value of name = ${name}`);
    // console.log(`outterFunc: Value of innerVar = ${innerVar}`);
    console.log(`outterFunc: Value of outterVar = ${outterVar}`);
    console.log(`outterFunc: Value of globalVar = ${globalVar}`);
}
outterFunc();
