// conditional type :  je type condition er upor nirvorsheel

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof Vehicle ? true : false;

type HasTractor = CheckVehicle<"tractor">; // false
type HasBike = CheckVehicle<"bike">; // true
