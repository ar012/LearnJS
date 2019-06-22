var obj = {};

var obj1 = new Object;


// console.log(obj);
// console.log(obj1);


var book = {
  name: 'Business Statistics',
  author: 'Abul Bashar',
  publisher: 'Azizia book dipo, dhaka',
  page: 964,
  print: function () { 
    console.log('Name: '+ this.name + ', Author: ' + this.author);
  }
};

// console.log(book);
// book.print();
// console.log('Name: ' + book.name);
// console.log('Name: ' + book['name'];

// adding price 

book.price = 400;
book.publishYear = 2009;

for( var props in book ) {
  // console.log(props);
  console.log(props + ' = ' + book[props]);
  
}