import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteurComponent } from './porteur.component';

describe('PorteurComponent', () => {
  let component: PorteurComponent;
  let fixture: ComponentFixture<PorteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
