///<reference path="../templates/ProductTemplate.ts"/>
export namespace ProjectA{
    export namespace Components{
        export class ProductComponent extends ProjectA.Template.ProductTemplate{
            name:"Samsung TV";
            price: 45000.00;
            qty = 2;
            total(){
                return this.qty * this.price;
            }
            print(){
                console.log(`Name=${this.name}`);
            }
        }
    }
}