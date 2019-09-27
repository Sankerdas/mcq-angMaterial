import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnsListComponent } from './qns-list.component';

describe('QnsListComponent', () => {
  let component: QnsListComponent;
  let fixture: ComponentFixture<QnsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
