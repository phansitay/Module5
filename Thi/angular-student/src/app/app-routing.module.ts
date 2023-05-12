import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {AddStudentComponent} from './add-student/add-student.component';


const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'add-student', component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
