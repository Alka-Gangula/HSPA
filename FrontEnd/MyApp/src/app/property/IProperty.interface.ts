export interface IProperty
{
  Id:number,
  Name:string,
  FType:string,
  PType:string,
  BHK:number,
  BuiltArea:number,
  City:string,
  // changed
  RTM:boolean,
  Price:number,
  Image?:string,
  SellRent:number,
  // estPosession?:string
  PossessionOn:string
}
