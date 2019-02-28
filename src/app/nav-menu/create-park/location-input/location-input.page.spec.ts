import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInputPage } from './location-input.page';

describe('LocationInputPage', () => {
  let component: LocationInputPage;
  let fixture: ComponentFixture<LocationInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
