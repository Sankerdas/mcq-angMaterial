import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-qns-list',
  templateUrl: './qns-list.component.html',
  styleUrls: ['./qns-list.component.css']
})
export class QnsListComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  qnList: any;

  fetchQns() {
    this.dataservice.getData().pipe(
      map(changes => {
        return changes.map( c => ({ key: c.payload.key, ...c.payload.val() }) ); // getting key and value
      })
    ).subscribe(data => {
      this.qnList = data;
      console.log(data);
    });
  }

  deleteQns(id) {
    const delcon = confirm(' Do you want to delete this quesion ');
    if (delcon) {
        this.dataservice.deleteData(id);
        this.dataservice.openSnackBar('Question Deleted ', 'Done');
    } else {
      console.log('delete canceled');
    }
  }

  ngOnInit() {
    this.fetchQns();
  }

}
