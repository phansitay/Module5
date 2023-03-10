import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: Product |undefined;
  productFormDelete: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router
  ){
    const id = this.activatedRoute.snapshot.params['index'];
    console.log("index: " +id);
    this.productDetail= this.productService.getProductById(id);
  }

  ngOnInit(): void {
    this.productFormDelete = new FormGroup(
      {id: new FormControl(this.productDetail.id),
        name: new FormControl(this.productDetail.name),
        price: new FormControl(this.productDetail.price),
        description: new FormControl(this.productDetail.description)
      }
    )

  }

  delete(id: number) {
    id = this.productDetail.id;
    console.log("id xoa là : "+id);
    this.productService.delete(id);
    this.router.navigateByUrl("/productList");
  }
}
