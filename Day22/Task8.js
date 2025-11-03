//Create a class Student with constructor and display() method — make 3 students.

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("-------------------");
  }
}
let s1 = new Student("Harini", 20);
let s2 = new Student("Dhanasri", 21);
let s3 = new Student("Dharshika", 22);
s1.display();
s2.display();
s3.display();
