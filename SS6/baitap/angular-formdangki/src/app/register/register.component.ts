import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Register} from "ts-node";
import validate = WebAssembly.validate;
import {RegisterService} from "../../service/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register?:Register;
  registerForm:FormGroup;
  constructor(private _registerService: RegisterService,
              private _router: Router) {

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('',[Validators.email]),
        password: new FormControl('',[Validators.minLength(6)]),
        confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
        country: new FormControl(),
        age: new FormControl('', [Validators.min(18)]),
        gender: new FormControl(),
        phone: new FormControl('', [Validators.pattern( /^\+84\d{9,10}$/)])
      },[this.comparePassword]
    )
  }

  comparePassword(form: any) {
    const password = form.controls.password.value;
    const confirmPassword = form.controls.confirmPassword.value;
    if (password === confirmPassword) {
      return null;
    }
    return {'not': true};
  }


  onSubmit() {
    console.log(this.registerForm.value)
    this._registerService.save(this.registerForm.value);
    this._router.navigateByUrl("/list");
  }
}
