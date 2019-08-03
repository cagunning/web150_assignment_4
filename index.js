/*
 * Step 01
 * Pumpkin is already available to use.
 */
 
new size("small","medium","large");
new color("orange","green","blue");
new shape("round","pear","flat");


var newPumpkin = Pumpkin(small,green,flat){

}





/*
* Step 02
* Create a Book function constructor
*/




// Testing
if (typeof Book !== 'undefined') {
   testBook = new Book('Test Driven Development', 624, 0);
   try {
       testBook.read(20);
       console.log(
           `I am on page ${testBook.position} of my ${testBook.title} book.`
       );
   } catch(e) {
       console.log('Book.prototype.read is not properly defined.');
   }
   try {
       testBook.pagesLeft();
       console.log(
           `I have ${testBook.pagesLeft()} page left to read.`    
       );
   } catch(e) {
       console.log('Book.prototype.pagesLeft is not properly defined');
   }
}