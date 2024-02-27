import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  public categories : string[]=[];
  public products:any[]=[];
  public cartItems:any[]=[];
  public cartCount:number=0;

  public getCartCount(){
    this.cartCount = this.cartItems.length;
  }

  public loadProducts(url:any){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.products=data;
    })
  }

  public loadCategories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(response=>response.json())
    .then(data=>{
      data.unshift("ALL");
      this.categories=data;
    })
  }
  constructor() { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts("https://fakestoreapi.com/products/");
  }

  public categoryChange(e:any){
    if(e.target.value=="ALL"){
      this.loadProducts("https://fakestoreapi.com/products/");
    }
    else{
      console.log(`https://fakestoreapi.com/products/categories/${e.target.value}`);
      this.loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }

  public addToCart(id:number){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.cartItems.push(data);
      alert(data.title + "Added to Cart")
      this.getCartCount();
    })
  }

}
