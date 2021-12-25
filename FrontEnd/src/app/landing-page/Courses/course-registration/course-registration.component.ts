import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent implements OnInit {
  
  title = "REGISTRATION"
  submitted: boolean = false;

  CourseReg = {
    courseId: '',
    courseTitle: '',
    name: '',
    email: '',
    phoneno: '',
    employeeStatus: '',
    graduation: '',
    comment: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

}
