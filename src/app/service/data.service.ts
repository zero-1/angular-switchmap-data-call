import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, take, first } from 'rxjs/operators';
@Injectable()
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

  getPreData(): Observable<any[]> {
    return of([1,2,3]);
  }


  getData(id): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(
        map((value) => {
          return value;
        })
      )
  }

}