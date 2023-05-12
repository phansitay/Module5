import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../component/model/category";
import {Observable} from "rxjs";
import {Product} from "../component/model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductServicerService {
  private URL_API="http://localhost:3000/product";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable <Product[]> {
    return this.httpClient.get<Product[]>(this.URL_API);
  }
  // create(object: any) {
  //   return this.httpClient.post(this.URL_API +"students/", object);
  // }
  //
  // finById(id: string): Observable<Student> {
  //   return this.httpClient.get<Student>(this.API_URL +"students/" + id);
  // }
  //
  // deleteById(id: string): Observable<any> {
  //   return this.httpClient.delete(this.API_URL +"students/" + id);
  // }
  //
  // update(id: string, object: any): Observable<any> {
  //   return this.httpClient.put(this.API_URL +"students/" + id, object);
  // }


}
