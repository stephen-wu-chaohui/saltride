import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFinishPage } from './signup-finish.page';

describe('SignupFinishPage', () => {
  let component: SignupFinishPage;
  let fixture: ComponentFixture<SignupFinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFinishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
