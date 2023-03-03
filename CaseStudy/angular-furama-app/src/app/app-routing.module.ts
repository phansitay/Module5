import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VillaComponent} from "./villa/villa.component";
import {HouseComponent} from "./house/house.component";
import {FuramaComponent} from "./furama/furama.component";
import {RoomComponent} from "./room/room.component";


const routes: Routes = [
  {path: 'villa',component:VillaComponent},
  {path: 'house',component:HouseComponent},
  {path: 'furama',component:FuramaComponent},
  {path: 'room',component:RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
