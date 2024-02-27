import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  registerClick(data:any){
    alert(JSON.stringify(data))
  }
  constructor() { }

  ngOnInit(): void {
  }

}
