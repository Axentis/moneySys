import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingPorteurComponent } from './handling-porteur.component';

describe('HandlingPorteurComponent', () => {
  let component: HandlingPorteurComponent;
  let fixture: ComponentFixture<HandlingPorteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlingPorteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingPorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
