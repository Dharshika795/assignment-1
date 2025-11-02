//Write a function that takes an array of numbers and returns the sum using a loop.
function sumArray(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([10, 20, 30, 40])); 
