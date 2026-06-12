"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};
const student1 = {
    id: 25632,
    name: "nishat",
    hasPen: true,
};
const student2 = {
    id: 25633,
    name: "jahan",
    isStudent: true
};
const student3 = {
    id: 25634,
    name: "maher",
    doingAJob: false,
    isStudent: true
};
const result = addStudentToCourse(student3);
console.log(result);
//# sourceMappingURL=constraint.js.map