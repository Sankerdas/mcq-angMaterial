import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private dataservice: DataService, private localStorageServ: LocalStorageService) { }
  usrForm = this.dataservice.usrForm;
  usrList: any;

  fetchUser() {
    this.dataservice.getUser().pipe(
      map(changes => {
        return changes.map( c => ({ key: c.payload.key, ...c.payload.val() }) ); // getting key and value
      })
    ).subscribe(data => {
      this.usrList = data;
    });
  }

  usrLogin(data) {
    this.dataservice.usrLogin(data);
  }

  ngOnInit() {
    this.fetchUser();
  }

}
