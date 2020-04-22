import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePorteurComponent } from './home-porteur.component';

describe('HomePorteurComponent', () => {
  let component: HomePorteurComponent;
  let fixture: ComponentFixture<HomePorteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePorteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
