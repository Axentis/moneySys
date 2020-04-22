import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteTComponent } from './compte-t.component';

describe('CompteTComponent', () => {
  let component: CompteTComponent;
  let fixture: ComponentFixture<CompteTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
