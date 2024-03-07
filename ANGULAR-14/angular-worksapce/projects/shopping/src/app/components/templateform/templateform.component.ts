import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  public isCityInValid:boolean = false;
  public isEvenInvalid:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public verifyCity(city:string){
    if(city=="-1"){
      this.isCityInValid = true;
    }else{
      this.isCityInValid = false;
    }
  }

  public  verifyEven(n:number){
    if(n % 2 == 0 ){
      this.isEvenInvalid = false;
    }
    else{
      this.isEvenInvalid = true;
    }
  }

}
