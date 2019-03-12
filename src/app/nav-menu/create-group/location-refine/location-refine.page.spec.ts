import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRefinePage } from './location-refine.page';

describe('LocationRefinePage', () => {
  let component: LocationRefinePage;
  let fixture: ComponentFixture<LocationRefinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationRefinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationRefinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
