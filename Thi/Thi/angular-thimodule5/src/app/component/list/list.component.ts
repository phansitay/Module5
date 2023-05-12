import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {Router} from "@angular/router";
import {ProductServicerService} from "../../service/product-servicer.service";
import {Subscription} from "rxjs";
import {Category} from "../model/category";
import {CategoryServiceService} from "../../service/category-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categorys: Category[];
  private subsctiption: Subscription;
  id: string;
  name:string;
  p=1;
  date: string
  constructor(private router: Router,
              private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.subsctiption= this.categoryService.getAll().subscribe(
      value => {
        this.categorys= value;
      },error => {
        alert("lỗi không hiển thị");
      }
    )
  }

  showId(id: string, nameCustomer: string,ngay: string) {
    this.id=id;
    this.name=nameCustomer;
    this.date=ngay;
    console.log("id"+id)
  }
}
