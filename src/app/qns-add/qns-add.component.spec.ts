import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnsAddComponent } from './qns-add.component';

describe('QnsAddComponent', () => {
  let component: QnsAddComponent;
  let fixture: ComponentFixture<QnsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
