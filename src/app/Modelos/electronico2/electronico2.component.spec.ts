import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronico2Component } from './electronico2.component';

describe('Electronico2Component', () => {
  let component: Electronico2Component;
  let fixture: ComponentFixture<Electronico2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electronico2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electronico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
