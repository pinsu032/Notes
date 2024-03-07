import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormGroupName, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  public register = this.fb.group({
    Name : this.fb.control(''),
    Age : this.fb.control(0),
    Address : this.fb.group({
      City : this.fb.control(''),
      Pin : this.fb.control('')
    }),
    Photos: this.fb.array([this.fb.control('')])
  })
 
  get City(){
    return this.register.controls.Address.controls.City;
  }

  get Photos(){
    return this.register.get('Photos') as FormArray;
  }

  public submitClicked(object:any){
    alert(JSON.stringify(object))
  }

  public updateClikced(){
    this.register.patchValue({
      Age : 26,
      Address : {
        Pin : '110006'
      }
    })
  }

  public addPhoto(){
    this.Photos.push(this.fb.control(''));
  }

  public removePhoto(i:number){
    this.Photos.removeAt(i);
  }

}
