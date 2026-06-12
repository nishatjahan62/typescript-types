"use strict";
//  *** ENUM *** ==>> keep  some fixed string literals in on place like roles , status,,
Object.defineProperty(exports, "__esModule", { value: true });
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["User"] = "User";
    Roles["SubAdmin"] = "SubAdmin";
})(Roles || (Roles = {}));
const manageUserRoles = (role) => {
    if (role === Roles.Admin) {
        return true;
    }
    else
        return false;
};
console.log(manageUserRoles(Roles.Admin)); // true
console.log(manageUserRoles(Roles.User)); // false
/*
*** senior developer normally library_management_system this cause enum compiles to an IIFE object in JS output which can make javascript bundle large.
*** Avoid for large-scale codebases or projects as JS bundle will be heavier ***
*** We can use as const instate***
*/
//# sourceMappingURL=enum.js.map