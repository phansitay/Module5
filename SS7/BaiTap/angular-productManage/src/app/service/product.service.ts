import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL="http://localhost:3000/product";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable <Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  save(product: FormGroup){
    // @ts-ignore
    this._products.push(product);
  }
  // getProductById(id: number){
  //   for (let i=0;i<this._products.length;i++){
  //     if (this._products[i].id == id){
  //       return this._products[i];
  //     }
  //   }
  // }
  // update(id: number,product: Product){
  //   for (let i=0;i<this._products.length;i++){
  //     if (this._products[i].id == id){
  //       this._products[i]=product;
  //     }
  //   }
  // }
  // delete(id: number){
  //   this._products=this._products.filter(product =>
  //   {
  //     return product.id !== id;
  //   })
  // }

}
