import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargementFormComponent } from './rechargement-form.component';

describe('RechargementFormComponent', () => {
  let component: RechargementFormComponent;
  let fixture: ComponentFixture<RechargementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
