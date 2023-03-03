import { Component, OnInit } from '@angular/core';
import {Service} from "../model/service";

@Component({
  selector: 'app-villa',
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.css']
})
export class VillaComponent implements OnInit {

  villas: Service[] =[
    {name: "Dịch vụ thuê villa",area: 200,price: 20000,peopleOfNumber: 50,rentalType: "Tháng",standard: "Phòng vip",amenities: "sạch đẹp",poolArea: 5000,numberOfFloors: 60},
    {name: "Dịch vụ thuê villa",area: 10,price: 20000,peopleOfNumber: 50,rentalType: "Năm",standard: "Phòng sạch đẹp",amenities: "sạch đẹp",poolArea: 5000,numberOfFloors: 60},
    {name: "Dịch vụ thuê villa",area: 23200,price: 20000,peopleOfNumber: 50,rentalType: "ngày",standard: "Phòng xấu quá",amenities: "sạch đẹp",poolArea: 5000,numberOfFloors: 60},
    {name: "Dịch vụ thuê villa",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "Năm",standard: "Phòng cũng oke",amenities: "sạch đẹp",poolArea: 5000,numberOfFloors: 60},
    {name: "Dịch vụ thuê villa",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "ngày",standard: "Phòng xấu cực kì",amenities: "sạch đẹp",poolArea: 5000,numberOfFloors: 60},
    {name: "Dịch vụ thuê villa",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "Năm",standard: "Phòng vip quá đi mất",amenities: "sạch đẹp",poolArea: 5000,numberOfFloors: 60},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
