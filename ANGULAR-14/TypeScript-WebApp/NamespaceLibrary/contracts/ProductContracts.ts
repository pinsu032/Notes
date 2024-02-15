export namespace ProjectA{
    export namespace Contracts{
        export interface ProductContarct{
            name:string;
            price:number;
            qty:number;
            total():number;
            print():void;
        }
    }
}