// var name = "Selftics";

// function sayName() {
//   console.log('Hello ' + name);

// }


// sayName();

// // console.dir(sayName);



function greeting(msg) {
  return function (name) {
    console.log(msg + ' ' + name);

  }
}


var hello = greeting("Hello");
hello("Rashed");