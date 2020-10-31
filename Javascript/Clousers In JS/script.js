// Clousers In JS
function makeMultiplier (multiplier) {

  function random() {
    console.log("Multiplier is: " + multiplier);
  }
  return (
    function (x) {
      return multiplier * x;
    }
  );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
