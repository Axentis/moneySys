import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifCarteFormComponent } from './tarif-carte-form.component';

describe('TarifCarteFormComponent', () => {
  let component: TarifCarteFormComponent;
  let fixture: ComponentFixture<TarifCarteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifCarteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifCarteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
