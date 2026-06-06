/* 
## => Type Alias means using  defined types for similar things Or simply reuse types  
*/

//****Convention => use 1st letter in capital
type CandidateInfo = {
  name: string;
  id: number;
  personalInfo: {
    email: string;
    address: string;
  };
  course: {
    name: string;
    duration: number | string;
    institute: string;
  };
};

const candidate01:CandidateInfo = {
  name: "nishat",
  id: 56201,
  personalInfo: {
    email: "nishatjahanposhpa@gmail.com",
    address: "Chattogram,Bangladesh",
  },
  course: {
    name: "Next-level",
    duration: " 6 month",
    institute: "Programming Hero",
  },
};

const candidate02:CandidateInfo = {
  name: "jahan",
  id: 56202,
  personalInfo: {
    email: "jahanposhpa@gmail.com",
    address: "Chattogram,Bangladesh",
  },
  course: {
    name: "Next-level",
    duration: " 6 month",
    institute: "Programming Hero",
  },
};
const candidate03:CandidateInfo = {
  name: "poshpa",
  id: 56203,
  personalInfo: {
    email: "poshpa@gmail.com",
    address: "Chattogram,Bangladesh",
  },
  course: {
    name: "Next-level",
    duration: " 6 month",
    institute: "Programming Hero",
  },
};

console.log(candidate03)

// ==== type Alias in Function =====

type CandidatePayment = (amount:number)=>number
const payment :CandidatePayment = (amount)=> amount
const total= payment(500)

console.log(total)