import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VillaComponent} from "./villa/villa.component";
import {HouseComponent} from "./house/house.component";
import {FuramaComponent} from "./furama/furama.component";
import {RoomComponent} from "./room/room.component";
import {CustomerComponent} from "./customer/customer.component";
import {ContractComponent} from "./contract/contract.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";


// @ts-ignore
const routes: Routes = [
  {path: 'villa',component:VillaComponent},
  {path: 'house',component:HouseComponent},
  {path: 'furama',component:FuramaComponent},
  {path: 'room',component:RoomComponent},
  {path: 'customer',component:CustomerComponent},
  {path: 'contract',component:ContractComponent},
  {path: 'add-customer',component:AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
