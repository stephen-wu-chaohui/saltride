import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingModelPage } from './pricing-model.page';

describe('PricingModelPage', () => {
  let component: PricingModelPage;
  let fixture: ComponentFixture<PricingModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
