import { Component, OnInit } from '@angular/core';
import {CustomerServicceService} from "../customer-service/customer-servicce.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerDelete: Customer;
  constructor(private customerService: CustomerServicceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    const id= this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.customerDelete=this.customerService.getCustomerById(id);
  }

  ngOnInit(): void {
    this.customerService.deleteCustomer(this.customerDelete.id);
    this.router.navigateByUrl("/customer");
  }

}
