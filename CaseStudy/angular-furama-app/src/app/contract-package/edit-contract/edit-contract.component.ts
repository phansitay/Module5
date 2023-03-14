import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ContractServiceService} from "../../../service/contract-service.service";

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent implements OnInit {
  contractEdit: Contract;
  contractFormEdit: FormGroup;

  constructor(private router: Router,
              private contractService: ContractServiceService,
              private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.contractEdit=this.contractService.getContractById(id);
  }

  ngOnInit(): void {
    this.contractFormEdit = new FormGroup(
      {
        contractId: new FormControl(this.contractEdit.contractId),
        dateBegin: new FormControl(this.contractEdit.dateBegin),
        dateEnd: new FormControl(this.contractEdit.dateEnd),
        advanceAmount: new FormControl(this.contractEdit.advanceAmount),
        totalAmount: new FormControl(this.contractEdit.totalAmount)
      }
    )
  }

  submitEditContract() {
    this.contractService.updateContract(this.contractEdit.contractId,this.contractFormEdit.value);
  }
}
