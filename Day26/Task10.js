//Combine closures + promises: Make a counter that logs updates after async completion.
function createCounter() {
  let count = 0; 
    return function() {
    count++;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Counter updated to: " + count);
      }, 1000);
    });
  };
}
const counter = createCounter();
counter().then(msg => console.log(msg)); 
counter().then(msg => console.log(msg)); 
