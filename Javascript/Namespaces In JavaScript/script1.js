/* var name = "Devansh";
function sayHello() {
  console.log("Hello " + name);
} */


/*

var devanshGreeter = {};
devanshGreeter.name = "Devansh";
var greeting = "Hello ";
devanshGreeter.sayHello = function () {
  console.log(greeting + devanshGreeter.name);
}

*/


// IIFE
(function (window)) {
  var devanshGreeter = {};
  devanshGreeter.name = "Devansh";
  var greeting = "Hello ";
  devanshGreeter.sayHello = function () {
    console.log(greeting + devanshGreeter.name);
  }
  window.devanshGreeter = devanshGreeter;
})(window);
