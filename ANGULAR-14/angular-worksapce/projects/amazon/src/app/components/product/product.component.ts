import { Component, OnInit } from '@angular/core';
import { IshopapiService } from '../../services/ishopapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public Products:any = [];
    public electronicsCount:number = 0;
    public jewellaryCount : number = 0;
    public mensCount : number = 0;
    public womensCount : number = 0;
    public title : string = "";
  public loadProducts(){
    this.title = "All Products";
    this.service.loadProducts().subscribe(data =>{
      this.Products = data;
    })
  }
  constructor(private service: IshopapiService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  public categoryChange(e:string){
    console.log("Category Name:"+e);
    if(e=="Copy"){
      this.title = "Copy Products";
    }else{
      this.title = "Pen Products";
    }

    fetch(`http://localhost:8080/admin/fetch/${e}`)
    .then(res => res.json())
    .then(data =>{
      this.Products = data;
    })
    
  }

  public filterProduct(e:string){
    //console.log(`http://fakestoreapi.com/products/category/${e}`);
    //this.loadProducts(`http://fakestoreapi.com/products/category/${e}`);
  }

}
