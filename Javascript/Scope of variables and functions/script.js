var message = "in global";
console.log("Global: message = " +message);
var a = function () {
  var message = "inside a";
  console.log("a: message = " +message);
}
