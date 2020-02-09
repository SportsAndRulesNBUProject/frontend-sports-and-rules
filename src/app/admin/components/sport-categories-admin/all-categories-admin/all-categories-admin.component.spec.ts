import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoriesAdminComponent } from './all-categories-admin.component';

describe('AllCategoriesAdminComponent', () => {
  let component: AllCategoriesAdminComponent;
  let fixture: ComponentFixture<AllCategoriesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategoriesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
