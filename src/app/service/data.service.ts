import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public formBuilder: FormBuilder) { }

  qnsForm: FormGroup = this.formBuilder.group({
    qns: ['', Validators.required],
    opnA: ['', Validators.required],
    opnB: ['', Validators.required],
    opnC: ['', Validators.required],
    opnD: ['', Validators.required],
    and: ['', Validators.required]
  });

}
