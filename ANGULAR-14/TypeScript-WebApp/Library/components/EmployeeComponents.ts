import { EmployeeTemplate } from "../templates/EmployeeTemplate";

export default class EmployeeComponent extends EmployeeTemplate{
    firstName="Raj";
    lastName = "Kumar";
    public desg: string="manager";
    print(){
        console.log(`${this.firstName} ${this.lastName} - ${this.desg}`);
    }
}