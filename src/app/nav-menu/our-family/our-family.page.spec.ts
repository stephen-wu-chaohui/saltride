import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFamilyPage } from './our-family.page';

describe('OurFamilyPage', () => {
  let component: OurFamilyPage;
  let fixture: ComponentFixture<OurFamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurFamilyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
