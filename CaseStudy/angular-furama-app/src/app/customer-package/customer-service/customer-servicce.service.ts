import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerServicceService {
  private _customers: Customer[]=[
    {
      id: "kh-0001",
      nameCustomer: "Võ nguyễn phát",
      dayOfBirth: "12-02-2002",
      sex: "Nam",
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: {
        id: 1,
        name: 'Diamond'
      },
      address: "quảng nam"
    },
    { id: "kh-0002",
      nameCustomer: "Trần văn tuyên",
      dayOfBirth: "12-02-2002",
      sex: "Nam",
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: {
        id: 2,
        name: 'Platinium'
      },
      address: "quảng nam"
    },
    { id: "kh-0003",
      nameCustomer: "Lê văn lợi",
      dayOfBirth: "12-02-2002",
      sex: "Nam",
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: {
        id: 3,
        name: 'Gold'
      },
      address: "quảng nam"
    },
    { id: "kh-0004",
      nameCustomer: "Trần quang minh",
      dayOfBirth: "12-02-2002",
      sex: "Nam",
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: {
        id: 4,
        name: 'Silver'
      },
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
  getCustomerById(id: string){
    for (let i=0; i<this._customers.length;i++){
      if (this._customers[i].id===id){
        return this._customers[i];
      }
    }
  }

  editCustomer(id: string, customer: Customer){
    for (let i=0; i<this._customers.length;i++){
      if (this._customers[i].id===id){
        this._customers[i]=customer;
      }
    }
  }
  deleteCustomer(id: string){
    this._customers=this._customers.filter(customer =>
    {
      return customer.id !== id;
    })
  }
}
