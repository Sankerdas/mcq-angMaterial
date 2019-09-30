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
  crt = 0;
  wrg = 0;

  tRun = false;
  showQz = false;
  seconds = 0;
  minutes = 0;


  qzStart = () => {
    this.tRun = true;
    this.showQz = true;
    this.callTime();
  }

  fetchQz() {
    this.dataservice.getData().pipe(
      map(changes => {
        return changes.map(c => ( { key: c.payload.key, ...c.payload.val() } ));
      }) ).subscribe(res => ( this.qzList = res ) );
  }

  checkAns(ans) {
    if (ans) {
      this.crt ++;
    } else {
      this.wrg ++;
    }
  }

  finishQz() {
    this.tRun = false;
    console.log('correct ' + this.crt + ' wrong ' + this.wrg );
  }

  addTime = () => {
    if (this.tRun) {
    this.seconds++;
    if (this.seconds > 60 ) {
      this.minutes++;
      this.seconds = 0;
      }
    this.callTime();
  }
  }

  callTime = () => {
    setTimeout(() => { this.addTime(); }, 1000);
  }




  ngOnInit() {
    this.fetchQz();
  }

}
