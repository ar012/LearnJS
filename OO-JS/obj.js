// var obj = {};
// var obj2 = new Object;

// console.log(obj);
// console.log('Type of obj: '+typeof obj);


// console.log(obj2);
// console.log('Type of obj2: '+typeof obj2);

var book = {
  name: 'Functional JavaScript',
  author: 'Micbael Fogus',
  publisher: 'O\'Railly',
  page: 250,

  print: function () { 
    console.log(this.name, this.author);
  }
}

console.log(book);

book.print();

console.log('Book Name:', book.name);

console.log('Author Name: ' + book['author']);

book.price = 30;

for ( var props in book){
  console.log(props + ' = ' + book[props]);
  
}


