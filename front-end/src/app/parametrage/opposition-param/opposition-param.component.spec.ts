import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppositionParamComponent } from './opposition-param.component';

describe('OppositionParamComponent', () => {
  let component: OppositionParamComponent;
  let fixture: ComponentFixture<OppositionParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppositionParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppositionParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
