import { Student } from './../../models/app.student.model';
import { filter, catchError, finalize } from 'rxjs/operators';
import { HttpService } from './app.http.service';
import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';

@Injectable()
export class PaginationService{

    private studentSubject = new BehaviorSubject<Student[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    students: Array<Student>;
    constructor(private serv: HttpService) {
        this.students = new Array<Student>();
    }
}
