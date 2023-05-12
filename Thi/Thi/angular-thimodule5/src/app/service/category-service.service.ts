import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../component/model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private URL_API="http://localhost:3000/category";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable <Category[]> {
    return this.httpClient.get<Category[]>(this.URL_API);
  }
  save(category: Category): Observable <Category>{
    // @ts-ignore
    return this.httpClient.post<Category>(this.URL_API,category);
  }
  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(this.URL_API+'/'+id);
  }
  deleteById(id: string): Observable<any> {
    return this.httpClient.delete(this.URL_API+'/'+id);
  }

}
