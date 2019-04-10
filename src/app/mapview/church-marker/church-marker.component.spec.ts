import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchMarkerComponent } from './church-marker.component';

describe('ChurchMarkerComponent', () => {
  let component: ChurchMarkerComponent;
  let fixture: ComponentFixture<ChurchMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
