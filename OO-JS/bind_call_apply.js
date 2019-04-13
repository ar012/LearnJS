
// function printMe() {
//   console.log('Hello, ' + this.name);
// }

// var obj1 = {
//   name: 'Rokey',
//   age: 24
// };

// var obj2 = {
//   name: 'Rini',
//   age: 23
// };

// var binded1 = printMe.bind(obj1);

// var binded2 = printMe.bind(obj2);

// console.log(typeof printMe);
// console.log(typeof binded1);

// binded1();

// binded2();

// printMe.call(obj1);

// printMe.call(obj2);


function add(a, b) {
  return (a + b) * this.c;
}


var obj1 = {
  c: 4
};

var obj2 = {
  c: 5
};

var res = add.call(obj1, 10, 5);
res;

// console.log(typeof res);
var result = add.apply(obj2, [10, 5]);
result;

var binded = add.bind(obj1);

console.log(binded(10, 5));

