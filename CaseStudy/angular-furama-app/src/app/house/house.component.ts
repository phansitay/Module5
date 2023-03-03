import { Component, OnInit } from '@angular/core';
import {Service} from "../model/service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  houses: Service[] =[
    {name: "Dịch vụ thuê house",area: 200,price: 20000,peopleOfNumber: 50,rentalType: "Tháng",standard: "Phòng vip",amenities: "sạch đẹp",numberOfFloors: 60},
    {name: "Dịch vụ thuê house giá rẻ",area: 40,price: 20000,peopleOfNumber: 50,rentalType: "Năm",standard: "Phòng sạch đẹp",amenities: "sạch đẹp",numberOfFloors: 60},
    {name: "Dịch vụ thuê house giá đắt",area: 23200,price: 20000,peopleOfNumber: 50,rentalType: "ngày",standard: "Phòng xấu quá",amenities: "sạch đẹp",numberOfFloors: 60},
    {name: "Dịch vụ thuê house giá trung bình",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "Năm",standard: "Phòng cũng oke",amenities: "sạch đẹp",numberOfFloors: 60},
    {name: "Dịch vụ thuê house cùi bắp",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "ngày",standard: "Phòng xấu cực kì",amenities: "sạch đẹp",numberOfFloors: 60},
    {name: "Dịch vụ thuê house",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "Năm",standard: "Phòng vip quá đi mất",amenities: "sạch đẹp",numberOfFloors: 60},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
