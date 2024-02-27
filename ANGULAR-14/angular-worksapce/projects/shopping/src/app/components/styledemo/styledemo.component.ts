import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  public insertClick(e:any,msg:string){
    document.write(`
      Button Id : ${e.target.id} <br>
      Name : ${e.target.name} <br>
      Class : ${e.target.className} <br>
      X Position : ${e.clientX} <br>
      Ctrl Key : ${e.ctrlKey} <br>
      Msg : ${msg} 
    `)
  }

}
