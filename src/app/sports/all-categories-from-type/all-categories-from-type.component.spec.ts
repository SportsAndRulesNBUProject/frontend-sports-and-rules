import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoriesFromTypeComponent } from './all-categories-from-type.component';

describe('AllCategoriesFromTypeComponent', () => {
  let component: AllCategoriesFromTypeComponent;
  let fixture: ComponentFixture<AllCategoriesFromTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategoriesFromTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoriesFromTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
