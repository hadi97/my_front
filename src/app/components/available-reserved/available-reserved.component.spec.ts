import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableReservedComponent } from './available-reserved.component';

describe('AvailableReservedComponent', () => {
  let component: AvailableReservedComponent;
  let fixture: ComponentFixture<AvailableReservedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableReservedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
