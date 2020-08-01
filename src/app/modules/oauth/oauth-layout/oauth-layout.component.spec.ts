import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthLayoutComponent } from './oauth-layout.component';

describe('OauthLayoutComponent', () => {
  let component: OauthLayoutComponent;
  let fixture: ComponentFixture<OauthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
