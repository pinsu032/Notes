import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forpropertydemo',
  templateUrl: './forpropertydemo.component.html',
  styleUrls: ['./forpropertydemo.component.css']
})
export class ForpropertydemoComponent implements OnInit {

  public products:any[]=[
    {name:"Samsung TV" , price: 66000.44},
    {name: "Nike Casuals", price: 3400.00}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public submitProduct(obj:any){
    this.products.push(obj);
    alert("product added to list")
  }

  public deleteClick(i:number){
    let flag = confirm("Are you sure? Want to Delete?")
    if(flag){
    this.products.splice(i,1);
  }
  }

  public trackChanges(i:number){
    return i;
  }

}
