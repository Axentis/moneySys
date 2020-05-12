import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCarteComponent } from './info-carte.component';

describe('InfoCarteComponent', () => {
  let component: InfoCarteComponent;
  let fixture: ComponentFixture<InfoCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
