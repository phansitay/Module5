import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup(
      {
        email:  new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.min(6),Validators.max(30)]),
        confirmPassword: new FormControl,
        country: new FormControl(),
        age: new FormControl(),
        gender: new FormControl(),
        phone: new FormControl()
      }
    )
  }

  ngOnInit(): void {
  }

  // registerUser() {
  //   console.log(this.registerForm);
  //   this.re
  // }
}
