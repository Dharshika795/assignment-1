//Create another class Manager that inherits from Employee and adds a department.
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log("Employee Name:", this.name);
    console.log("Salary:", this.salary);
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); 
    this.department = department;
  }

  displayInfo() {
    console.log("Manager Name:", this.name);
    console.log("Salary:", this.salary);
    console.log("Department:", this.department);
  }
}
let m1 = new Manager("Dharshi", 80000, "IT");
m1.displayInfo();
