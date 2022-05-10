import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTravelAgencyComponent } from './list-travel-agency.component';

describe('ListTravelAgencyComponent', () => {
  let component: ListTravelAgencyComponent;
  let fixture: ComponentFixture<ListTravelAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTravelAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTravelAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
