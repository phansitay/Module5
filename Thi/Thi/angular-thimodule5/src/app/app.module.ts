import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ListComponent } from './component/list/list.component';
import {HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './component/add-product/add-product/add-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteProductComponent } from './component/delete-product/delete-product/delete-product.component';
import { HomeComponent } from './component/add-product/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    AddProductComponent,
    DeleteProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
