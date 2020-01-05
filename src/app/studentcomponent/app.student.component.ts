import { Component, OnInit } from '@angular/core';
import { Student } from './../models/app.student.model';
import { Courses, Universities } from '../models/app.constants';
import { StudentLogic } from '../models/app.student.logic';

@Component({
   selector: 'app-student-component',
   templateUrl: 'app.student.component.view.html'
})
export class StudentComponent implements OnInit {

  student: Student;
  students: Array<Student>;
  private logic: StudentLogic;
  // load data from Courses and Universities in the public variables
  courses = Courses;
  universities =  Universities;
  tableColumHeaders: Array<string>;
  constructor() {
    this.students = new Array<Student>();
    this.logic = new StudentLogic();
    this.tableColumHeaders = new Array<string>();
  }

  // OnInit is lifecycle interface for component
  // this method will be implicitely invoked immediately
  // after constructor
  ngOnInit(): void {
     for (let h in this.student) {
       this.tableColumHeaders.push(h);
     }
     this.students = this.logic.getStudents();
  }
  clear(): void {
  }
  save(): void {
    this.students = this.logic.addStudent(this.student);
    console.log(JSON.stringify(this.students));
  }
  getSelectedStudent(std: Student): void {
    this.student = Object.assign({}, std);
  }
}
