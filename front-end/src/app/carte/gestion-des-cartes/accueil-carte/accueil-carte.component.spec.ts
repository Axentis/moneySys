import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCarteComponent } from './accueil-carte.component';

describe('AccueilCarteComponent', () => {
  let component: AccueilCarteComponent;
  let fixture: ComponentFixture<AccueilCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
