//Use prototypes to add a new method to all Student objects dynamically.
function Student(name, age) {
  this.name = name;
  this.age = age;
}
Student.prototype.displayInfo = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};
let student1 = new Student("Dharshu", 21);
let student2 = new Student("Harini", 21);
student1.displayInfo();
student2.displayInfo();
