import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuramaComponent } from './furama/furama.component';
import { VillaComponent } from './villa/villa.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HouseComponent } from './house/house.component';
import { RoomComponent } from './room/room.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FuramaComponent,
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
    UpdateCustomerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
