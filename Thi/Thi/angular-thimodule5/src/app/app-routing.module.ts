import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import {AddProductComponent} from "./component/add-product/add-product/add-product.component";
import {DeleteProductComponent} from "./component/delete-product/delete-product/delete-product.component";
import {HomeComponent} from "./component/add-product/home/home.component";


const routes: Routes = [
  {path: 'list',component: ListComponent},
  {path: 'add',component: AddProductComponent},
  {path: 'delete/:id',component:DeleteProductComponent},
  {path: 'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
