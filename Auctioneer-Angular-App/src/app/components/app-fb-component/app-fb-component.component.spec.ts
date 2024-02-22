import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFbComponentComponent } from './app-fb-component.component';

describe('AppFbComponentComponent', () => {
  let component: AppFbComponentComponent;
  let fixture: ComponentFixture<AppFbComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFbComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
