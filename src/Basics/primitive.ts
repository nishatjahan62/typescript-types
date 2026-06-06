// Primitive Data type in TypeScript 

/* 
 ## Js to ts
string,number,null,...

 ## ts
 never,unknown ,Enum ,symbol..
*/

// ---------- Examples  ---------------


// ==== String type ===
let  candidate : string=" Nishat jahan "
candidate="nishat jahan"
candidate.concat("poshpa")
console.log(candidate)

/*
------------------
Name = 123  
TypeScript will give the error if i try to assign different type => Type 'number' is not assignable to type 'string'

also if i try to write 
candidate.toFixed ( toFixed is a number type field)
again TypeScript will give => Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?

--------------------
*/

// === Number type ===

let candidateId :number = 1250265
candidateId.toFixed(3)
console.log(candidateId)


/*
------------------

candidateId = "122"  
TypeScript will give the error if i try to assign different type =>Type 'string' is not assignable to type 'number'.

also if i try to write 
candidateId.concat 
again TypeScript will give => Property 'concat' does not exist on type 'number'.

--------------------
*/

// === Number type ===

let isCandidate :boolean = false
isCandidate = true
isCandidate.valueOf

/*
------------------

isCandidate= "Nishat"
 => Type 'string' is not assignable to type 'boolean'.

also if i try to write 
isCandidate.endswith
 => Property 'endswith' does not exist on type 'true'.

--------------------
*/


// === undefined type ===

let y = undefined 

y= 5
y="dev" 


let x : undefined = undefined 


/*
------------------
// initially y will be "any" type  . So we can reassign it with any types 


// But when it is undefined we can't reassign it with other types 
x="string" =>
Type '"string"' is not assignable to type 'undefined'.ts(2322)
let x: undefined
--------------------
*/
