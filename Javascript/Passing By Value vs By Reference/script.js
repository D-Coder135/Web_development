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
 console.log(b);
 // Here on updating the value reffered by object b, the value reffered by
 // object a also changes as both the objects are reffering the same value.
 // This is known as Copy By Reference.


 // Pass by Reference vs Pass by Value

 // Pass By Value
 function changePrimitive(primValue) {
   console.log("in change Primitive...");
   console.log("before: ");
   console.log(primValue);

   primValue = 5;
   console.log("after: ");
   console.log(primValue);
 }

 var value = 7;
 changePrimitive(value);
 console.log("after changePrimitive, original value: ");
 console.log(value);


 // Pass By Reference
 function changeObject(objValue) {
   console.log("in changeObject...");
   console.log("before: ");
   console.log(objValue);

   objValue.x = 5;
   console.log("after: ");
   console.log(objValue);
 }

 value = { x : 7 };
 changeObject(value);
 console.log("After changeObject, Original value: ");
 console.log(value);

 // Here also just like copy by reference, original value changes on changing
 // the same value for some other field from inside a function.
 // Hence this is known as Pass By Reference. 
