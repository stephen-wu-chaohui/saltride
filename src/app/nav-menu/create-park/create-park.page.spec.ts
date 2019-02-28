import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParkPage } from './create-park.page';

describe('CreateParkPage', () => {
  let component: CreateParkPage;
  let fixture: ComponentFixture<CreateParkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateParkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
