import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public Products:any = [];
    public electronicsCount:number = 0;
    public jewellaryCount : number = 0;
    public mensCount : number = 0;
    public womensCount : number = 0;

  public loadProducts(url:string){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.Products = data;
      this.electronicsCount = data.filter(function(product:any){
        return product.category=='electronics'
      }).length;
      this.jewellaryCount = data.filter(function(product:any){
        return product.category=='jewelery'
      }).length;
      this.mensCount = data.filter(function(product:any){
        return product.category=="men's clothing"
      }).length;
      this.womensCount = data.filter(function(product:any){
        return product.category=="women's clothing"
      }).length;
    })
  }
  constructor() { }

  ngOnInit(): void {
    this.loadProducts(`http://fakestoreapi.com/products`);
  }

  public categoryChange(e:string){
    console.log(`http://fakestoreapi.com/products/category/${e}`);
    this.loadProducts(`http://fakestoreapi.com/products/category/${e}`);
  }

  public filterProduct(e:string){
    console.log(`http://fakestoreapi.com/products/category/${e}`);
    this.loadProducts(`http://fakestoreapi.com/products/category/${e}`);
  }

}
