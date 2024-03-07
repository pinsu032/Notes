import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public messageFromParent:string = "";
 @Output() public childComponentClick:EventEmitter<string> = new EventEmitter<string>();
 @Output() public childComponentChange:EventEmitter<any> = new EventEmitter<any>();
  public msg:string = 'Hello ! From Child';
  constructor() { }

  ngOnInit(): void {
  }
  public buttonClick(){
    this.childComponentClick.emit(this.msg);
  }

  public sendProduct(){
    this.childComponentChange.emit({Name:'Samsung TV' , Price:56000.43});
  }

}
