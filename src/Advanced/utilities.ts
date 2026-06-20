type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};


//  Manually defining summery types
type ProductSummery ={
id: number;
name: string;
price: string;
}
// using pick type to define the summery types from Product type
type ProductSummeryWithPick = Pick<Product,"id" | "name" | "price">

// using omit which work opposite of pick 
type ProductSummeryWithOmit = Omit<Product ,"stock">

//  using required 

type ProductSummeryWithRequired = Required<Product> 

const pruduct: ProductSummeryWithRequired ={
      id: 222,
  name: "Mouse",
  price: "20",
  stock: 100,
  color: "black",
}

type ProductWithPartial = Partial<Product> // make all product optional adding ? 
type ProductWithReadOnly = Readonly<Product> // make all product readonly 

//  using Record for declaring empty object 
const emptyObj : Record<string , unknown> ={}

const product01 ={
    id:215,
    name:"key board",
    price : "2550 tk"
}
