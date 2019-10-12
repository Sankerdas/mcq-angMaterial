import { Injectable} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(public formBuilder: FormBuilder, public fireDb: AngularFireDatabase, private snackBar: MatSnackBar,
              private localStorageServ: LocalStorageService, public localStore: LocalStorageService,
              private router: Router ) { }


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
    name: ['', Validators.required ],
    email: ['', Validators.required ],
    pswd: ['', Validators.required ]
  });

  currentAdminSubject = new BehaviorSubject(this.localStore.retrieve('mcqzadmname'));
  // BehaviorSubject just like observable dynamically change value

  public get currentAdminValue() {
    return this.currentAdminSubject;
  }



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

  getAdmin() {
    return this.fireDb.list('mcqzAdmin').snapshotChanges();
  }

  insUser(data) {
    this.fireDb.list('user').push(data);
    console.log('inserted successfully');
  }

  getUser(): Observable<any[]> {
    return this.fireDb.list('user').snapshotChanges();
  }

  usrLogin(data) {
    const chk = data;
    const inpt = this.usrForm.value;
    const getData = chk.filter(dt => dt.email === inpt.email && dt.pswd === inpt.pswd ); // cheching login using filter method
    if (getData.length > 0) {
      console.log(getData[0].key);
      this.localStorageServ.store('mcqzusrkey', getData[0].key);
      this.localStorageServ.store('mcqzusrname', getData[0].name);
      this.currentAdminSubject.next(getData[0].name);
    } else {
      this.openSnackBar('User name or Password not matching', 'Retry');
    }

  }

  deleteUser(key) {
    this.fireDb.list('user').remove(key);
  }


// common functions

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  doRedirect(url) {
    this.router.navigate([url]);
  }

}
