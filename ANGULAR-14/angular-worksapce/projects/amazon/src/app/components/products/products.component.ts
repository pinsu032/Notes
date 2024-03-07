import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public categoryName:string|null = null;
  public products : any[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.categoryName =  this.route.snapshot.paramMap.get("category");
   fetch(`http://fakestoreapi.com/products/category/${this.categoryName}`)
   .then(response=>response.json())
   .then(data=>{
    this.products=data;
   })
  }

}
