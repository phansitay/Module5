import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionayPageComponent } from './dictionay-page/dictionay-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionayPageComponent,
    DictionaryDetailComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
