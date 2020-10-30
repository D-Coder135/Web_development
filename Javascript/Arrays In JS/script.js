// Arrays

// Array creation (Long Hand Notation)
var array = new Array();
array[0] = "Devansh";
array[1] = "19";
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = { Course: " HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2](array[0]); // call the function initialized at an index of the array
// object and passed value at another index of the same array object as a
// parameter to the function called.



// Array creation (Short Hand Notation)
var names = ["Devansh", "Divyansh", "Devesh"];
console.log(names);
