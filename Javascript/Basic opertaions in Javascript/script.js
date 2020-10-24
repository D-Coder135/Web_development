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



// **** What are considered as false in Js (all false)
if ( false || null || undefined || "" || 0 || NaN) {
  console.log("This line won't execute");
}
else {
  console.log("All false");
}

// **** What are considered as true in Js (all true)
if ( true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}



// **** Best practice for curly braces {} style
// Scope of cur;y braces i.e.
// when used on the same line and when used in the next line .
function a()
{
  return
  {
    name: "Devansh"
  };
}

function b() {
  return {
    name: "Devansh"
  };
}

console.log(a());
console.log(b());
