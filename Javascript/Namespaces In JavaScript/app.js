//sayHello();
//sayHi();

/* The output we get on the console is not what we have desired to get.
  Because the same varible name is defined twice with different values,
  therefore there occurs redundancy.
 Hence here comes Namespaces in context. */

devanshGreeter.sayHello();
omiGreeter.sayHi();

/* Now after declaring a global variable greetingin both script1.js and script2.
js, the output which we will get on the console will not be the desired output,
as the scope of the varible greeting will be global and hence redundancy will
take place. */

/* Therefore, to overcome or remove this error a new concept comes in context
known as "Imediately Invoked Function Expression (IIFE)". */
