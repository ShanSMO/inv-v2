import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitAdderComponent } from './unit-adder.component';

describe('UnitAdderComponent', () => {
  let component: UnitAdderComponent;
  let fixture: ComponentFixture<UnitAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
