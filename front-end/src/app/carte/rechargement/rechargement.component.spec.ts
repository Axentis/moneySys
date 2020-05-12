import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargementComponent } from './rechargement.component';

describe('RechargementComponent', () => {
  let component: RechargementComponent;
  let fixture: ComponentFixture<RechargementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
