import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsByUserComponent } from './travels-by-user.component';

describe('TravelsByUserComponent', () => {
  let component: TravelsByUserComponent;
  let fixture: ComponentFixture<TravelsByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
