"use strict";
// nullable types
Object.defineProperty(exports, "__esModule", { value: true });
const getCandidate = (input) => {
    if (input) {
        console.log(`candidate01 ${input}`);
    }
    else {
        console.log("ALL candidate");
    }
};
getCandidate(null);
//unknown
const candidateId = (input) => {
    if (typeof input === "number") {
        const theId = input * 10;
        console.log(theId);
    }
    else if (typeof input === "string") {
        const [theId] = input.split(" ");
        console.log(Number(theId) * 10);
    }
    else {
        console.log("wrong Input");
    }
};
candidateId(100);
candidateId("2562");
candidateId(null);
// void
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("Error...");
//# sourceMappingURL=nullableUnknownNever.js.map