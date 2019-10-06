import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private dataService: DataService ) { }

  usrFm = this.dataService.usrForm;

  addUser() {
    if (this.usrFm.valid) {
      this.dataService.insUser(this.usrFm.value);
      this.usrFm.reset();
      this.dataService.openSnackBar('User Inserted', 'Done');
    } else {
      console.log('NOT valid');
    }
  }


  ngOnInit() {
  }

}
