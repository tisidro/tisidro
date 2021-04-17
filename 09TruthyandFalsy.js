//node 02Basics/09TruthyandFalsy.js

//Coersion and Falsy Values
//These are all falsy values (treated as false)
//undefined, null, 0, ' ', NaN
//var user --undefined(unspecified)
//  null -- means empty 

var user = "2";

if (2 === user) {
    console.log("condition is true");

}

//text won't be logged b/c === is strict, if you 
//have == it would log even though 2 is not a string
//in the if statement