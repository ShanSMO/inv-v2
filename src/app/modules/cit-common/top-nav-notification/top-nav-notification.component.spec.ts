import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavNotificationComponent } from './top-nav-notification.component';

describe('TopNavNotificationComponent', () => {
  let component: TopNavNotificationComponent;
  let fixture: ComponentFixture<TopNavNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
