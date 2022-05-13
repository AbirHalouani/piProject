import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueAComponent } from './statistique-a.component';

describe('StatistiqueAComponent', () => {
  let component: StatistiqueAComponent;
  let fixture: ComponentFixture<StatistiqueAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
