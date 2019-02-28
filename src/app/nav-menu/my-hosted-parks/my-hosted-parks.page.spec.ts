import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHostedParksPage } from './my-hosted-parks.page';

describe('MyHostedParksPage', () => {
  let component: MyHostedParksPage;
  let fixture: ComponentFixture<MyHostedParksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHostedParksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHostedParksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
