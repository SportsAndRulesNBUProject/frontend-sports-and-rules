import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCategoryMainPageComponent } from './sports-category-main-page.component';

describe('SportsCategoryMainPageComponent', () => {
  let component: SportsCategoryMainPageComponent;
  let fixture: ComponentFixture<SportsCategoryMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsCategoryMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsCategoryMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
