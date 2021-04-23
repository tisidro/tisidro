//node 03Intermediate/05ScopeChaining.js

var name = "Terri";

console.log("line number 5", name);

function sayName(){
    var name = "Fran"
    console.log("Line number 9", name);
sayNameTwo ();

function sayNameTwo() {
    console.log("Line number 13", name)
}

}

sayName();

//When you add 2nd var name you will see
//both names and both numbers
//if you only have 1st var name the sayName
//function can take name var from global
//var above it
//Note tht for sayNameTwo the name does
//not go to the global var name, it goes to the one 
//immediately above it