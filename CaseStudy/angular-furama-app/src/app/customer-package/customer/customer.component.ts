import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerServicceService} from "../customer-service/customer-servicce.service";
import {CustomerType} from "../../model/customerType";
import {CustomerTypeServiceService} from "../customer-service/customer-type-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] |undefined
  customerType: CustomerType[];
  formModalDelete: FormGroup;
  idDelete: string;
  nameDelete: string;
  constructor(private _customerService:CustomerServicceService,
              private _customerTypeService: CustomerTypeServiceService,
              private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.customers=this._customerService.customers;
    this.customerType=this._customerTypeService.customerType;
  }

  getNewCustomer(value: Customer) {
    this._customerService.save(value);
  }

  showId(id: string,name: string) {
    this.idDelete=id;
    this.nameDelete=name;
  }
}
