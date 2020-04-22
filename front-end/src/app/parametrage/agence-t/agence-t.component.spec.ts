import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceTComponent } from './agence-t.component';

describe('AgenceTComponent', () => {
  let component: AgenceTComponent;
  let fixture: ComponentFixture<AgenceTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
