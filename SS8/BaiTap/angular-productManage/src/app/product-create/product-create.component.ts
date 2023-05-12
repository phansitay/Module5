import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl()
      }
    )
  }

  submit() {
    if (this.productForm.valid){
      this.productService.save(this.productForm.value).subscribe(
        value => {
          console.log(value);
          this.router.navigateByUrl("/productList");
        },
        error => {
          console.log("Lỗi")
        }
      )
    }


  }
}
