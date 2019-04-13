// function Person(name, email) {
//   this.name = name;
//   this.email = email;
//   this.print = function () {
//     return "Name: " + this.name + " Email: " + this.email;
//   };
// }


// var person1 = new Person('arif', 'arif@gmail.com');

// console.log(person1.email);


// var p2 = Person('rashed', 'rashed@gmail.com');

// console.log(p2);

// var p1 = new Person('arif', 'arif@gmail.com');
// var p2 = new Person('rashed', 'rashed@gmail.com');
// var p3 = new Person('rafiq', 'rafiq@gmail.com');
// var p4 = new Person('manik', 'manik@gmail.com');

// var people = [p1, p2, p3, p4];

// console.log(people);


// people.forEach(function(person){
//   console.log('Name: ' + person.name + ' Email: '+ person.email);

// });

// people.forEach(function(person){
//   console.log(person.print());

// });


// for ( var props in p1){
//   console.log(p1[props]);

// }


function Book(name, author, price) {
  this.name = name;
  this.author = author;
  this.price = price;
}


var book = new Book('Functional Javascript', 'Micbael Fogus', 30);


console.log(book.constructor);
