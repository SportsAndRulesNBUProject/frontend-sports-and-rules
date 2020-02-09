import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSportTypesComponent } from './all-sport-types.component';

describe('AllSportTypesComponent', () => {
  let component: AllSportTypesComponent;
  let fixture: ComponentFixture<AllSportTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSportTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSportTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
