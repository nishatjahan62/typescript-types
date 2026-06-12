"use strict";
/*
Function define in TypeScript
=>normal Function
=>arrow Function
=> In object (Method)
=> In loop
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ------- Normal Type define in normal & arrow function -------
// => Normal function
function addNormal(num1, num2) {
    return num1 + num2;
}
const total = addNormal(2, 5);
// console.log(total);
// Arrow Function
const addArrow = (num1, num2) => {
    return num1 * num2;
};
const total2 = addArrow(5, 6);
// console.log(total2);
// ------- Function inside Object => Method -------
const candidate = {
    name: "nishat",
    canId: 256300,
    Payment(amount, tax) {
        const totalPayment = amount + tax;
        return totalPayment;
    },
    balance: 0,
    addBalance(amount, totalPayment) {
        const candidateOwnBalance = (this.balance += amount);
        const totalBalance = candidateOwnBalance + totalPayment;
        return totalBalance;
    },
};
const candidatePayment = candidate.Payment(5000, 500);
// console.log(candidatePayment);
const candidateTotalBalance = candidate.addBalance(600, candidatePayment);
// console.log(candidateTotalBalance);
// ------- Function  with map  -------
const canIds = [253, 254, 255, 256, 257, 258];
const cubeCanId = canIds.map((cId) => cId ** 3);
console.log(cubeCanId);
//# sourceMappingURL=function.js.map