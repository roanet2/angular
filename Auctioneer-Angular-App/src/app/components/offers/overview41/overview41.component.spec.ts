import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview41Component } from './overview41.component';

describe('Overview41Component', () => {
  let component: Overview41Component;
  let fixture: ComponentFixture<Overview41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Overview41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
