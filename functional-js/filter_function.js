var myArray = [10, 30, 40, 50, 40, 12, 90, 59, 3, 5, 7, 11];

// find the odd numbers of the array myArray
// =========================================


var oddArray = [];

for(var i=0; i<myArray.length; i++){
  if(myArray[i] % 2 == 1){
    oddArray.push(myArray[i]);
  }
}

console.log(oddArray);


var newArry = myArray.filter(function(value){
  return value % 2 == 1;
});

console.log(newArry);


function myFilter(arr, callback){
  var newArry2 = [];

  for (var i=0; i<arr.length; i++){
    if(callback(arr[i])){
      newArry2.push(arr[i]);
    }
  }

  return newArry2;
}


var myArr = myFilter(myArray, function(element){
  // return element % 2 == 1;
  return element % 2 == 0;
});


console.log(myArr);
