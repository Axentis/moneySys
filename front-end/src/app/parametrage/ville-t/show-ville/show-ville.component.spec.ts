import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVilleComponent } from './show-ville.component';

describe('ShowVilleComponent', () => {
  let component: ShowVilleComponent;
  let fixture: ComponentFixture<ShowVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
