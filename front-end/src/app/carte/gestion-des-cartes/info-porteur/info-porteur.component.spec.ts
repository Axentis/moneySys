import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPorteurComponent } from './info-porteur.component';

describe('InfoPorteurComponent', () => {
  let component: InfoPorteurComponent;
  let fixture: ComponentFixture<InfoPorteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPorteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
