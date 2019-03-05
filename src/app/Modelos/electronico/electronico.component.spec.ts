import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicoComponent } from './electronico.component';

describe('ElectronicoComponent', () => {
  let component: ElectronicoComponent;
  let fixture: ComponentFixture<ElectronicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
