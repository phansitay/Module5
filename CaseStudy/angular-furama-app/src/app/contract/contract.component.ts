import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts:Contract[]=[
    {
      contractId:1,
      dateBegin:"12-12-2022",
      dateEnd:"23-12-2022",
      advanceAmount:200000,
      totalAmount:200000000
    },
    {
      contractId:2,
      dateBegin:"12-12-2022",
      dateEnd:"23-12-2022",
      advanceAmount:200000,
      totalAmount:200000000
    },
    {
      contractId:3,
      dateBegin:"12-12-2022",
      dateEnd:"23-12-2022",
      advanceAmount:200000,
      totalAmount:200000000
    },
    {
      contractId:4,
      dateBegin:"12-12-2022",
      dateEnd:"23-12-2022",
      advanceAmount:200000,
      totalAmount:200000000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
