//Combine two arrays using concat() or spread syntax [...a, ...b].
let a = [1, 2, 3];
let b = [4, 5, 6];
let combined1 = a.concat(b);
console.log("Using concat():", combined1);
let combined2 = [...a, ...b];
console.log("Using spread:", combined2);