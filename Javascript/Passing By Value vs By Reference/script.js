// Copy By Reference vs Copy By Value

 // Copy By Value Example
 var a = 7;
 var b = a;
 console.log("a: " + a);
 console.log("b: " + b);
 b = 5;
 console.log("After b update: ");
 console.log("a: " + a);
 console.log("b: " + b);

 // Copy By Reference
 var a = { x: 7};
 var b = a;
 console.log(a);
 console.log(b);
 b.x = 5;
 console.log("After b.x update: ");
 console.log(a);
 
