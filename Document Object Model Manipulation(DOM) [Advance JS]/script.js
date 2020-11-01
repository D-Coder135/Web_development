// DOM Manipulation


// console.log(document.getElementById("title"));
/* Using document object along with the property getElementById to extract
the heading Part having Id title from the html code index.html */

// console.log(document instanceOf HTMLDocument);
/* Showing that the document object is an instance of HTMLDocument and therefore
it can be used as a global object inside a JavaScript file. */


function sayHello() {
  var name = document.getElementById("name").value;
  var message = "<h2>Hello " + name + "!</h2>";
}
