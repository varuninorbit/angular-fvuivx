import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MarksService {

  constructor(private http:HttpClient) { }

  getMarks() {
    //return this.http.get('http://manage.qpw/tp-api');
  }

}