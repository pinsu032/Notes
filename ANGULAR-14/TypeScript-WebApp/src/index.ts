class Employee{
    public firstName:string="";
    public lastName:string="";
    public designation:string="";
    public print():void{
       document.write(`${this.firstName} ${this.lastName}  ${this.designation}`)
    }
}

class Developer extends Employee{
    public firstName: string="Sanjay";
    public lastName: string="kumar";
    public designation: string="Developer";
    role = "Developer Role : Build,Debug ,Test";
    print(){
        super.print();
        document.write(this.role);
    }
}

class Admin extends Employee{
    public firstName: string="Raj";
    public lastName: string="kumar";
    public designation: string="Admin";
    role = "Admin Role :Authorization";
    print(){
        super.print();
        document.write(this.role);
    }
}

class Manager extends Employee{
    public firstName: string="Pinsu";
    public lastName: string="Singh";
    public designation: string="Manager";
    role = "Developer Role :Approvals";
    print(){
        super.print();
        document.write(this.role);
    }
}

let employees = new Array(new Developer(),new Admin(),new Manager());
