// **** String Concatination
var string = "Hello";
string += "World";
console.log(string + "!")



// ***** Regular Math Operations: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1 (a) {
  console.log( a / 5);
}
test1();



// **** Equality
var x = 4, y = 4;
if (x == y) {
  console.log("x is equal to y");
}

x = "4";
if (x == y) {
  console.log("x is equal to y");
}



// **** Strict Equality
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}
