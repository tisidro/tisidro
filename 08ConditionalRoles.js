
//node 02Basics/08ConditionalRoles.js
//USE OF SWITCH AND CASE-- have to put break statement
//after each which is tedious so modern languages don't use

//create an app with these roles:
//admin - full access to app
//subadmin - gets to create/delete courses
//testprep - gets to create/delete tests
//user - gets access to content and maybe make comments

var user = "";

switch (user) {
case "admin":
    console.log("You get full access");
    break;

case "subadmin":
    console.log("You can create/delete courses");
    break;

case "testprep":
        console.log("You create/delete tests");
        break;

case "user":
    console.log("You can access content/comment");
    break;

default:
    console.log("Trial user - unconfirmed")
}
