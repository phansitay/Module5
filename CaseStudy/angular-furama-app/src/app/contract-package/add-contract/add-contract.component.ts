import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractServiceService} from "../../../service/contract-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  contracts: Contract | undefined;
  contractFormCreate: FormGroup;
  constructor(private contractService: ContractServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.contractFormCreate = new FormGroup(
      {
        contractId: new FormControl('',[Validators.required,Validators.pattern(/^hd-\d{3}$/)]),
        dateBegin: new FormControl(),
        dateEnd: new FormControl(),
        advanceAmount: new FormControl('',[Validators.min(0)]),
        totalAmount: new FormControl()
      }
    )
  }

  submitContract() {
    this.contractService.save(this.contractFormCreate.value);
    console.log(this.contractFormCreate.value);
    this.router.navigateByUrl("/contract");
  }
}
