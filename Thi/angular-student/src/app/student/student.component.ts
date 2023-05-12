import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';
import {StudentServiceService} from '../service/student-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Class} from '../model/class';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[]| undefined;
  private subsctiption: Subscription;
  constructor(private studentService: StudentServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.subsctiption= this.studentService.getAll().subscribe(
          value => {
                  this.students= value;
              },error => {
          alert("lỗi");
      }
    )

  }

}
