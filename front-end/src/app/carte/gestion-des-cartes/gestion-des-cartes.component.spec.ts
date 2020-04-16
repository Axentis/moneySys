import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesCartesComponent } from './gestion-des-cartes.component';

describe('GestionDesCartesComponent', () => {
  let component: GestionDesCartesComponent;
  let fixture: ComponentFixture<GestionDesCartesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesCartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
