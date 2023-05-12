import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryServiceService} from "../../../service/category-service.service";
import {Router} from "@angular/router";
// import {Product} from "../../model/product";
import {ProductServicerService} from "../../../service/product-servicer.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product[]=[];
  productFormAdd: FormGroup;

  constructor(private categoryService: CategoryServiceService,
              private router: Router,
              private productService: ProductServicerService) {
    this.productService.getAll().subscribe(
      value => {
        this.product= value;
      },error => {
        alert("lỗi");
      }
    )
  }

  ngOnInit(): void {
    this.productFormAdd = new FormGroup(
      {
        id: new FormControl('',[Validators.required,Validators.pattern(/^LH-\d{4}$/)]),
        product: new FormControl('',Validators.required),
        quantity: new FormControl('', [Validators.required,Validators.min(0)]),
        dateBegin: new FormControl('',[Validators.required]),
        dateBody: new FormControl('',[Validators.required]),
        dateEnd: new FormControl('',Validators.required)
      }
    )
  }

  submitProduct() {
    console.log(this.productFormAdd.value);
    if (this.productFormAdd.valid) {
      this.categoryService.save(this.productFormAdd.value).subscribe(
        value => {
          console.log(value);
          alert("Thêm thành công")
          this.router.navigateByUrl("/list");
          // this._toasts.warning("Warning", "This is a warning message");
        },
        error => {
          console.log("Lỗi")
        }
      )
    }
  }
}
