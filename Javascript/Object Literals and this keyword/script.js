// Object literals and "this" keyword
var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this); // Inspite of reffering the global object Window,
    // it reffers to the literalCircle object and log it on the console along
    // with the radius property.

    var increaseRadius = function () {
      self.radius = 20;
    };
    
    return Math.PI * Math.pow(this.radius, 2);
  };
};

console.log(literalCircle.getArea());
