import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersDashboardComponent } from './admin-users-dashboard.component';

describe('AdminUsersDashboardComponent', () => {
  let component: AdminUsersDashboardComponent;
  let fixture: ComponentFixture<AdminUsersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
