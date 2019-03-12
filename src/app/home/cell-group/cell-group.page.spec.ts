import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellGroupPage } from './cell-group.page';

describe('CellGroupPage', () => {
  let component: CellGroupPage;
  let fixture: ComponentFixture<CellGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
