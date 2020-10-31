// Clousers In JS
function makeMultiplier (multiplier) {

  function random() {
    console.log("Multiplier is: " + multiplier);
  }
  random();

  return (
    function (x) {
      return multiplier * x;
    }
  );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
 // JavaScript Engine preserves outer lexical enviorement for the funtion which
// is returned inside another function.
// Hence doubleAll has its own execution enviorement therefore its has the
// access of the multiplier parameter of the funtion makeMultiplier,
