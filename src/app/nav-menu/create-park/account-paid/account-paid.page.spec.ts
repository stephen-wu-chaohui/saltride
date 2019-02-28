import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPaidPage } from './account-paid.page';

describe('AccountPaidPage', () => {
  let component: AccountPaidPage;
  let fixture: ComponentFixture<AccountPaidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPaidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
