// Normal Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";


console.log(company);
console.log("Company CEO name is: " +company.ceo.firstname);

console.log(company["name"]);


var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + company[stockPropName]);


// Better Way: Using object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstname: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};
