// Function Constructors
function test () {
  console.log(this);
  this.myName = "Devansh";
}
test();
console.log(window.myName);
