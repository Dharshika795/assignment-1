//Use typeof to check types of all your variables.
let name = "Dharshika";      // string
let age = 20;                // number
let isStudent = true;        // boolean
let city;                    // undefined
let car = null;              // null
let fruits = ["apple", "kiwi", "Star Fruit"]; // array
let person = { name: "Dharshika", age: 21}; // object
function greet() {           // function
  return "Hello";
}

// Checking types
console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof isStudent); // boolean
console.log(typeof city);      // undefined
console.log(typeof car);       // object (special case)
console.log(typeof fruits);    // object (arrays are objects)
console.log(typeof person);    // object
console.log(typeof greet);     // function


