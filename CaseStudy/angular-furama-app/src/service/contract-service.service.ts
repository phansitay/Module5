import { Injectable } from '@angular/core';
import {Contract} from "../app/model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
  private _contracts:Contract[]=[
    {
      contractId: "hd-001",
      dateBegin:"12-12-2022",
      dateEnd:"23-12-2022",
      advanceAmount:200000,
      totalAmount:200000000
    },
    {
      contractId:"hd-002",
      dateBegin:"12-12-2022",
      dateEnd:"23-12-2022",
      advanceAmount:200000,
      totalAmount:200000000
    },
    {
      contractId:"hd-003",
      dateBegin:"12-12-2022",
      dateEnd:"23-12-2022",
      advanceAmount:200000,
      totalAmount:200000000
    },
    {
      contractId:"hd-004",
      dateBegin:"12-12-2022",
      dateEnd:"23-12-2022",
      advanceAmount:200000,
      totalAmount:200000000
    }
  ]
  constructor() { }


  get contracts(): Contract[] {
    return this._contracts;
  }

  set contracts(value: Contract[]) {
    this._contracts = value;
  }
  save(contract: Contract){
    this._contracts.push(contract);
  }
  getContractById(id: string){
    for (let i=0;i<this._contracts.length;i++){
      if (this._contracts[i]===id){
        return this._contracts[i];
      }
    }
  }
  updateContract(id: string, contract: Contract){
    for (let i=0;i<this._contracts.length;i++)
    {
      if (this._contracts[i].contractId===id){
        this._contracts[i] =contract;
      }
    }
  }
}
