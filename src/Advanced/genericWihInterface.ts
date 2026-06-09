// Generic Developer interface
interface Developer<T, X = null> {
  name: string;
  salary: number;
  course: {
    level: number;
    duration: string;
    date: string;
  };
  jobStatus: T;
  student?: X;
}

// Job type
interface Job {
  designation: string;
  experience: boolean;
}

// Student type
interface Student {
  class: number;
  ongoing: boolean;
  courseEnrolled: boolean;
  job: boolean;
}

// Example 1: Developer with Job + extra student info
const developer01: Developer<
  Job,
  { company: string; location: string }
> = {
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
const developer02: Developer<Student> = {
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
const add = (num1: number, num2: number = 0): number => num1 + num2;

add(2); // returns 2
