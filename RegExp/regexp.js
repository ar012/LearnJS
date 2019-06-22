// var str = "Visit W3School, W3Schools, W3Schools";
// // var patt = /w3schools/i;
// // var patt = /w3schools/ig;
// var patt = /w3schools/ig;

// // var patt = new RegExp("W3schools", "gi");

// // var patt = new RegExp("w3schools", "ig");
// var patt = new RegExp("w3school", "i");

// var result = str.match(patt);


// console.log(result);


// var str = "\nIs th\nis it?";
// var patt1 = /^is/igm;

// var result = str.match(patt1);

// console.log(result);


// var str = "Visit w3Schools!";

// var patt1 = /W3S/gim; // "g" and "i" is set, "m" is not.

// // var res = patt1.multiline;
// var res = patt1.ignoreCase;
// console.log(res);


// var str = "Is this all there is IT?";

// var patt1 = /[th]/g;

// // var patt1 = new RegExp("[th]", "g");

// var res = str.match(patt1);

// console.log(res);


// var str = "THIS This this";
// var patt1 = /[THIS]/gi;
// var result = str.match(patt1);

// console.log(result);

// var str = "Do you know If this is all there is?";

// // var patt1 = /[^is]/gi;
// var patt1 = /[^a-h]/g;

// var result = str.match(patt1);
// console.log(result);


// var str = "I SCREAM FOR ICE CREAM! d";
// var patt1 = /[^A-e]/g;

// var result = str.match(patt1);
// console.log(result);


// JavaScript RegExp [0-9] Expression
// ==================================

// var str = "1234568889";
// // var patt1 = /[^1-5]/g;

// var patt1 = new RegExp("[^1-5]", "g");

// var result = str.match(patt1);
// console.log(result);


// JavaScript RegExp (x|y) Expression
// ==================================
// var str = "re, green, red, green, gren, gr, blue, yellow";

// var patt1 = /(red|green)/g;

// var result = str.match(patt1);

// var str = "01234567890123456789";

// var patt1 = /(0|5|8)/g;

// var result = str.match(patt1);

// console.log(result);


var str = "That's hot!";
var patt1 = new RegExp("\\W", "g");
// var patt1 = /\w/g;


var result = str.match(patt1);

console.log(result);
