import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialdemo',
  templateUrl: './materialdemo.component.html',
  styleUrls: ['./materialdemo.component.css']
})
export class MaterialdemoComponent implements OnInit {

  public products : any = [];
  constructor() { }

  ngOnInit(): void {
    fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(data=>{
      this.products = data;
    })
  }

}
