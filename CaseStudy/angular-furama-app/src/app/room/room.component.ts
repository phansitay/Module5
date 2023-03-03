import { Component, OnInit } from '@angular/core';
import {Service} from "../model/service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Service[] =[
    {name: "Dịch vụ thuê villa",area: 200,price: 20000,peopleOfNumber: 50,rentalType: "Tháng",freeServiceIncluded: "có suối nước nóng"},
    {name: "Dịch vụ thuê villa",area: 10,price: 20000,peopleOfNumber: 50,rentalType: "Năm",freeServiceIncluded: "có suối nước nóng"},
    {name: "Dịch vụ thuê villa",area: 23200,price: 20000,peopleOfNumber: 50,rentalType: "ngày",freeServiceIncluded: "có suối nước nóng"},
    {name: "Dịch vụ thuê villa",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "Năm",freeServiceIncluded: "có suối nước lạnh"},
    {name: "Dịch vụ thuê villa",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "ngày",freeServiceIncluded: "chả có gì"},
    {name: "Dịch vụ thuê villa",area: 22300,price: 20000,peopleOfNumber: 50,rentalType: "Năm",freeServiceIncluded: "có suối nước nóng"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
