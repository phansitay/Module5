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

  // @ts-ignore
  save(product: Product): Observable <Product>{
    // @ts-ignore
    return this.httpClient.post<Product>(this.API_URL,product);
  }
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL+'/'+id);
  }
  // @ts-ignore
  update(id: number,product: Product): Observable<Product>{
    return this.httpClient.put<Product>(this.API_URL+'/'+id,product);
    }
  // delete(id: number){
  //   this._products=this._products.filter(product =>
  //   {
  //     return product.id !== id;
  //   })
  // }

}
