import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail2Component } from './detail2.component';

// @ts-ignore
describe('Detail2Component', () => {
  let component: Detail2Component;
  let fixture: ComponentFixture<Detail2Component>;

  // @ts-ignore
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail2Component ]
    })
    .compileComponents();
  }));

  // @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(Detail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
