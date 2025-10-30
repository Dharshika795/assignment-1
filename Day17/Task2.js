//let cannot be declared two times in same scope
/*
let a = 10;
let a = 20; // Error: a has already been declared
*/

//  Works fine  because declared inside block
let a1= 30;
{
  let b1= 50;
  console.log(b1); 
}
console.log(a1); 

// 'let' can be declared first and assigned later
let x, y, z;
x = 5;
y = 15;
z = x + y;
console.log(z); 

//  'const' must be given a value when declared.
/*
const p, q, r; 
p = 10;
q = 20;
r = p + q;
console.log(r);*/
