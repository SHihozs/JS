class book {
    constructor(Title,Author,ISBN,numCopies){
        this.Title     = Title;
        this.Author    = Author;
        this.ISBN      = ISBN;
        this.numCopies = numCopies;

        /*console.log("Title = " + this.Title + '\n' + 
                    "Author = " + this.Author + '\n' +  
                    "ISBN = " + this.ISBN + '\n' +  
                    "numCopies = " + this.numCopies);*/
    }

//method
getAvailability(){
    if(this.numCopies === 0) {
        return "out of stock";
    }
    else if(this.numCopies < 10) {
        return "low stock";
    }
    else {
        return "in stock";
    } 
}

sell(numSold=1){
    this.numCopies -= numSold;
}

restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

let book1 = new book("Doreamon","Nobi",123456,5);
console.log(book1.getAvailability());
book1.restock(12);
console.log(book1.getAvailability());
book1.sell(17);
console.log(book1.getAvailability());



/*function book(Title,Author,ISBN,numCopies){
    this.Title     = Title;
    this.Author    = Author;
    this.ISBN      = ISBN;
    this.numCopies = numCopies;

    //method
    this.getAvailability = function(){
    if(this.numCopies === 0) {
        return "out of stock";
    }
    else if(this.numCopies < 10) {
        return "low stock";
    }
    else {
    return "in stock";
    } 
}

    this.sell = function(numSold=1){
        this.numCopies -= numSold;
}

    this.restock = function(numCopiesStocked = 5) {
        this.numCopies += numCopiesStocked;
  }
}


let book1 = new book("Doreamon","Nobi",123456,5);
console.log(book1.getAvailability());
book1.restock(12);
console.log(book1.getAvailability());
book1.sell(17);
console.log(book1.getAvailability());
*/
