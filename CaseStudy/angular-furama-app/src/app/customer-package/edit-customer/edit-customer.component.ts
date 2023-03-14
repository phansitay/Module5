import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServicceService} from "../customer-service/customer-servicce.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeServiceService} from "../customer-service/customer-type-service.service";
import {CustomerType} from "../../model/customerType";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerEdit: Customer;
  customerFormEdit : FormGroup;
  @Input()customerTypes: CustomerType[];

  constructor( private customerService: CustomerServicceService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private customerTypeServiceService: CustomerTypeServiceService) {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log("id : " +id);
    this.customerEdit = this.customerService.getCustomerById(id);
    console.log(this.customerEdit.nameCustomer);
  }

  ngOnInit(): void {
    this.customerFormEdit = new FormGroup(
      {id: new FormControl(this.customerEdit.id),
        nameCustomer: new FormControl(this.customerEdit.nameCustomer,[Validators.required,Validators.minLength(8),Validators.pattern(/^[a-z]$/)]),
        dayOfBirth: new FormControl(this.customerEdit.dayOfBirth,[Validators.required]),
        sex: new FormControl(this.customerEdit.sex),
        cmnd: new FormControl(this.customerEdit.cmnd,[Validators.pattern(/^\d{9}$/)]),
        phone: new FormControl(this.customerEdit.phone,[Validators.pattern(/^090\d{7}$/)]),
        email: new FormControl(this.customerEdit.email,[Validators.email]),
        typeCustomer: new FormControl(this.customerEdit.typeCustomer.name),
        address: new FormControl(this.customerEdit.address)
      }
    ),
      this.customerTypes=this.customerTypeServiceService.customerType;
  }

  submitEditCustomer() {
    console.log("aaaa"+this.customerEdit.id);
    this.customerService.editCustomer(this.customerEdit.id,this.customerFormEdit.value);
    this.router.navigateByUrl('/customer');

  }
}
