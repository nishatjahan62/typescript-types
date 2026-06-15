
type StudentData ={
    name :string,
    id:number,
    isStudent : boolean // forcing isStudent have to be true 
} // type for clean code for using constraint

const addStudentToCourse = <T extends StudentData>(studentInfo: T) => { // forcing StudentData in  the studentInfo => constraint
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
id:25634,
name:"maher",
  doingAJob: false,
  isStudent:true
};

const student4 = {
id:25635,
name:"pushpa",
  doingAJob: false,
  isStudent:true
};
const result = addStudentToCourse(student3);
console.log(result);