// ?   : ternary operator => decision making
// ??  : nullish coalescing operator => null/undefined
// ?. optional chaining


const skillSelect = (skill: string) => {
/* 
if (skill==="TypeScript") {
    console.log("You are selected for TypeScript!")
} else {
    console.log("Not selected!")
}
*/
// ** ternary **
  const result = skill === "TypeScript" 
    ? "You are selected for TypeScript!" 
    : "Not selected!";
  
  console.log(result);
};

skillSelect("TypeScript");

// ** nullish coalescing operator  **

// const theme= undefined 
const theme =null

// const userTheme = ""  ==>> it will return empty string
const userTheme = "light mood"

const nullishResult = theme ?? "dark mood"
console.log(nullishResult)

const userThemeResult=userTheme ?? "dark mood"

// default value will work only when the value is null or undefined

// ** ternary Vs nullish **

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";

const resultWithNullish = isAuthenticated ?? '"You are guest !';

console.log({ resultWithTernary }, { resultWithNullish });

// nullish result will give empty string cause it will work for null and undefined ,, But ternary result will be You are guest ! ...

//optional chaining

const candidate: {
  details: {
    name: string;
    id: string;
    profilePic?: string; // optional property
  };
} = {
  details: {
    name: "Maher",
    id: "2560",
  },
};

const pic = candidate?.details?.profilePic // optional chaining 
console.log(pic);