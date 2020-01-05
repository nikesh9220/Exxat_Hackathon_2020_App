import { Component, OnInit } from '@angular/core';
// import FormGroup, FormControl and Validators for
// 1. Group all editable elements in FormGroup as collection of FormControls
// 2. Each editable element is FormControl and link with FormGrou using
// the formControlName attribute (same as 'name' attribute of HTML element)
// The FormControl map itself with the 'Model-class' property
// 3. Validators are the validation rules
// e.g. reqired(), requiredTrue(), email(), pattren(), minLength(), masLength()
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Student } from '../models/app.student.model';
import { Courses, Universities } from '../models/app.constants';
import { StudentLogic } from '../models/app.student.logic';
import { CustomValidator } from './../customvalidator/app.custom.validator';




@Component({
   selector: 'app-studentform-component',
   templateUrl: 'app.studentform.component.view.html'
})
export class StudentFormComponent implements OnInit {

  student: Student;
  students: Array<Student>;
  private logic: StudentLogic;
  // load data from Courses and Universities in the public variables
  courses = Courses;
  universities =  Universities;
  tableColumHeaders: Array<string>;
  frmStudent: FormGroup;
  constructor() {
    //this.student = new Student(0, '', '', '', '');
    this.students = new Array<Student>();
    this.logic = new StudentLogic();
    this.tableColumHeaders = new Array<string>();

    // create FormGroup object by mapping model class with it
    // this.frmStudent = new FormGroup({
    //    StudentRowId: new FormControl(this.student.StudentRowId,
    //      Validators.compose([
    //        Validators.required,
    //        Validators.pattern('[0-9]+'),
    //        Validators.minLength(2),
    //        Validators.maxLength(8),
    //        CustomValidator.CheckEven
    //      ])),
    //    StudentId: new FormControl(this.student.StudentId),
    //    StudentName: new FormControl(this.student.StudentName),
    //    CourseName: new FormControl(this.student.CourseName),
    //    UniversityName: new FormControl(this.student.UniversityName)
    // });


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
    //this.student = new Student(0, '', '', '', '');
  }
  save(): void {
    this.student = this.frmStudent.value;
    this.students = this.logic.addStudent(this.student);

  }
  getSelectedStudent(std: Student): void {
    this.student = Object.assign({}, std);
  }
}
