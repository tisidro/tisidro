//node 02Basics/02Variables2.js

//Allow user to access a course if ANY of these true:
//logged in via email
//logged in via Google
//logged in via Facebook

var email = false;
var facebook = false; 
var google = false;

if (email || facebook || google){
console.log("Login Success!");
}

    console.log("You can't log in!");

    //you don't need to use an else or anything here

