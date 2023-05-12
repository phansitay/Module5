import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent
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
