import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerServicceService} from "../../service/customer-servicce.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] |undefined
  constructor(private _customerService:CustomerServicceService) {
  }


  ngOnInit(): void {
    this.customers=this._customerService.customers;
  }

  getNewCustomer(value: Customer) {
    this._customerService.save(value);
  }
}
