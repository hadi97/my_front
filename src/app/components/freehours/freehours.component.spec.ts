import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreehoursComponent } from './freehours.component';

describe('FreehoursComponent', () => {
  let component: FreehoursComponent;
  let fixture: ComponentFixture<FreehoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreehoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreehoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
