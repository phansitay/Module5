import { Component, OnInit } from '@angular/core';
import {Register} from "ts-node";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // registers: Register[]=[];
  constructor() {
    // this.registers.push({email:"asdashd", password:"12345",conf} )
  }



  ngOnInit(): void {
  }

}
