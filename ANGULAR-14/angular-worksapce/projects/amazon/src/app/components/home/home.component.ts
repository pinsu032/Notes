import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products:any[] = [];
  constructor() { }

  ngOnInit(): void {
    fetch("http://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>{
      this.products=data;
    })
  }

}
