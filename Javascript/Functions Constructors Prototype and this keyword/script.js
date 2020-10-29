// detailed view of this keyword
function test () {
  console.log(this);
  this.myName = "Devansh";
}
test();
console.log(window.myName);


// Function Constructors
function Circle (radius) {
//  console.log(this);
    this.radius = radius;
}

var myCircle = new Circle(10);
console.log(myCircle);
