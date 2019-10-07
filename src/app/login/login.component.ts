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

  usrLogin() {
    const chk = this.usrList;
    const inpt = this.usrForm.value;
    const getData = chk.filter(dt => dt.adm === inpt.adm && dt.pswd === inpt.pswd ); // cheching login using filter method
    if (getData.length > 0) {
      console.log(getData[0].key);
      this.localStorageServ.store('mcqzUser', getData[0].key);
    } else {
      console.log('faild');
    }

  }

  ngOnInit() {
    this.fetchUser();
  }

}
