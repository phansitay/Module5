import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerServicceService} from "../customer-service/customer-servicce.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerTypeServiceService} from "../customer-service/customer-type-service.service";
import {CustomerType} from "../../model/customerType";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer:Customer |undefined
  @Input() customerTypes: CustomerType[];
  // constructor() { }
  customerFormAdd: FormGroup;
  constructor(private _customerService:CustomerServicceService,
              private router: Router,
              private customerTypeServiceService: CustomerTypeServiceService) {
  }
  ngOnInit(): void {
    this.customerFormAdd = new FormGroup(
      {
        id: new FormControl('',[Validators.required,Validators.pattern(/^kh-\d{4}$/)]),
        nameCustomer: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^[a-z]$/)]),
        dayOfBirth: new FormControl('',[Validators.required]),
        sex: new FormControl(),
        cmnd: new FormControl('',[Validators.pattern(/^\d{9}$/)]),
        phone: new FormControl('',[Validators.pattern(/^090\d{7}$/)]),
        email: new FormControl('',[Validators.email]),
        typeCustomer: new FormControl(),
        address: new FormControl()
      }
    ),
      this.customerTypes=this.customerTypeServiceService.customerType;
  }

  submitCustomer() {
    this._customerService.save(this.customerFormAdd.value);
    console.log(this.customerFormAdd.value);
    this.router.navigateByUrl('/customer');
  }
}
