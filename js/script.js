var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

//Log out an array with all the elements from the stuff array that contains the letter "s". 
//Use an empty array with a for...of loop to log out all the elements
var sGroceries = [];

for (var item of groceries) {
  if (item.includes("s")) {
    sGroceries.push(item);
  }
};

console.log(sGroceries);

//log out all the elements using .filter(). 
//var sGroceries = groceries.filter(function (item) {
  //return item.includes("s");
//});