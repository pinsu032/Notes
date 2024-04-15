import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-infy',
  templateUrl: './infy.component.html',
  styleUrls: ['./infy.component.css']
})
export class InfyComponent implements OnInit {

 public myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      selectedDate: new FormControl(new Date())
    });
  }

}
