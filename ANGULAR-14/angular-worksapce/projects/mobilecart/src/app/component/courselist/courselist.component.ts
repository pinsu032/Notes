import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
  exportAs : 'courselist'
})
export class CourselistComponent implements OnInit {

  public courses :any [] = [
    {id:1,name:"HTML"},
    {id:2,name:"CSS"},
    {id:3,name:"JavaScript"},
    {id:4,name:"Angular"}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  course!:any[];
  public show:boolean = false;
 @Input() public name : string = '';

 public changeCourse(name:string){
    console.log(name);
    this.show = true;
    this.course = [];
    for(let i =0 ; i<this.courses.length;i++){
      if(this.courses[i].name == name){
        this.course.push(this.courses[i]);
      }
    }
    console.log(this.course);
  }

}
