import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlafondFormComponent } from './plafond-form.component';

describe('PlafondFormComponent', () => {
  let component: PlafondFormComponent;
  let fixture: ComponentFixture<PlafondFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlafondFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlafondFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
