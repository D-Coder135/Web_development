/* var name = "Omi";
function sayHi() {
  console.log("Hi " + name);
} */



var omiGreeter = {};
omiGreeter.name = "Omi";
var greeting = "Hi ";
omiGreeter.sayHi = function () {
  console.log("Hi " + omiGreeter.name);
}
