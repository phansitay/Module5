import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productDetailEdit: Product
  productFormEdit: FormGroup;
  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log("id : " +id);
    // this.productDetailEdit = this.productService.getProductById(id);
  }

  ngOnInit(): void {
    this.productFormEdit = new FormGroup(
      {
        id: new FormControl(this.productDetailEdit.id),
        name: new FormControl(this.productDetailEdit.name),
        price: new FormControl(this.productDetailEdit.price),
        description: new FormControl(this.productDetailEdit.description)
      }
    )

  }

  submitEdit() {
    // id=this.productDetailEdit.id;
    //   this.productService.update(this.productDetailEdit.id,this.productFormEdit.value);
      // console.log("aaa : "+id)
      this.router.navigateByUrl("/productList");
  }
}
