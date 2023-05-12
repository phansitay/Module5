import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClassComponent } from './class/class.component';
import { StudentComponent } from './student/student.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddStudentComponent } from './add-student/add-student.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassComponent,
    StudentComponent,
    AddStudentComponent,
    EditStudentComponent
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
