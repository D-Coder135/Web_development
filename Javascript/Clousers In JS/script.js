// Clousers In JS
function makeMultiplier (multiplier) {

  return (
    function (x) {
      return multiplier * x;
    }
  );
}
