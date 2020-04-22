import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleTComponent } from './ville-t.component';

describe('VilleTComponent', () => {
  let component: VilleTComponent;
  let fixture: ComponentFixture<VilleTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
