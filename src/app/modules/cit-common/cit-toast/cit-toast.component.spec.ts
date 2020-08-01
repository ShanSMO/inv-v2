import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitToastComponent } from './cit-toast.component';

describe('CitToastComponent', () => {
  let component: CitToastComponent;
  let fixture: ComponentFixture<CitToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
