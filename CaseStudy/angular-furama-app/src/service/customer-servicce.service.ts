import { Injectable } from '@angular/core';
import {Customer} from "../app/model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerServicceService {
  private _customers: Customer[]=[
    {nameCustomer: "Võ nguyễn phát",
      dayOfBirth: "12-02-2002",
      sex: "Nam",
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: "thân thiết",
      address: "quảng nam"
    },
    {nameCustomer: "Trần văn tuyên",
      dayOfBirth: "12-02-2002",
      sex: "Nam",
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: "thân thiết",
      address: "quảng nam"
    },
    {nameCustomer: "Lê văn lợi",
      dayOfBirth: "12-02-2002",
      sex: "Nam",
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: "thân thiết",
      address: "quảng nam"
    },
    {nameCustomer: "Trần quang minh",
      dayOfBirth: "12-02-2002",
      sex: "Nam",
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: "thân thiết",
      address: "quảng nam"
    }
  ]
  constructor() { }

  get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    this._customers = value;
  }

  save(customer:Customer){
    this._customers.push(customer);
  }
}
