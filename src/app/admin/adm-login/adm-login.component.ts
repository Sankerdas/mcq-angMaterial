import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.css']
})
export class AdmLoginComponent implements OnInit {

  constructor(private dataservice: DataService, private localStorageServ: LocalStorageService ) { }
  admForm = this.dataservice.admForm;
  adms: any;


  fetchAdmins() {
    this.dataservice.getAdmin().pipe(
      map(changes => {
        return changes.map( c => ({ key: c.payload.key, ...c.payload.val() }) ); // getting key and value
      })
    ).subscribe(data => {
      this.adms = data;
    });
  }

  admLogin() {
    const chk = this.adms;
    const inpt = this.admForm.value;
    const getData = chk.filter(dt => dt.adm === inpt.adm && dt.pswd === inpt.pswd ); // cheching login using filter method
    if (getData.length > 0) {
      console.log(getData[0].key);
      this.localStorageServ.store('mcqzAdm', getData[0].key);
    } else {
      console.log('faild');
    }

  }


  ngOnInit() {
    this.fetchAdmins();
  }

}
