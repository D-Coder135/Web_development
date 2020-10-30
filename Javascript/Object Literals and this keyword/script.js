// Object literals and "this" keyword
var literalCircle = {
  radius: 10,

  getArea: function () {
    console.log(this); // Inspite of reffering the global object Window,
    // it reffers to the literalCircle object and log it on the console along
    // with the radius property.
    return Math.PI * Math.pow(this.radius, 2);
  };
};

literalCircle.getArea();
