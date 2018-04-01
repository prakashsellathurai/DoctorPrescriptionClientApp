import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailEditComponent } from './patient-detail-edit.component';

describe('PatientDetailEditComponent', () => {
  let component: PatientDetailEditComponent;
  let fixture: ComponentFixture<PatientDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
