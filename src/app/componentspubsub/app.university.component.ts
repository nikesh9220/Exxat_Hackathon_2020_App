import { Component, OnInit } from '@angular/core';
import { UniversitiesData } from '../models/app.data.constants';
import {CommunicationService} from './../utilitymodule/services/app.communication.service';

@Component({
  selector: 'app-university-component',
  templateUrl: './app.university.view.html'
})
export class UniversityComponent implements OnInit {
  unvs = UniversitiesData;
  // inject the service
  constructor(private serv: CommunicationService) {
   }

  ngOnInit(): void { }
}
