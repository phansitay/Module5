import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractServiceService} from "../../../service/contract-service.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] | undefined;
  constructor(private _contractService: ContractServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.contracts=this._contractService.contracts;
  }

}
