function Person(name, age){
  this.name = name;
  this.age = age;
}

// Person.prototype.hello = function() {
//   console.log('Hello' + this.name);
// };

Person.prototype = {
  hello: function() {
    console.log('Hello, ' + this.name);
  },

  print: function(){
    console.log(this.name, this.email);
  },
  email: 'self@gmail.com'
};


var p1 = new Person('Arif', 20);

var p2 = new Person('Rashed', 22);

console.log(p1);

console.log(p2);

// console.log(Person.prototype);