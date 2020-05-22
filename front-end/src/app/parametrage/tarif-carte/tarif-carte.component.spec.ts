import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifCarteComponent } from './tarif-carte.component';

describe('TarifCarteComponent', () => {
  let component: TarifCarteComponent;
  let fixture: ComponentFixture<TarifCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
