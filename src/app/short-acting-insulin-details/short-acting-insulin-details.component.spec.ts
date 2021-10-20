import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortActingInsulinDetailsComponent } from './short-acting-insulin-details.component';

describe('ShortActingInsulinDetailsComponent', () => {
  let component: ShortActingInsulinDetailsComponent;
  let fixture: ComponentFixture<ShortActingInsulinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortActingInsulinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortActingInsulinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
