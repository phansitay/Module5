import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: Product |undefined;
  productFormDelete: FormGroup;
  private subscription: Subscription |undefined;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router
  ){
    // const id = this.activatedRoute.snapshot.params['index'];
    // console.log("index: " +id);
    // this.subscription= this.productService.getProductById(id).subscribe(
    //   value => {
    //     // @ts-ignore
    //     this.productDetail.id=value;
    //   }
    // );
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('index');
      if (id != null) {
        // @ts-ignore
        // tslint:disable-next-line:no-shadowed-variable
        this.productDetail = this.productService.getProductById(id).subscribe(next => {
          this.productDetail = next;
          console.log(id);
        });
      }
    }, error => {
    }, () => {
    });
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

  delete() {
  //   id = this.productDetail.id;
  //   console.log("id xoa là : "+id);
  //   this.productService.delete(this.productDetail.id);
    this.router.navigateByUrl("/productList");
  }
}
