/*
Define a function that can address the role of 
a user. A user can have the following roles:
1. Admin - with all access
2. subadmin - create and delete courses
3. testprep - create and detele tests
4. user - consume content
5. other - trial user

Input: getUserrole(name, role)
*/

//node 03Intermediate/02UserRoleFunction.js

function getUserRole(name, role){

    switch (role){
        case "admin":
            return `${name} is an admin with all access`
            //break;
        
        case "subadmin":
            return `${name} can create and delete courses`
            //break;

        case "testprep":
            return `${name} can create and delete tests`
            //break;

        case "user":
            return `${name} can consume content`
            //break;

        default:
            return `${name} is a trial usser` 
            //break;

    }
}


console.log(getUserRole("Terri", "admin"));

var getRole = getUserRole("Fran", "user");

console.log(getRole);