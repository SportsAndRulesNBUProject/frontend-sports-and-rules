import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsFromCategoryNavComponent } from './sports-from-category-nav.component';

describe('SportsFromCategoryNavComponent', () => {
  let component: SportsFromCategoryNavComponent;
  let fixture: ComponentFixture<SportsFromCategoryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsFromCategoryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsFromCategoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
