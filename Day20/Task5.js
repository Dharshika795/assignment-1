//Create a callback function that greets a user after getting their name.
function getUserName(callback) {
  const name = "Dharshika"; 
  callback(name);
}
function greetUser(name) {
  console.log("Hello, " + name + " Welcome!");
}
getUserName(greetUser);
