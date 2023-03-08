import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerServicceService} from "../../service/customer-servicce.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @Output('newCustomer') onCreate =  new EventEmitter<Customer>();
  customer:Customer |undefined
  // constructor() { }
  constructor(private _customerService:CustomerServicceService) {
  }
  ngOnInit(): void {
  }

  addCustomer(nameCustomer: string, dayOfBirth: string, sex: string, cmnd: string, phone: string, email: string, typeCustomer: string, address: string) {
    this._customerService={nameCustomer: nameCustomer,dayOfBirth: dayOfBirth,sex: sex,cmnd: cmnd,phone: phone,email: email,typeCustomer: typeCustomer, address: address}
    console.log(this.customer)
    this.onCreate.emit(this.customer);
  }
}
