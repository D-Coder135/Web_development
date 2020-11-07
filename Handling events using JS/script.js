// Event Handling

function sayHello() {
  console.log(this);
  var name = document.getElementById("name").value;
  var message = "<h2>Hello " + name + "!</h2>";

  // document.getElementById("content").textContent = message;
  document.getElementById("content").innerHTML = message;

  if (name === "Devansh") {
    title += "Created By " + name + "!";
    document.querySelector("h1").textContent = title;
  }
}

// Unobstructive event binding
