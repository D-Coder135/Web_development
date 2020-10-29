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

    this.getArea =
    function () {
      return Math.PI * Math.pow(this.radius , 2);
    }; // This property will be created separately, everytime a new object of
      // the function Circle will be created which is not required.
}

var myCircle = new Circle(10);
// console.log(myCircle);
  console.log(myCircle.getArea());
