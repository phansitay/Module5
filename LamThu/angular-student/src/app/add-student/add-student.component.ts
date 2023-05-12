import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Student} from '../model/student';
import {StudentServiceService} from '../service/student-service.service';
import {Router} from '@angular/router';
import {Class} from '../model/class';
import {ClassServiceService} from '../service/class-service.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  class: Class[] = [];
  studentFormAdd: FormGroup;

  constructor(private studentService: StudentServiceService,
              private router: Router,
              private classService: ClassServiceService) {
    this.classService.getAllClass().subscribe(
      value => {
        this.class= value;
      },error => {
        alert("lỗi");
      }
    )

  }

  ngOnInit(): void {
    this.studentFormAdd = new FormGroup(
      {
        id: new FormControl(''),
        name: new FormControl(''),
        dayOfBirth: new FormControl(''),
        class: new FormControl(''),
        phone: new FormControl(''),
        address: new FormControl('')
      }
    )
  }


  submitStudent() {
    console.log(this.studentFormAdd.value);
    if (this.studentFormAdd.valid) {
      this.studentService.save(this.studentFormAdd.value).subscribe(
        value => {
          console.log(value);
          this.router.navigateByUrl("/student");
        },
        error => {
          console.log("Lỗi")
        }
      )
    }
  }
}
