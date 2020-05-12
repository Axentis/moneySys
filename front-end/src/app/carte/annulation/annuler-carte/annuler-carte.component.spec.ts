import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulerCarteComponent } from './annuler-carte.component';

describe('AnnulerCarteComponent', () => {
  let component: AnnulerCarteComponent;
  let fixture: ComponentFixture<AnnulerCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnulerCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulerCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
