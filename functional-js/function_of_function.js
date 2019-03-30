// function host(){
//   console.log('I am host function');

//   return function(){
//     // console.log('I am chiled function');
//     return 'I am chiled function';
//   };
// }


// var a = host();
// console.log(a());


function host() {
  console.log('I am host function');

  function guest() {
    console.log('I am guest function');
  }

  return guest;

}


var a = host();
a();
// console.log(a());


// function greeting(msg) {
//   function ret(name) {
//     console.log(msg + ' ' + name);
//   }
//   return ret;
// }


function greeting(msg) {
  return function (name) {
    console.log(msg + ' ' + name);
  };
}


var good = greeting("Good morning");
var welcome = greeting("Welcome");
good("Arif");
welcome("Manik");
