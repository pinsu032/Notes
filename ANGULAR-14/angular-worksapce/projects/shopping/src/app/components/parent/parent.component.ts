import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public messageToChild:string = "";
 public Product:any = {};
  public messageFromChild:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public sendMessage(){
    this.messageToChild = "Hello ! from parent"
  }

  public getMessage(e:string){
    this.messageFromChild = e;
  }

  public getProduct(e:any){
    this.Product = e;
  }

}
