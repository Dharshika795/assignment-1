//Build an object user with login and logout methods.
let user = {
  name: "Dharshika",
  login: function() {
    console.log(this.name + " has logged in.");
  },
  logout: function() {
    console.log(this.name + " has logged out.");
  }
};
user.login();
user.logout();
