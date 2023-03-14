import { Injectable } from '@angular/core';
import {CustomerType} from "../../model/customerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeServiceService {
  private _customerType: CustomerType[] = [
    {
      id: 1,
      name: 'Diamond'
    },
    {
      id: 2,
      name: 'Platinium'
    },
    {
      id: 3,
      name: 'Gold'
    },
    {
      id: 4,
      name: 'Silver'
    },
    {
      id: 5,
      name: 'Member'
    },

  ]
  constructor() { }


  get customerType(): CustomerType[] {
    return this._customerType;
  }

  set customerType(value: CustomerType[]) {
    this._customerType = value;
  }
}
