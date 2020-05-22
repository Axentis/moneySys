import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppsitionParamFormComponent } from './oppsition-param-form.component';

describe('OppsitionParamFormComponent', () => {
  let component: OppsitionParamFormComponent;
  let fixture: ComponentFixture<OppsitionParamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppsitionParamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppsitionParamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
