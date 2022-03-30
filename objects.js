console.log("\n\n************ OBJECTS *************");

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