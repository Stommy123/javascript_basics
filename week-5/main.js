// Create a class named Literature
// Its constructor should accept and set attributes for title and author
// It should also have two method called 'getTitle' and 'getAuthor', these two method should return the title and author respectively


//Create two new classes that extends from Literature
// These two classes should be named 'Book' and 'Poem' respectively
// Both should inherit all attributes from its parent
// Book should have an additional 'numberOfChapters' property in its constructor
// Book should have a unique method called 'amISpecial' which will return 'Im very special' if the Book's title starts with an 's' or 'S', otherwise it should return 'Im still pretty special too'
// Poem should have an additional 'numberOfVerses' and 'content' property in its constructor
// Poem should have a unique method called 'recite' which will return its content property

//Instantiate a book and poem then test all of these methods and attributes. Use any title / author that you'd like

class Literature {
  constructor(title, author) {
    this.title = title
    this.author = author
  }
  getTitle() {
    return this.title
  }
  getAuthor() {
    return this.author
  }
}
​
class Book extends Literature {
  constructor(numberOfChapters) {
   super('Harry Potter', 'JK Rolling')
   this.numberOfChapters = numberOfChapters
 }
   amISpecial() {
     if (title.charAt(0) == 's') {
       return 'Im very special'
     } else {
       return 'Im pretty special too'
     }
   }
}

 class Poem extends Literature {
   constructor(numberOfVerses, content) {
     super('When You Are Old', 'WB Yeats')
     this.numberOfVerses = numberOfVerses
     this.content = content
   }
   return this.content
 }
​
const book1 = new Book('15')
​
console.log(Book)
