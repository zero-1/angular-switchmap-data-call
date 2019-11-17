import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import {Observable} from 'rxjs';
import { switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  dataProvider1$: Observable<any>;
  dataProvider2: Array<any>;
  dataProvider3: Array<any>;

  ngOnInit() {

    this.dataProvider1$ = this.dataService.getPreData()
    .pipe(
      switchMap((val) => {
        console.log(val);
        return this.dataService.getData(val[0])
      })
    )
       
  }

}