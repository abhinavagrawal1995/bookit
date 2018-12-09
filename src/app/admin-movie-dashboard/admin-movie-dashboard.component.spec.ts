import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieDashboardComponent } from './admin-movie-dashboard.component';

describe('AdminMovieDashboardComponent', () => {
  let component: AdminMovieDashboardComponent;
  let fixture: ComponentFixture<AdminMovieDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
