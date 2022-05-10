import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPartnerComponent } from './travel-partner.component';

describe('TravelPartnerComponent', () => {
  let component: TravelPartnerComponent;
  let fixture: ComponentFixture<TravelPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
