import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[]=[
    {nameCustomer: "Võ nguyễn phát",
      dayOfBirth: "12-02-2002",
      sex: true,
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: "thân thiết",
      address: "quảng nam"
    },
    {nameCustomer: "Trần văn tuyên",
      dayOfBirth: "12-02-2002",
      sex: true,
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: "thân thiết",
      address: "quảng nam"
    },
    {nameCustomer: "Lê văn lợi",
      dayOfBirth: "12-02-2002",
      sex: true,
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: "thân thiết",
      address: "quảng nam"
    },
    {nameCustomer: "Trần quang minh",
      dayOfBirth: "12-02-2002",
      sex: true,
      cmnd: "09923923923923",
      phone: "0999888777",
      email: "vonguehd@hsssss",
      typeCustomer: "thân thiết",
      address: "quảng nam"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
