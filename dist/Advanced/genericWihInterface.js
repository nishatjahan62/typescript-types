"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1: Developer with Job + extra student info
const developer01 = {
    name: "nishat",
    salary: 20,
    course: {
        level: 2,
        duration: "6 months",
        date: "June to November",
    },
    jobStatus: {
        designation: "Intern",
        experience: false,
    },
    student: {
        company: "Company",
        location: "Remote",
    },
};
// Example 2: Developer with Student only
const developer02 = {
    name: "jahan",
    salary: 100,
    course: {
        level: 5,
        duration: "1 year",
        date: "January to December",
    },
    jobStatus: {
        class: 12,
        ongoing: true,
        courseEnrolled: true,
        job: false,
    },
    student: null,
};
// Utility function
const add = (num1, num2 = 0) => num1 + num2;
add(2); // returns 2
//# sourceMappingURL=genericWihInterface.js.map