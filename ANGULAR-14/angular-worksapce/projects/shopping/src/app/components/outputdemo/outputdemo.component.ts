import { Component, OnInit, Input , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-outputdemo',
  templateUrl: './outputdemo.component.html',
  styleUrls: ['./outputdemo.component.css']
})
export class OutputdemoComponent implements OnInit , OnChanges {

  @Input() public userName:any;
  public previousValue:any;
  public currentValue:any
  public msg:any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for(var property in changes){
      let change = changes[property];
      this.currentValue = change.currentValue;
      this.previousValue = change.previousValue;
    }
    if(this.currentValue==this.previousValue){
      this.msg="No Change detected";
    }else{
      this.msg="Change detected";
    }
  }

  ngOnInit(): void {
  }

}
