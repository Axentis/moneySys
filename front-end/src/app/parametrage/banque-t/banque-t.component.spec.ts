import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueTComponent } from './banque-t.component';

describe('BanqueTComponent', () => {
  let component: BanqueTComponent;
  let fixture: ComponentFixture<BanqueTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanqueTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanqueTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
