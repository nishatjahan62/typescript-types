"use strict";
// Generic Function
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };
const createArrrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(222);
const arrObj = createArrrayWithGeneric({
    id: 123,
    name: "Next Level",
});
// tuple
const createArrayWithTuple = (param1, param2) => [
    param1,
    param2,
];
const createArrayTupleWithGeneric = (param1, param2) => [
    param1,
    param2,
];
const res1 = createArrayTupleWithGeneric("nishat", false);
const res2 = createArrayTupleWithGeneric(2563, { name: "nishat" });
//
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
const result = addStudentToCourse(student2);
console.log(result);
//# sourceMappingURL=gnericFunction.js.map