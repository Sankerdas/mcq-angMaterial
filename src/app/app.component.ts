import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'mcq-angMaterial';
  isLogin: boolean;
  usrName: string;
  amdName: string;
  constructor( private dataService: DataService, private localStorageServ: LocalStorageService) { }



  logOut() {
    this.localStorageServ.clear();
  }

  ngOnInit() {

  }
}
