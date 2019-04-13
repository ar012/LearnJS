// var obj = {
//   name: 'Selftics',

//   print: function () {
//     console.log(this.name);
//   }
// };

// obj.print();
// var myFn = obj.print;
// var myFn = obj.print.bind(obj);

// myFn();


// function myFunc() {
//   function innerFunc() {
//     console.log(this);
//   }
//   innerFunc();
// }

// myFunc();



// function myFunc2() {
//   function innerFunc2() {
//     console.log(this);
//   }
//   new innerFunc2();
// }

// myFunc2();



// function add(num) {
//   return this.value + num;
// }

// var obj = {
//   value: 10
// };

// var binded = add.bind(obj);
// var result = binded(40);

// result;

var person = {
  name: 'Nayeef',

  print: function () {
    // console.log(this);

    setTimeout(function () {
      console.log(this);
      console.log("Hello " + this.name);
    }.bind(this), 2000);
  }
};

person.print();