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
              private localStorageServ: LocalStorageService, public localStore: LocalStorageService ) { }


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

  login: Observable<any[]>;

  public isLogged = new BehaviorSubject<boolean>(false);

  get checkLoggin() {
    return this.isLogged.asObservable();
  }

  checkLogin(): Observable<any[]> {
    return this.localStore.retrieve('mcqzusrname');
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
    } else {
      console.log('faild');
    }

  }


  deleteUser(key) {
    this.fireDb.list('user').remove(key);
  }




  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
