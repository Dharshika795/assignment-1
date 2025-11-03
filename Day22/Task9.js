//Create a base class Shape and a subclass Circle that calculates area.
class Shape {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log("Shape Name:", this.name);
  }
}
class Circle extends Shape {
  constructor(radius) {
    super("Circle"); 
    this.radius = radius;
  }

  area() {
    let area = 3.14 * this.radius * this.radius;
    console.log("Radius:", this.radius);
    console.log("Area:", area);
  }
}
let c1 = new Circle(5);
c1.showName();
c1.area();
