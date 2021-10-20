import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongActingInsulinDetailsComponent } from './long-acting-insulin-details.component';

describe('LongActingInsulinDetailsComponent', () => {
  let component: LongActingInsulinDetailsComponent;
  let fixture: ComponentFixture<LongActingInsulinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongActingInsulinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongActingInsulinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
