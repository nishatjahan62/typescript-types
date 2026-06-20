// ** Mapped type 

// ---- normal Map ----

const arrayOfNum : number[]= [1,3,5]


const arrayOfString : string[] = ["1","3","5"]

const arrayOfStringUsingMap : string[] = arrayOfNum.map((num)=>num.toString())

console.log(arrayOfStringUsingMap)

// --- map type ----

type AreaNum ={
    height : number ,
    width : number
}

type width = AreaNum["width"]

// manually 
type AreaString ={
    height : string ,
    width : string
}

// using  map
type AreaStringUsingMap  = {
    [key in "height" | "width"] :string
}

// if need to boolean 
type AreaBooleanUsingMap  = {
    [key in "height" | "width"] :boolean
}

// using keyof
type AreaStringUsingMapKeyof  = {
    [key in keyof AreaNum] :string
}

// generic

type AreaStringUsingMapGeneric<T>  = {
    [key in keyof T] : T[key]  // ===> key === height > string  ,,, key ==== width > number
}
/* BUT if the keys also need to dynamic then we can use T[key]
 Means :: 
 T ==   {height:string , width : string }
 but if we want  T ==   {height:string , width : number } ==== T["height"] : string  T["width"] : number 

 then we will use T[key]




*/

const Area01 : AreaStringUsingMapGeneric<{height : string  ; width : number}> = {
    height : "50",
    width : 60  
}
const Area02 : AreaStringUsingMapGeneric<{height : number  ; width : boolean}> = {
    height : 50,
    width : true  
}