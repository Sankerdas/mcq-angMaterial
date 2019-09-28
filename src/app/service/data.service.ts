import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public formBuilder: FormBuilder, public fireDb: AngularFireDatabase) { }

  qnsForm: FormGroup = this.formBuilder.group({
    qns: ['', Validators.required],
    opnA: ['', Validators.required],
    opnB: ['', Validators.required],
    opnC: ['', Validators.required],
    opnD: ['', Validators.required],
    ans: ['', Validators.required]
  });

  insData(data) {
    this.fireDb.list('qns').push(data);
    console.log('inserted successfully');
  }

  getData(): Observable<any[]> {
    return this.fireDb.list('qns').valueChanges();
  }

}
