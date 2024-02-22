import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview2Component } from './overview2.component';

// @ts-ignore
describe('Overview2Component', () => {
  let component: Overview2Component;
  let fixture: ComponentFixture<Overview2Component>;

  // @ts-ignore
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Overview2Component ]
    })
    .compileComponents();
  }));

  // @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(Overview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
