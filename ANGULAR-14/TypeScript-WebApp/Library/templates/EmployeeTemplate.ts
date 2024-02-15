import { EmployeeContract } from "../contracts/EmployeeContracts";

export abstract class EmployeeTemplate implements EmployeeContract{
    public  firstName: string="";
    public lastName: string="";
    public desg: string="";
    public abstract print():void;
}