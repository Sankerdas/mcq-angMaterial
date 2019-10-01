import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.css']
})
export class AdmLoginComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  admForm = this.dataservice.admForm;

  admLogin() {
    this.dataservice.adminLogin(this.admForm.value);
  }

  ngOnInit() {
  }

}
