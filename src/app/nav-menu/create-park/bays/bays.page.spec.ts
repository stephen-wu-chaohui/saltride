import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaysPage } from './bays.page';

describe('BaysPage', () => {
  let component: BaysPage;
  let fixture: ComponentFixture<BaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
