//Use a callback function to display “Task Complete” after another function finishes.
function Task(callback) {
  console.log("Main task finished");
}
  function dr(callback){
    console.log("Task started");
    setTimeout(() => {
    callback(); 
  }, 1000);
}
dr(Task);
