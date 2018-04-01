import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalEdittableComponent } from './final-edittable.component';

describe('FinalEdittableComponent', () => {
  let component: FinalEdittableComponent;
  let fixture: ComponentFixture<FinalEdittableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalEdittableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalEdittableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
