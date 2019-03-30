// var arr = [10, 3, 4, 5, 40, 12, 90, 59];

// arr.forEach(function (element, index, array) {
//   console.log("Element is = " + element + ", Index is = " + index + ", Array is = " + array);
// });


var myArray = [10, 30, 40, 50, 40, 12, 90, 59];

function arrLoop(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

arrLoop(myArray, function (element, index) {
  console.log("Element is = " + element + ", Index = " + index);
});


// var add = function sum(a, b) {
//   return a + b;
// };

// var add = function (a, b) {
//   return a + b;
// };


// console.log(add(2, 3));