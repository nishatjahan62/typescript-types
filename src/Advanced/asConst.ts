const Roles  ={
Admin : "Admin",
User : "User",
SubAdmin : "SubAdmin"
} as const

/* 
as const add " readonly" before the types behind the scene Like ---
readonly Admin : "Admin",
readonly User : "User",
readonly SubAdmin : "SubAdmin"

--
now it can't work as type ,,, For That we need "typeof and keyof"
**typeof : Typeof work in runtime but it creates a type of the const BTS like --

const User = {
id: 210
name:"nishat"
}
Now if we give typeof before it then::

typeof User ==  type User ={
                             id : number
                             name: string
                             }

 Now keyof will take the keys from typeof user 
 So keyof typeof User ======  210 | nishat
 SO ---- keyof typeof Roles work like === "Admin" | "User" | SubAdmin

 But sometimes we need  "ADMIN" in capital case so we need to access it like object and use typeof
 like typeof Roles[keyof typeof Roles]
*/

const 
manageUserRoles = (role: keyof typeof Roles)=>{
    if (role===Roles.Admin) {
      return true 
    } else return false
}

const 
manageUserRoles01 = (role: typeof Roles[keyof typeof Roles])=>{
    if (role===Roles.Admin) {
      return true 
    } else return false
}