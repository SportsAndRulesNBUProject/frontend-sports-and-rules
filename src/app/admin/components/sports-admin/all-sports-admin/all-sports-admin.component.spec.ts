import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSportsAdminComponent } from './all-sports-admin.component';

describe('AllSportsAdminComponent', () => {
  let component: AllSportsAdminComponent;
  let fixture: ComponentFixture<AllSportsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSportsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSportsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
