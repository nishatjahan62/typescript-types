
// type Alias
type User = {
  name: string;
  age: number;
};

/*
For array and function  should use type alias  
*/

// interface : object type: array, object , function
interface IUser {
  name: string;
  id: string;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "The Admin",
  id:"2560" ,
  role: "admin",
};

const user2: IUser = {
  name: "the user",
  id: "2563",
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

interface IFriends {
  [index: number]: string;
}
