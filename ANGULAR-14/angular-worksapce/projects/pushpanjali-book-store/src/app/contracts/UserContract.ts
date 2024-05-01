import { Role } from "./Role";

export interface UserContract{
    token: string | null;
    userId:number;
    fullName:string;
    email:string;
    mobile:number;
    gender:string;
    dob:Date;
    password:string;
    address:string;
    role:Role;
    createdDate:Date
}