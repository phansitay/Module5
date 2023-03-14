import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VillaComponent} from "./service-package/villa/villa.component";
import {HouseComponent} from "./service-package/house/house.component";
import {RoomComponent} from "./service-package/room/room.component";
import {CustomerComponent} from "./customer-package/customer/customer.component";
import {ContractComponent} from "./contract-package/contract/contract.component";
import {AddCustomerComponent} from "./customer-package/add-customer/add-customer.component";
import {HomeComponent} from "./main-package/home/home.component";
import {AddContractComponent} from "./contract-package/add-contract/add-contract.component";
import {EditCustomerComponent} from "./customer-package/edit-customer/edit-customer.component";
import {EditContractComponent} from "./contract-package/edit-contract/edit-contract.component";
import {DeleteCustomerComponent} from "./customer-package/delete-customer/delete-customer.component";


// @ts-ignore
const routes: Routes = [
  {path: 'villa',component:VillaComponent},
  {path: 'house',component:HouseComponent},
  {path: 'home',component:HomeComponent},
  {path: 'room',component:RoomComponent},
  {path: 'customer',component:CustomerComponent},
  {path: 'contract',component:ContractComponent},
  {path: 'add-customer',component:AddCustomerComponent},
  {path: 'add-contract', component: AddContractComponent},
  {path: 'editCustomer/:id',component: EditCustomerComponent},
  {path: 'editContract/:id',component: EditContractComponent},
  {path: 'deleteCustomer/:id',component:DeleteCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
