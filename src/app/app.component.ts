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
  logger: any;
  constructor( private dataService: DataService, private localStorageServ: LocalStorageService) { }



   statt() {
    this.dataService.currentAdminValue.subscribe( res => ( this.logger = res ));
    console.log(this.logger);
   }

  logOut() {
    this.localStorageServ.clear();
    this.dataService.currentAdminSubject.next('');
    console.log(this.logger);
    this.dataService.openSnackBar('Logout success', 'close');
    this.dataService.doRedirect('quiz');
  }

  ngOnInit() {
    this.statt();
  }

}
