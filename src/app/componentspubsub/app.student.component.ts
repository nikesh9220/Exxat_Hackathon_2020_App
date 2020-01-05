import { Component, OnInit } from '@angular/core';
import { StudentsData } from '../models/app.data.constants';
import {CommunicationService} from './../utilitymodule/services/app.communication.service';
import { Student } from '../models/app.student.model';
@Component({
  selector: 'app-studentchild-component',
  templateUrl: './app.student.view.html'
})
export class StudentChildComponent implements OnInit {
  stds = StudentsData;
  filterStudents: Array<Student>;
  uName: string;
  constructor(private serv: CommunicationService) {
    this.uName = "";
    this.filterStudents = new Array<Student>();
  }

  // subscribe to the event from the service to get notify
  ngOnInit(): void  {
    this.serv.receiveData.subscribe(u => {
      this.uName = u;
    });
  }

  // read-only property to filter
  // get FilterStudents() : Array<Student> {
  //   this.filterStudents = new Array<Student>();
  //   if(this.uName.length > 0) {
  //     this.filterStudents = this.stds.filter((s,i) => {
  //       return s.UniversityName === this.uName;
  //     });
  //   } else {
  //     this.filterStudents = this.stds;
  //   }
  //   return  this.filterStudents;
  // }
}
