import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSportAdminComponent } from './create-sport-admin.component';

describe('CreateSportAdminComponent', () => {
  let component: CreateSportAdminComponent;
  let fixture: ComponentFixture<CreateSportAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSportAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
