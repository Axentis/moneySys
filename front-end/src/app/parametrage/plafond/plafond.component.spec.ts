import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlafondComponent } from './plafond.component';

describe('PlafondComponent', () => {
  let component: PlafondComponent;
  let fixture: ComponentFixture<PlafondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlafondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlafondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
