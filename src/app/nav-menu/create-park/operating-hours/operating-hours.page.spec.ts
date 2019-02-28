import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingHoursPage } from './operating-hours.page';

describe('OperatingHoursPage', () => {
  let component: OperatingHoursPage;
  let fixture: ComponentFixture<OperatingHoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingHoursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingHoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
