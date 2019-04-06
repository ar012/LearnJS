var myArray = [10, 30, 40, 50, 40, 12, 90, 59, 3, 5, 7, 11];

// var mapArr = [];

// for (var i=0; i<myArray.length; i++){
//   mapArr.push(myArray[i] + 2);
// }


// console.log(mapArr);

// var newArr = myArray.map(function(value){
//   return value * 2;
// });

// console.log(newArr);


function myMap(arr, callback){
  var newArr = [];

  for (var i=0; i<arr.length; i++){
    var data = callback(arr[i]);
    newArr.push(data);
  }
  return newArr;
}



var mapArr = myMap(myArray, function (value) { 
  return value * 3;
 });

 console.log(mapArr);
 