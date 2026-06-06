// union |

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User dashboard";
  } else {
    return "guest dashboard";
  }
};

// getDashboard("guest");
// ---- Argument of type '"guest"' is not assignable to parameter of type 'UserRole'.---


// intersection &
type Student = {
  id: string;
  name: string;
  phoneNo: string;
};

type JobHolder = {
  designation: string;
  id: string;
};

type Candidate = Student & JobHolder;

const candidate:Candidate  = {
  id: "001",
  name: "nishat",
  phoneNo: "01832-000000",
  designation: "candidate",
};