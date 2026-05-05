/* 
 Non-Primitive :
Array, object , tuple ...
*/

// =============================== Array ================================

// ***** with 1 types *****

// without type define
let language = ["JS", "TS", "python"];
language.length;
// with type define
let framework: string[] = ["tailwind", "next.js"];
framework.unshift("first");
framework.shift();
/* 
language.push(12)
 even if we don't define the type TypeScript will handle this :
=>Argument of type 'number' is not assignable to parameter of type 'string'.
framework.push(true)
=>Argument of type 'boolean' is not assignable to parameter of type 'string'.
*/

// ***** with 2 types *****

let nameAndRoll: (string | number)[] = ["nishat", 19, "jahan", 20, 25];
// now i can push number or string
nameAndRoll.push("pushpa", 21);
nameAndRoll.pop();

console.log(nameAndRoll);

/* 
candidate.push(false)
 even if we don't define the type TypeScript will handle this :
=>Argument of type 'boolean' is not assignable to parameter of type 'string | number'..
nameAndRoll.push(true)
=>Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
*/

//  ### Tuple ###

/* Tuple is an array with a fixed number of elements where each position has a specific, defined type in order .
=> Order mismatch will not work
*/

let candidate: [string, number, boolean] = ["nishat", 52630, true];

let foodAndPrice: [string, number] = ["rice", 30];

/* let candidate : [string , number ,boolean ] = ["nishat" , 52630 , "chattogram"]
=> 3rd should be boolean so error
=> Type 'string' is not assignable to type 'boolean'.
*/
let [name, candId] = candidate;
// console.log(name, candId);

// =============================== object ================================

//  object with literal Optional type & access modifier
const frontend: {
   readonly language: string; //access modifier : work like literal type
  framework: "Next.js"; // literal type : it won't change ever ..  
  animation: string;
  smoothScroll : boolean
  font? : string // Optional type
} = {
  language: "TypeScript",
  framework: "Next.js",
  animation: "farmer motion",
  smoothScroll: false
};
frontend.smoothScroll = true

console.log(frontend)

/* 
frontend.animation = 12
=>Type 'number' is not assignable to type 'string'.

 frontend.language="javaScript"
 =>Cannot assign to 'language' because it is a read-only property.

  frontend.framework="react"
  => Type '"react"' is not assignable to type '"Next.js"'.
*/