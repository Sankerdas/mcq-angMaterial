import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(public formBuilder: FormBuilder, public fireDb: AngularFireDatabase) { }

  mtchPwd: any;
  private admDet = [
    {
      adm: 'admin',
      pswd: 'admin@me'
    }
  ];

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
    this.fireDb.list('qns').push(data);
    console.log('inserted successfully');
  }

  getData(): Observable<any[]> {
    return this.fireDb.list('qns').snapshotChanges();
  }

  deleteData(key) {
    this.fireDb.list('qns').remove(key);
  }

  adminLogin(admData) {
    const ad = admData.adm;
    const ps = admData.pswd;
    if ( ad === this.admDet[0].adm && ps === this.admDet[0].pswd ) {
      console.log('success');
    } else {
      console.log('faild');
    }

      }


  userLogin(data) {
  }

}
