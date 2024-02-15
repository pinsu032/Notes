import { ProductTemplate } from "../templates/ProductTemplates";
export class ProductComponent extends ProductTemplate{
    name = "Samsung TV";
    price = 34300.33;
    qty = 2;
    categoryName = "Electronics";
    total(){
         return this.qty * this.price;
    }
    print(){
        console.log(`Name=${this,this.name}\nPrice=${this.price}\nqty=${this.qty}\nCatName=${this.categoryName}\nTotal=${this.total()}`)
    }
}