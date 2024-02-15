import ProductContract ,{CategoryContract} from "../contracts/ProductContracts"
export abstract class ProductTemplate implements ProductContract,CategoryContract{
    public name:string="";
    public price:number=0;
    public qty:number=0;
    public categoryName: string="";
    public abstract total():number;
    public abstract print():void;
}