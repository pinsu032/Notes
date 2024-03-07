import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivevalidation',
  templateUrl: './reactivevalidation.component.html',
  styleUrls: ['./reactivevalidation.component.css']
})
export class ReactivevalidationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public register = this.fb.group({
    Name : this.fb.control('',[Validators.required,Validators.minLength(4)]),
    Mobile : this.fb.control('',[Validators.required,Validators.pattern(/\+91\d{10}/)])
  })

  get Name(){
    return this.register.get("Name") as FormControl;
  }

  get Mobile(){
    return this.register.get("Mobile") as FormControl;
  }

  ngOnInit(): void {
  }

}
