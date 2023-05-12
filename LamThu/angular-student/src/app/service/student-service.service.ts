import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private URL_API="http://localhost:3000/student";

  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  getAll(): Observable <Student[]> {
    return this.httpClient.get<Student[]>(this.URL_API);
  }

  // @ts-ignore
  save(student: Student): Observable <Student>{
    // @ts-ignore
    return this.httpClient.post<Student>(this.URL_API,student);
  }

  }
