// Default values
function orderChickenWith(sideDish) {
/*  if (sideDish === undefined) {
    sideDish = "Whatever!";
  } */
  sideDish = sideDish || "Whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
