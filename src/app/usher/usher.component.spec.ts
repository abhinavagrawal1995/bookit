import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsherComponent } from './usher.component';

describe('UsherComponent', () => {
  let component: UsherComponent;
  let fixture: ComponentFixture<UsherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
