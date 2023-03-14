import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VillaComponent } from './service-package/villa/villa.component';
import { HeaderComponent } from './main-package/header/header.component';
import { FooterComponent } from './main-package/footer/footer.component';
import { HouseComponent } from './service-package/house/house.component';
import { RoomComponent } from './service-package/room/room.component';
import { CustomerComponent } from './customer-package/customer/customer.component';
import { ContractComponent } from './contract-package/contract/contract.component';
import { AddServiceComponent } from './service-package/add-service/add-service.component';
import { AddCustomerComponent } from './customer-package/add-customer/add-customer.component';
import { AddContractComponent } from './contract-package/add-contract/add-contract.component';
import { UpdateServiceComponent } from './service-package/update-service/update-service.component';
import { HomeComponent } from './main-package/home/home.component';
import { DetailServiceComponent } from './service-package/detail-service/detail-service.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditCustomerComponent } from './customer-package/edit-customer/edit-customer.component';
import { EditContractComponent } from './contract-package/edit-contract/edit-contract.component';
import { DeleteCustomerComponent } from './customer-package/delete-customer/delete-customer.component';
import { CustomerTypeComponent } from './customer-package/customer-type/customer-type.component';

@NgModule({
  declarations: [
    AppComponent,
    VillaComponent,
    HeaderComponent,
    FooterComponent,
    HouseComponent,
    RoomComponent,
    CustomerComponent,
    ContractComponent,
    AddServiceComponent,
    AddCustomerComponent,
    AddContractComponent,
    UpdateServiceComponent,
    HomeComponent,
    DetailServiceComponent,
    EditCustomerComponent,
    EditContractComponent,
    DeleteCustomerComponent,
    CustomerTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
