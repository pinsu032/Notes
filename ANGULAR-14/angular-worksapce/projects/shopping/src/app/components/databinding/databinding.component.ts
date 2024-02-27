import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public products : any = {};
  public count : number =1;

  public loadProduct(url:string){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.products = data;
    })
  }
  
  constructor() { }
  ngOnInit(): void {
    this.loadProduct("https://fakestoreapi.com/products/1");
  }

  public nextClick(){
    this.count++;
    this.loadProduct(`https://fakestoreapi.com/products/${this.count}`)
  }
  public prevClick(){
    this.count--;
    this.loadProduct(`https://fakestoreapi.com/products/${this.count}`)
  }

}
