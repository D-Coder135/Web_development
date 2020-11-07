// Event Handling

/* Using the DOMContentLoaded we can load the contents of the code before any
image or extra part is loaded. */

document.addEventListener("DOMContentLoaded",
  function (event) {
    function sayHello (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title =
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);

/* Hence handling events like this have lots of advanteges and makes our html
code clean and simple. And also we can perform many tasks without adding
additional eventHandlers. */
