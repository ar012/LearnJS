// function add(a,b){
//   return a+b;
// }

// var result = add(12, 30);
// console.log(result);

function Number(a, b){
  this.a = a;
  this.b = b;
}

function Series(a, b, c){
  Number.call(this, a, b);
  this.c = c;
}




// Series.prototype = Object.create(Number.prototype);


var num1 = new Series(10, 5, 7);

var num2 = new Series(1, 2, 3);

console.log(num1);




