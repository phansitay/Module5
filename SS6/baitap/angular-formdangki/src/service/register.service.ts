import { Injectable } from '@angular/core';
import {Register} from "../app/model/register";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _registers: Register[]=[
    {
      email: "phansitau@gmail.com",
      password: "123456",
      country: "Việt Nam",
      age: 30,
      gender: 1,
      phone: "+84363009009"
    },
    {
      email: "phansitau@gmail.com",
      password: "123456",
      country: "Việt Nam",
      age: 30,
      gender: 1,
      phone: "+84363009009"
    },
    {
      email: "phansitau@gmail.com",
      password: "123456",
      country: "Việt Nam",
      age: 30,
      gender: 1,
      phone: "+84363009009"
    },
  ]
  constructor() { }

  save(register: FormGroup){
    this._registers.push(register);
  }

  get registers(): Register[] {
    return this._registers;
  }

  set registers(value: Register[]) {
    this._registers = value;
  }
}
