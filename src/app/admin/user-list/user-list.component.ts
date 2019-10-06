import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor( private dataService: DataService ) { }
  usrList: any;

  fetchUser() {
    this.dataService.getUser().pipe(
      map(changes => {
        return changes.map( c => ({ key: c.payload.key, ...c.payload.val() }) ); // getting key and value
      })
    ).subscribe(data => {
      this.usrList = data;
    });
  }


  removeUser(id) {
    const delcon = confirm(' Do you want to delete this User ');
    if (delcon) {
        this.dataService.deleteUser(id);
        this.dataService.openSnackBar('User Deleted ', 'Done');
    }
  }

  ngOnInit() {
    this.fetchUser();
  }

}
