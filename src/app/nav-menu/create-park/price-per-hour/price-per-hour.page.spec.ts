import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePerHourPage } from './price-per-hour.page';

describe('PricePerHourPage', () => {
  let component: PricePerHourPage;
  let fixture: ComponentFixture<PricePerHourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePerHourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePerHourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
