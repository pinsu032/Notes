/// <reference path="../contracts/ProductContracts.ts" />


export namespace ProjectA{
    export namespace Template{
      export  abstract class ProductTemplate implements ProjectA.Contracts.ProductContarct{
        public name:string="";
        public price=0;
        public qty:number=0;
        public abstract total():number;
        public abstract print():void;
      }
    }
}