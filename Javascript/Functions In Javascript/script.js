// Functions are First-Class Data Types
// Fucntions are special types of Objects
function multiply(x, y) {
  return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply(4, 5));
console.log(multiply.version);
