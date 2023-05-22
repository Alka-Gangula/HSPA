import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase{
  Id: number;
  Name: string;
  FType: string;
  PType: string;
  BHK: number;
  BuiltArea: number;
  City: string;
  RTM: boolean;
  Price: number;
  Image?: string;
  CarpetArea?: number;
  SellRent: number;
  Possession?: string;
  Address:string;
  Address2?:string;
  FloorNo?: string;
  TotalFloor?: string;
  AOP?:string;
  MainEntrance?:string;
  Security?:number;
  Gated?:number;
  Maintainance?:number;
  Description?:string;
  PostedOn:string;
  PostedBy:number;
}
