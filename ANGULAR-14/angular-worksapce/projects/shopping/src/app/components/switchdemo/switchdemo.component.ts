import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {

  constructor() { }
  public viewName:string="A";
  ngOnInit(): void {
  }
  
  public displayView(e:any){
      this.viewName=e.target.name;
  }

}
