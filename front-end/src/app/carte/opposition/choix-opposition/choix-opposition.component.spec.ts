import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixOppositionComponent } from './choix-opposition.component';

describe('ChoixOppositionComponent', () => {
  let component: ChoixOppositionComponent;
  let fixture: ComponentFixture<ChoixOppositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixOppositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixOppositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
