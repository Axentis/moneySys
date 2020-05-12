import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatCarteComponent } from './etat-carte.component';

describe('EtatCarteComponent', () => {
  let component: EtatCarteComponent;
  let fixture: ComponentFixture<EtatCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
