"use strict";
// *** defining the types better than TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "nishat";
anything; // type assertion Or type narrowing " over sure that anything will be string"
const kgToGMConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`;
    }
};
const result1 = kgToGMConverter(2);
console.log({ result1 });
const result2 = kgToGMConverter("2 kg");
console.log({ result2 });
try {
}
catch (err) {
    console.log(err.meesage);
}
//# sourceMappingURL=typeAssertion.js.map