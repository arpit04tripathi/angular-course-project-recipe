import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBs4Component } from './default-bs4.component';

describe('DefaultBs4Component', () => {
  let component: DefaultBs4Component;
  let fixture: ComponentFixture<DefaultBs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultBs4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultBs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
