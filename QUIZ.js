console.log("\n************ WEEKEND QUIZ *************\n\n");
// Create four "product" objects using a constructor function.
// Each "product" must have a numeric "id", a string "name" and a float "price".

function ObjQ (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
}


let prod1 = new ObjQ (1, 'milk', 16.0);
let prod2 = new ObjQ (2, 'egg', 6.0);
let prod3 = new ObjQ (3, 'beef', 46.0);
let prod4 = new ObjQ (4, 'jam', 23.0);
 
// Create four literal "cart_item" objects without a constructor function or Object.create.
// Each "cart_item" must have a numeric "quantity", a "product" object and a "subtotal" function that returns "product" "price" values multiplied by "quantity".
// All "cart_item" objects must use the same "subtotal" function.
function subtotal () { return this.prod.price * this.quantity; };
// if called directly this.prod.price will be bound to the global this
// this.prod = {price: 20};
// this.quantity = 5;

let cart_item1 = {};
cart_item1.prod = prod1;
cart_item1.quantity = 5;
cart_item1.sub = subtotal;

// subtotal() --> runs the funtion and passes the returned value
// subtotal --> passes the address of the function 

// console.log(cart_item1.subtotal)

let cart_item2 = {};
cart_item2.prod = prod2;
cart_item2.quantity = 10;
cart_item2.sub = subtotal;

let cart_item3 = {};
cart_item3.prod = prod3;
cart_item3.quantity = 2;
cart_item3.sub = subtotal;


let cart_item4 = {};
cart_item4.prod = prod1;
cart_item4.quantity = 10;
cart_item4.sub = subtotal;

// Create an empty "cart" object using Object.create.
// The "cart" must have four "cart_item" properties and a "total" function that returns the sum of all "cart_item" "subtotal" values.
let cart = Object.create(null);
// Storing "cart_item" objects as properties.
cart.item1 = cart_item1
cart.item2 = cart_item2
cart.item3 = cart_item3
cart.item4 = cart_item4
cart.total = function total () { 
    return this.item1.sub() + this.item2.sub() + this.item3.sub() + this.item4.sub();
};

// Storing "cart_item" objects in an array property.
cart.items = [cart_item1, cart_item2, cart_item3, cart_item4];

// Using for loop to calculate total.
cart.total1 = function () {
    let total = 0;
    for (let item of this.items){ total += item.sub(); }
    return total;
};

// Using a reducer function to calculate total.
cart.total2 = function() { return this.items.reduce((total, item) => total + item.sub(), 0); }


console.log('The Price is', cart.total());
console.log('The Price is', cart.total1());
console.log('The Price is', cart.total2());
