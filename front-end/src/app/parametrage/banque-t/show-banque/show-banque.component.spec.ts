import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBanqueComponent } from './show-banque.component';

describe('ShowBanqueComponent', () => {
  let component: ShowBanqueComponent;
  let fixture: ComponentFixture<ShowBanqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBanqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
