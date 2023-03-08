import { Component, OnInit } from '@angular/core';
import {Register} from "../model/register";
import {RegisterService} from "../../service/register.service";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  registers: Register[] | undefined;

  constructor(private router: Router
    ,private _registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.registers=this._registerService.registers;
  }

}
