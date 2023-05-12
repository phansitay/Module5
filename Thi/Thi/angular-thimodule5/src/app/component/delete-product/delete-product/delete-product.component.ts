import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {CategoryServiceService} from "../../../service/category-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productDelete: Category;
  constructor(private categoryService: CategoryServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        // @ts-ignore
        // tslint:disable-next-line:no-shadowed-variable
        this.productDelete = this.categoryService.getCategoryById(id).subscribe(next => {
          this.productDelete = next;
          console.log("1111"+id);
          console.log("2222"+this.productDelete.id)
          this.categoryService.deleteById(this.productDelete.id).subscribe(next => {
            this.router.navigateByUrl('/list');
            alert("Xóa thành công")
            // this.toast.warning('Xóa thành công', 'Thông báo')
          });
        });
      }
      return this.productDelete;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
    // console.log("333"+this.productDelete.id)
    // this.categoryService.deleteById(this.productDelete.id).subscribe(next => {
    //     this.router.navigateByUrl('/list');
    //   // this.toast.warning('Xóa thành công', 'Thông báo')
    // });
    // this.categoryService.deleteById(this.productDelete.id);

  }

}
