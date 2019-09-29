import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.css']
})
export class QuizMainComponent implements OnInit {

  constructor( private dataservice: DataService ) { }

  qzList: any;

  fetchQz() {
    this.dataservice.getData().pipe(
      map(changes => {
        return changes.map(c => ( { key: c.payload.key, ...c.payload.val() } ));
      }) ).subscribe(res => ( this.qzList = res ) );
  }

  ngOnInit() {
    this.fetchQz();
  }

}
