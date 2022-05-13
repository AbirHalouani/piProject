import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTravelAgencyComponent } from './update-travel-agency.component';

describe('UpdateTravelAgencyComponent', () => {
  let component: UpdateTravelAgencyComponent;
  let fixture: ComponentFixture<UpdateTravelAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTravelAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTravelAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
