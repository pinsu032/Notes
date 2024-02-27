import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  public menu:any=[
    {Category: "Electronics" , Products:["Samsung TV","Mobile"]},
    {Category: "Footwear" , Products:["Nike Casuals","Lee Boot"]}
  ];
  public topics:any=[
    {Title: "HTML",Definition:"It is markup language"},
    {Title: "CSS",Definition:"It configures styles for HTML"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
