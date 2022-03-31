console.log("\n\n************ OBJECTS *************");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

function greet () { console.log('Hello I am', this.title); };

let obj0 = Object.create(null);
obj0.title = 'Object 0';
obj0.greet = greet;
obj0.id = 0;

console.log(obj0);
obj0.greet();

let obj1 = {};
obj1.title = 'Object 1';
obj1.greet = greet;
obj1.id = 1;

console.log(obj1);
obj1.greet();

let obj2 = {
    title: 'Object 2',
    greet: greet,
    id: 2
}

console.log(obj1);
obj2.greet();

function ObjX(title, greet, id) {
    this.title = title;
    this.greet = greet;
    this.id = id;
}

let obj3 = new ObjX('Object 3', greet, 3);

console.log(obj3);
obj3.greet();

class ObjZ {
    constructor(title, greet, id) {
        this.title = title;
        this.greet = greet;
        this.id = id;
    }
}

let obj4 = new ObjZ('Object 4', greet, 4);

console.log(obj4);
obj4.greet();

// 
function ObjCon(id, title) {
    this.id = id;
    this.title = title;
    this.greet = function () { console.log('Hello I am', this.title); };
}
ObjCon.prototype.intro = function () { console.log('My title is', this.title, 'and my id is', this.id); };
ObjCon.shout = function () { console.log('I am grout'); }

let obj5 = new ObjCon(5, 'Object 5');
let obj6 = new ObjCon(6, 'Object 6');

console.log('obj5.greet === obj6.greet is', obj5.greet === obj6.greet);
console.log('obj5.intro === obj6.intro is', obj5.intro === obj6.intro);

console.log(obj5);
console.dir(ObjCon);

obj5.greet();
obj5.intro();
ObjCon.shout();

// Revisit Prototypes
let objA1 = Object.create(null);
objA1.title = 'Object A1';
objA1.greet = function () { console.log('Hello I am', this.title); };

let objA2 = Object.create(objA1);
objA2.title = 'Object A2';

console.log(objA1);
console.log(objA2);

objA1.greet();
objA2.greet();

console.log('objA1.greet === objA2.greet is', objA1.greet === objA2.greet);
