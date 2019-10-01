import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private dataservice: DataService) { }
  usrForm = this.dataservice.usrForm;

  usrLogin() {
    this.dataservice.userLogin(this.usrForm.value);
  }

  ngOnInit() {
  }

}
