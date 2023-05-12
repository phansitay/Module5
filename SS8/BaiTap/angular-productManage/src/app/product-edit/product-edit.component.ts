import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../model/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productDetailEdit: Product;
  productFormEdit: FormGroup;
  // private observable: Observable |undefined;
  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        // @ts-ignore
        // tslint:disable-next-line:no-shadowed-variable
        this.productDetailEdit = this.productService.getProductById(id).subscribe(next => {
          this.productDetailEdit = next;
          console.log(this.productDetailEdit);
        });
      }
    }, error => {
    }, () => {
    });
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
    this.productService.update(this.productDetailEdit.id, this.productFormEdit.value).subscribe(next => {
      this.router.navigateByUrl('/productList')
      alert('Update complete');
    });
  }
}
