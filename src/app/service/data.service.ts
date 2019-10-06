import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(public formBuilder: FormBuilder, public fireDb: AngularFireDatabase, private snackBar: MatSnackBar) { }

  qnsForm: FormGroup = this.formBuilder.group({
    qns: ['', Validators.required],
    opnA: ['', Validators.required],
    opnB: ['', Validators.required],
    opnC: ['', Validators.required],
    opnD: ['', Validators.required],
    ans: ['', Validators.required]
  });

  admForm: FormGroup = this.formBuilder.group({
    adm: ['', Validators.required ],
    pswd: ['', Validators.required ]
  });

  usrForm: FormGroup = this.formBuilder.group({
    usr: ['', Validators.required ],
    pswd: ['', Validators.required ]
  });

  insData(data) {
    this.fireDb.list('mcqzAdmin').push(data);
    console.log('inserted successfully');
  }

  getData(): Observable<any[]> {
    return this.fireDb.list('qns').snapshotChanges();
  }

  getAdmin() {
    return this.fireDb.list('mcqzAdmin').snapshotChanges();
  }

  deleteData(key) {
    this.fireDb.list('qns').remove(key);
  }

  userLogin(data) {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
