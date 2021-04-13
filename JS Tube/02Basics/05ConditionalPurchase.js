//User will only be allowed to make a purchase when:
//logged in
//email verified
//cardInfo - valid
//If any one is missing, purchase will be stopped

// var isLoggedIn = true;
// var isEmailVerified = true;
// var cardInfo = true; 

// if (isLoggedIn) {
//     console.log("Logged in Success!");
//     if (isEmailVerified) {
//     console.log("Email is verified.");
//     if (cardInfo) {
//         console.log("You can make a purchase.");
//     }
//     }
// }

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

//&& allows when everything is true

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase");
} else {
    console.log("You are not allowed to purchase!")
}
