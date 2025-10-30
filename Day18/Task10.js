//Write a nested if login system (username + password).
let username = "admin";
let password = "1234";
if (username === "admin") {
  if (password === "1234") {
    console.log("Login successful");
  }
   else {
    console.log("Incorrect password");
  }
} 
else {
  console.log("Invalid username");
}