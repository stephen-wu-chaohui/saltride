import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubscriptionsPage } from './my-subscriptions.page';

describe('MySubscriptionsPage', () => {
  let component: MySubscriptionsPage;
  let fixture: ComponentFixture<MySubscriptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySubscriptionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubscriptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
