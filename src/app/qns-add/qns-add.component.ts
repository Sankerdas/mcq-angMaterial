import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-qns-add',
  templateUrl: './qns-add.component.html',
  styleUrls: ['./qns-add.component.css']
})
export class QnsAddComponent implements OnInit {
  constructor(public dataService: DataService, private snackBar: MatSnackBar) { }

  insForm = this.dataService.qnsForm;

  ins() {
    this.dataService.insData(this.insForm.value);
    this.insForm.reset();
    this.openSnackBar('Questions Inserted Successfully', 'close');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  ngOnInit() {
  }

}


// import {Component} from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';

// /**
//  * @title Basic snack-bar
//  */
// @Component({
//   selector: 'snack-bar-overview-example',
//   templateUrl: 'snack-bar-overview-example.html',
//   styleUrls: ['snack-bar-overview-example.css'],
// })
// export class SnackBarOverviewExample {
//   constructor(private _snackBar: MatSnackBar) {}

//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action, {
//       duration: 2000,
//     });
//   }
// }

