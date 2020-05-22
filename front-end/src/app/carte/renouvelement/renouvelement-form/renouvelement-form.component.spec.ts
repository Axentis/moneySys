import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenouvelementFormComponent } from './renouvelement-form.component';

describe('RenouvelementFormComponent', () => {
  let component: RenouvelementFormComponent;
  let fixture: ComponentFixture<RenouvelementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenouvelementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenouvelementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
