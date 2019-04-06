var myArray = [10, 30, 40, 50, 40, 12, 90, 59, 3, 5, 7, 11];

var sum = 0; 
for (var i=0; i<myArray.length; i++){
  sum += myArray[i];
}

console.log(sum);


var result = myArray.reduce(function(a, b){
  return a+b;
});

console.log(result);

