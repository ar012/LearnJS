// var arr = [1, 2, 3, 4, 5];

// function cbf(a){
//   console.log(a);
// }

// arr.forEach(cbf)

// arr.forEach(function(a){
//   console.log(a);

// })



// function hello(name) {
//   print(name);
// }


// function print(args) {
//   console.log(args);
// }


// var result = hello('Arif');

// console.log(result);


function hello(name, print) {
  print(name);
}

// function print(args) {
//   console.log(args);
// }


// hello('Arif', print);



hello("Shohel", function (name) {
  console.log('Hello ' + name);

})


hello('Rashed', function (name) {
  console.log('Hi ' + name + '! How are you?')
})


hello('Rashed', function (name) {
  console.log('Length of ' + name + ' is ' + name.length)
})