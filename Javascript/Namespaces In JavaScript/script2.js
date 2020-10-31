/* var name = "Omi";
function sayHi() {
  console.log("Hi " + name);
} */

/*

var omiGreeter = {};
omiGreeter.name = "Omi";
var greeting = "Hi ";
omiGreeter.sayHi = function () {
  console.log(greeting + omiGreeter.name);
}

*/

// IIFE
(function (window)) {
  var omiGreeter = {};
  omiGreeter.name = "Omi";
  var greeting = "Hi ";
  omiGreeter.sayHi = function () {
    console.log(greeting + omiGreeter.name);
  }
  window.omiGreeter = omiGreeter;
}(window);
