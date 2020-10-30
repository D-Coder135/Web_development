// Object literals and "this" keyword
var literalCircle = {
  radius: 10,

  getArea: function () {
    console.log(this);
  };
};
