//node 03Intermediate/07Array.js

var countries = ["India", "USA", "Japan", "Russia"];

//New syntax below:
var states = new Array("Vermont", "Iowa", "Florida");

//console.log(states[1]);
//logs item in 2nd position of array
//console.log(states.length);
//yields array length

states[1] = "Connecticut";
//replaces a value at a set array location
//console.log(states);

var user = ["terri", "terri@terri.com", 3, 35, true];
console.log(user);
//can see all data types--objects are better for this though

//pop method removes last item in the array
user.pop();
//console.log(user);

user.unshift("New Value");
//adds value to front of array and shifts values
//console.log(user);

user.shift();
//console.log(user);
//removes value from the front of array

console.log(user.indexOf(3));
//gives position in array where # is found
console.log(user.indexOf("terri"))
//will produce 0 because it's 1st in array
console.log(user.indexOf("whatever"))
//will bring up -1 because it's not there

console.log(Array.from("terri"));
//convert string to array--check out the from

