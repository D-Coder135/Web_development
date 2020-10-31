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

// Using for loop with arrays.
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

// Another concept!
names[100] = "Kimiko";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}



// Another for loop used with the arrays in JS(Enhanced for loop)

var nameTitles = ["Shukla", "Dixit", "Singh"];

var myObj = {
  name: "Devansh",
  title: "Shukla",
  speciality: "Software Engineer"
};
for (var prop in myObj) {
  console.log(prop + " : " + myObj[prop]);
}
