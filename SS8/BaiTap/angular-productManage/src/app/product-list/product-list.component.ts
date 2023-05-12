import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] | undefined;
  product: Product ;
  private subscription: Subscription |undefined;
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.productService.getAll().subscribe(
      value => {
        this.products = value;
      },error => {
        console.log("Thất bại")
      },() => {

      }
    );
  }

  showDetail(item: Product) {
    this.product=item;
  }
}
