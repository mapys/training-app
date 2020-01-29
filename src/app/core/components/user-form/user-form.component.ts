import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {
  @Output() formValue = new EventEmitter(); 
  form: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: [''],
      age: [''],
      activeUser: [''],
    });
  }

  listenToForm(){
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  submit(){
    this.formValue.emit(this.form.value);
    console.log(this.form.value);
    console.log(this.form.status);
    console.log("Value " + this.form.controls['firstName'].value);
    console.log("Error " + this.form.controls['firstName'].errors);
    console.log("Touched " + this.form.controls['firstName'].touched);
  }

  clear(){
    this.form.reset();
  }

}
