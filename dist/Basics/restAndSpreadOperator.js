"use strict";
/*
#### Spread operator => mixing 2 arrays or spreading one's elements  into another
#### Rest operator => Collects multiple arguments into a single array

*/
Object.defineProperty(exports, "__esModule", { value: true });
// --------------------- Spread Operator -----------------------
const frontend = ["typeScript", "next.js", "javaScript", "react"];
const backend = ["node.js", "express.js", "node mailer"];
const skills = [...frontend, ...backend]; // mixing 2 arrays
// console.log(skills)
const backendAndDb = [...backend, "mongoDb"];
// console.log(backendAndDb) // spreading one's elements into another
// --------------------- Rest Operator -----------------------
// const sessionInvitation  = (...students :string[]) =>{
//  students.forEach((student :string)=>console.log(`${student} , don't forget to join today's session`))
// }
// sessionInvitation("nishat","janan","maher")
//----------------------------------------------------------------------
// ================= Destructuring ====================
//---->> object Destructuring <<---
const user = {
    name: "nishat",
    id: "25630",
    personalInfo: {
        email: "nishatjahanposhpa@gmail.com",
        address: "Chattogram,Bangladesh"
    },
    course: "Next Level",
};
const { name: name, personalInfo: { email } } = user;
console.log("name =", name, ", email =", email);
//---->> array Destructuring <<---
const [, framework,] = frontend;
console.log("frontend framework = ", framework);
//# sourceMappingURL=restAndSpreadOperator.js.map