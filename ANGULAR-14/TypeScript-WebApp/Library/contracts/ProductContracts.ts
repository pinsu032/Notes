//module
export default interface ProductContract{
    name:string;
    price:number;
    qty:number;
    total():number;
    print():void;
}

export interface CategoryContract{
    categoryName:string;
}