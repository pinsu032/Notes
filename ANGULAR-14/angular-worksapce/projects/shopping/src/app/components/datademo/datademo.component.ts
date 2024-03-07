import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../../services/apidata.service';

@Component({
  selector: 'app-datademo',
  templateUrl: './datademo.component.html',
  styleUrls: ['./datademo.component.css']
})
export class DatademoComponent implements OnInit {

  public categories:string[] = [];
  public products:any[] = [];
  constructor(private apidata: ApidataService) { }

  ngOnInit(): void {
    this.apidata.getCategories().subscribe(data=> this.categories=data);
    this.apidata.getProducts().subscribe(data => this.products = data);
  }

  public product:any={
    name: "Samsung TV",
    price:45000.30,
    mfd: new Date("2022-01-20")
  }

  public title = "wElocMe To TyPeScRipt";
  public cities:string[] = ["Chennai","Delhi","Hyd","Pune","Mumbai","Gaya"];

}
