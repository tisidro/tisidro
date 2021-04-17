
//Show user a signout button if he is authenticated
//otherwise show option to login/sign up

//node 02Basics/07ConditionalSignout.js



//  if (authenticated) {
// console.log("Show signout button");
//  } 
//  else {
//      console.log("Show login option");
//  }

//SHORTCUT for if...
//Can do using Conditional (ternary) operator
//condition followed by (?) then expression to execute if truthy
//after that comes the expression to execute if falsy
var authenticated = true;

authenticated ? console.log("Signout Button") : console.log("Login Button");