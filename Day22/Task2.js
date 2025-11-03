//Add a method describe() that prints the book details.
let book = {
  title: "The Great Adventure",
  author: "John Smith",
  pages: 250,
  describe: function() {
    console.log(`"${this.title}" by ${this.author}, ${this.pages} pages.`);
  }
};
book.describe();
