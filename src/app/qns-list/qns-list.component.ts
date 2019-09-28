import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-qns-list',
  templateUrl: './qns-list.component.html',
  styleUrls: ['./qns-list.component.css']
})
export class QnsListComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  qnList: any;

  fetchQns() {
    this.dataservice.getData().subscribe( res => {
      this.qnList = res;
    });
  }

  ngOnInit() {
    this.fetchQns();
  }

}
