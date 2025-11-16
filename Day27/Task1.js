//Fetch your GitHub profile data using fetch("https://api.github.com/users/<your-username>") and display it in the console.
fetch("https://github.com/Dharshika795")
  .then(response => response.json())
  .then(data => {
    console.log("GitHub Profile Data:");
    console.log(data);
  })
  .catch(error => console.log("Error:", error));
