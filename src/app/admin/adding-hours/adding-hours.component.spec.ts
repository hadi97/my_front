import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingHoursComponent } from './adding-hours.component';

describe('AddingHoursComponent', () => {
  let component: AddingHoursComponent;
  let fixture: ComponentFixture<AddingHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
