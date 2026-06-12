"use strict";
// Key of Operator :
Object.defineProperty(exports, "__esModule", { value: true });
const enrolledCourse = "level2";
const student = {
    name: "nishat",
    id: 2562,
    course: "level2"
};
console.log(student.course);
// getting the object property using constraint and Generic
const getStudentProperty = (obj, keyof) => {
    return obj[keyof];
};
console.log(getStudentProperty(student, "nothing"));
/* in this it will show undefined cause nothing is not a property of Student object
BUT  also it is not showing error cause keyof is "string"....
Now the solution is using  "keyof constraint"
*/
const getStudentPropertyWithKeyofConstraint = (obj, keyof) => {
    return obj[keyof]; // Now there is no error cause we define the keyof as key of student type....
};
console.log(getStudentPropertyWithKeyofConstraint(student, "nothing")); // error 
console.log(getStudentPropertyWithKeyofConstraint(student, "name")); // success 
// **** Now we can use many other type in the same function But keyof Student won't support other types keyof So .... will use Generic for this.. ******
const mission = {
    name: "typescript technocrat",
    course: "next level",
    module: 2
};
const module = {
    name: "keyof",
    course: "next level",
    video: 7
};
const getStudentPropertyWithKeyofConstraintAndGeneric = (obj, keyof) => {
    return obj[keyof]; // Now can use other keys from other types 
};
console.log(getStudentPropertyWithKeyofConstraintAndGeneric(mission, "course"));
console.log(getStudentPropertyWithKeyofConstraintAndGeneric(module, "video"));
//# sourceMappingURL=keyof.js.map