import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargementAfficheComponent } from './rechargement-affiche.component';

describe('RechargementAfficheComponent', () => {
  let component: RechargementAfficheComponent;
  let fixture: ComponentFixture<RechargementAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargementAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargementAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
