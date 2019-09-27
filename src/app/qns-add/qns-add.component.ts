import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-qns-add',
  templateUrl: './qns-add.component.html',
  styleUrls: ['./qns-add.component.css']
})
export class QnsAddComponent implements OnInit {
  constructor(public dataService: DataService) { }

  insForm = this.dataService.qnsForm;

  ins() {
    this.dataService.insData(this.insForm.value);
  }

  ngOnInit() {
  }

}
