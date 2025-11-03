//Create a class Product with name and price, and a method discountedPrice().
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  discountedPrice(discount) {
    let finalPrice = this.price - (this.price * discount / 20);
    console.log("Product Name:", this.name);
    console.log("Original Price:", this.price);
    console.log("Price after Discount:", finalPrice);
  }
}
let product1 = new Product("Iphone", 200000);
product1.discountedPrice(10);


