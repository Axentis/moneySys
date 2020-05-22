import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenouvelementAfficheComponent } from './renouvelement-affiche.component';

describe('RenouvelementAfficheComponent', () => {
  let component: RenouvelementAfficheComponent;
  let fixture: ComponentFixture<RenouvelementAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenouvelementAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenouvelementAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
