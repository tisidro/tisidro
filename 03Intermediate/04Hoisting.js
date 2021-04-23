//node 03Intermediate/04Hoisting.js
//tipper function to calculate a tip:

// function tipper(a) {
//     var bill = a;
//     console.log(bill + 5);
// }

// tipper(5);

// parseInt allows conversion of "" to #

function tipper(a) {
    var bill = parseInt(a);//convert string into usable #
    console.log(bill + 5);
}

tipper("5");

//if you move tipper("5") to top it will
//b/c global execution context scans entire
//code and makes available functions if
//declared

//if you change function to var it works...
//but your call has to come after not at top


 var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

bigTipper("200");

//this is a big part of simple code
//hoisting
console.log(myname);
var myname = "Terri";


//code hoisting -- if you console log it
//it's undefined

function sayName(){
    var myname = "Ms. T";
    console.log(myname);
}

sayName();

console.log(myname);

//if multiple mynames executed it only 
//executes in its context, sayname is outside so ignores it