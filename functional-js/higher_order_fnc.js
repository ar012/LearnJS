function base(a){
  return function (m) { 
    result = 1;
    for( var i=0; i<m; i++){
      result *= a;
    }
    return result;
   };
}


// var power = base(7);
// var result = power(2);

var result = base(7)(2);

console.log(result);




function caller(){
  return function(name){
    return 'Calling ' + name;
  };
}

// var call = caller();
// var result = call("Arif");

var result = caller()("Manik");
console.log(result);
