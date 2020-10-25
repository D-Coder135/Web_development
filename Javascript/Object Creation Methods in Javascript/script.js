// Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";


console.log(company);
console.log("Company CEO name is: " +company.ceo.firstname);

console.log(company["name"]);
