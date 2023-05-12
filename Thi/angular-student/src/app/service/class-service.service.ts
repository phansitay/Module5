import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';
import {Class} from '../model/class';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {
  private URL_API="http://localhost:3000/class";

  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  getAllClass(): Observable <Class[]> {
    return this.httpClient.get<Class[]>(this.URL_API);
  }
}
