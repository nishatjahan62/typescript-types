/* 
Function define in TypeScript
=>normal Function
=>arrow Function
=> In object (Method)
=> In loop 
*/

// ------- Normal Type define in normal & arrow function -------
// => Normal function
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
const total = addNormal(2, 5);
// console.log(total);

// Arrow Function
const addArrow = (num1: number, num2: number): number => {
  return num1 * num2;
};
const total2 = addArrow(5, 6);
// console.log(total2);

// ------- Function inside Object => Method -------
const candidate = {
  name: "nishat",
  canId: 256300,
  Payment(amount: number, tax: number): number {
    const totalPayment = amount + tax;
    return totalPayment;
  },
  balance: 0,
  addBalance(amount: number, totalPayment: number): number {
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
const canIds: number[] = [253, 254, 255, 256, 257, 258];

const cubeCanId = canIds.map((cId: number) => cId ** 3);
console.log(cubeCanId)