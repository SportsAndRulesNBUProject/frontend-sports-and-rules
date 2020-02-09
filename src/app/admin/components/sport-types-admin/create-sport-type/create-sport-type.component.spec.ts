import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSportTypeComponent } from './create-sport-type.component';

describe('CreateSportTypeComponent', () => {
  let component: CreateSportTypeComponent;
  let fixture: ComponentFixture<CreateSportTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSportTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSportTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
